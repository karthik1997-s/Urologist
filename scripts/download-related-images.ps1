$ErrorActionPreference = "Continue"
Add-Type -AssemblyName System.Drawing

$ua = "UrologistClinicSite/1.0 (educational image fetch; contact=local-dev)"
$root = "c:\Users\Orthoberry\Downloads\Urologist-main\Urologist-main\public\assets"
$tmp = Join-Path $root "_tmp"
New-Item -ItemType Directory -Force -Path $tmp | Out-Null

function Wiki($file) {
  $enc = [uri]::EscapeDataString($file)
  return "https://commons.wikimedia.org/wiki/Special:FilePath/${enc}?width=1400"
}
function Unsplash($id) {
  return "https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80"
}

function Convert-ToJpeg($src, $dest) {
  $img = $null
  try {
    $img = [System.Drawing.Image]::FromFile($src)
    $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
    $enc = New-Object System.Drawing.Imaging.EncoderParameters 1
    $enc.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality, [long]82)
    $dir = Split-Path $dest -Parent
    if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
    $img.Save($dest, $codec, $enc)
    return $true
  } catch {
    return $false
  } finally {
    if ($img) { $img.Dispose() }
  }
}

function Save-Related($relPath, $url) {
  $out = Join-Path $root $relPath
  $scratch = Join-Path $tmp ([IO.Path]::GetFileName($relPath) + ".src")
  try {
    & curl.exe -fsSL -A $ua -L --max-time 45 -o $scratch $url
    if (-not (Test-Path $scratch) -or ((Get-Item $scratch).Length -lt 4000)) {
      Write-Output "FAIL $relPath"
      return
    }
    $ok = Convert-ToJpeg $scratch $out
    if (-not $ok) {
      Copy-Item $scratch $out -Force
    }
    Write-Output "OK $relPath $((Get-Item $out).Length)"
  } catch {
    Write-Output "ERR $relPath $($_.Exception.Message)"
  }
}

$jobs = @(
  @{ p = "conditions\kidney-stones.jpg"; u = (Wiki "Blausen_0595_KidneyStones.png") },
  @{ p = "conditions\ureteric-stones.jpg"; u = (Wiki "CT KUB Scan (Computed Tomography of Kidneys, Ureters, and Bladder).jpg") },
  @{ p = "conditions\recurrent-urinary-tract-infection.jpg"; u = (Unsplash "photo-1579154204601-01588f351e67") },
  @{ p = "conditions\hematuria.jpg"; u = (Unsplash "photo-1581594693702-fbdc51b2763b") },
  @{ p = "conditions\hydronephrosis.jpg"; u = (Wiki "Hydronephrosis_Hydroureter.png") },
  @{ p = "conditions\urinary-frequency.jpg"; u = (Wiki "Urinary_System_(Male).png") },
  @{ p = "conditions\urinary-urgency.jpg"; u = (Wiki "Overactivebladder.png") },
  @{ p = "conditions\nocturia.jpg"; u = (Unsplash "photo-1541781774459-bb2af2f05b55") },
  @{ p = "conditions\bph.jpg"; u = (Wiki "Benign Prostatic Hyperplasia (BPH).png") },
  @{ p = "conditions\luts.jpg"; u = (Unsplash "photo-1581056771107-24ca5f033842") },
  @{ p = "conditions\prostatitis.jpg"; u = (Unsplash "photo-1631217868264-e5b90bb7e133") },
  @{ p = "conditions\prostate-cancer.jpg"; u = (Wiki "Diagram showing prostate cancer pressing on the urethra CRUK 182.svg") },
  @{ p = "conditions\kidney-cancer.jpg"; u = (Wiki "Kidney Cancer.png") },
  @{ p = "conditions\bladder-cancer.jpg"; u = (Wiki "Diagram showing early stage bladder cancer CRUK 442.svg") },
  @{ p = "conditions\upper-tract-urothelial-cancer.jpg"; u = (Wiki "Blausen_0592_KidneyAnatomy_01.png") },
  @{ p = "conditions\male-infertility.jpg"; u = (Unsplash "photo-1516589178581-6cd7833ae3b2") },
  @{ p = "conditions\erectile-dysfunction.jpg"; u = (Unsplash "photo-1666214280391-8cf4cd229271") },
  @{ p = "conditions\varicocele.jpg"; u = (Unsplash "photo-1631815588090-d4bfec5b1ccb") },
  @{ p = "conditions\hematospermia.jpg"; u = (Unsplash "photo-1582719471384-894fbb16e074") },
  @{ p = "conditions\male-luts.jpg"; u = (Unsplash "photo-1527613426441-4da17471b66d") },
  @{ p = "conditions\urethral-stricture.jpg"; u = (Wiki "3D Medical Animation Urethral Stunt.jpg") },
  @{ p = "conditions\meatal-stenosis.jpg"; u = (Unsplash "photo-1631815589968-fdb739d1f1c3") },
  @{ p = "conditions\recurrent-urethral-stricture.jpg"; u = (Unsplash "photo-1579684453423-f84349ef60b0") },
  @{ p = "conditions\vesicoureteral-reflux.jpg"; u = (Wiki "Grade 4 Vesico Ureteric Reflux.svg") },
  @{ p = "conditions\posterior-urethral-valves.jpg"; u = (Wiki "Posterior Urethral Valve.svg") },
  @{ p = "conditions\undescended-testis.jpg"; u = (Unsplash "photo-1503454537195-1dcabb73ffb9") },
  @{ p = "conditions\pediatric-hydronephrosis.jpg"; u = (Wiki "Grade 2 Vesico Ureteric Reflux.svg") },

  @{ p = "treatments\rirs.jpg"; u = (Unsplash "photo-1579684385127-1ef15d508118") },
  @{ p = "treatments\ursl.jpg"; u = (Unsplash "photo-1571772996211-2f02c9727629") },
  @{ p = "treatments\pcnl.jpg"; u = (Unsplash "photo-1551190822-a9333d879b1f") },
  @{ p = "treatments\eswl.jpg"; u = (Unsplash "photo-1530497610245-94d3c16cda28") },
  @{ p = "treatments\dj-stenting.jpg"; u = (Unsplash "photo-1530026405186-ed1f139313f8") },
  @{ p = "treatments\turp.jpg"; u = (Wiki "Urologist performing a TURP.png") },
  @{ p = "treatments\holep.jpg"; u = (Unsplash "photo-1579684453475-2c0932ba9904") },
  @{ p = "treatments\medical-bph-treatment.jpg"; u = (Unsplash "photo-1587854692152-cbe660dbde51") },
  @{ p = "treatments\urethral-dilatation.jpg"; u = (Unsplash "photo-1666214280557-f1b5022eb634") },
  @{ p = "treatments\dviu.jpg"; u = (Unsplash "photo-1582750433449-648ed127bb54") },
  @{ p = "treatments\urethroplasty.jpg"; u = (Unsplash "photo-1551076805-e1869033e561") },
  @{ p = "treatments\cystoscopy.jpg"; u = (Unsplash "photo-1576091160399-112ba8d25d1d") },
  @{ p = "treatments\turbt.jpg"; u = (Unsplash "photo-1519494026892-80bbd2d6fd0d") },
  @{ p = "treatments\intravesical-therapy.jpg"; u = (Unsplash "photo-1576678927484-cc907957088c") },
  @{ p = "treatments\laparoscopic-nephrectomy.jpg"; u = (Unsplash "photo-1612349317150-e413f6a5b16d") },
  @{ p = "treatments\laparoscopic-adrenal-surgery.jpg"; u = (Unsplash "photo-1551601651-2a8555f1a136") },
  @{ p = "treatments\other-laparoscopic-procedures.jpg"; u = (Unsplash "photo-1504439468489-c8920d796a29") },
  @{ p = "treatments\kidney-cancer-surgery.jpg"; u = (Unsplash "photo-1559757175-5700dde675bc") },
  @{ p = "treatments\bladder-cancer-surgery.jpg"; u = (Unsplash "photo-1576091160550-2173dba999ef") },
  @{ p = "treatments\prostate-cancer-treatment.jpg"; u = (Unsplash "photo-1471864190281-a93a3070b6de") },
  @{ p = "treatments\male-infertility-evaluation.jpg"; u = (Unsplash "photo-1511895426328-dc8714191300") },
  @{ p = "treatments\varicocele-management.jpg"; u = (Unsplash "photo-1551601651-dd5ff1836972") },
  @{ p = "treatments\surgical-sperm-retrieval.jpg"; u = (Unsplash "photo-1576086213369-97a306d36557") }
)

foreach ($job in $jobs) {
  Save-Related $job.p $job.u
  Start-Sleep -Milliseconds 400
}

Remove-Item $tmp -Recurse -Force -ErrorAction SilentlyContinue
