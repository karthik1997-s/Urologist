$ErrorActionPreference = "Continue"
$ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
$root = "c:\Users\Orthoberry\Downloads\Urologist-main\Urologist-main\public\assets"

function Save-Image($relPath, $url) {
  $out = Join-Path $root $relPath
  $dir = Split-Path $out -Parent
  if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
  try {
    & curl.exe -fsSL -A $ua -o $out $url
    if ((Test-Path $out) -and ((Get-Item $out).Length -gt 8000)) {
      Write-Output "OK $($relPath) $((Get-Item $out).Length)"
    } else {
      Write-Output "FAIL $($relPath)"
    }
  } catch {
    Write-Output "ERR $($relPath) $($_.Exception.Message)"
  }
}

$jobs = @(
  # Conditions — topic-related stock (clinic, imaging, lab, consult, pediatric)
  @{ p = "conditions\kidney-stones.jpg"; u = "https://images.pexels.com/photos/7088527/pexels-photo-7088527.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "conditions\ureteric-stones.jpg"; u = "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "conditions\recurrent-urinary-tract-infection.jpg"; u = "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "conditions\hematuria.jpg"; u = "https://images.pexels.com/photos/4226262/pexels-photo-4226262.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "conditions\hydronephrosis.jpg"; u = "https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "conditions\urinary-frequency.jpg"; u = "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "conditions\urinary-urgency.jpg"; u = "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "conditions\nocturia.jpg"; u = "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "conditions\bph.jpg"; u = "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "conditions\luts.jpg"; u = "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "conditions\prostatitis.jpg"; u = "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "conditions\prostate-cancer.jpg"; u = "https://images.pexels.com/photos/7659566/pexels-photo-7659566.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "conditions\kidney-cancer.jpg"; u = "https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "conditions\bladder-cancer.jpg"; u = "https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "conditions\upper-tract-urothelial-cancer.jpg"; u = "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "conditions\male-infertility.jpg"; u = "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "conditions\erectile-dysfunction.jpg"; u = "https://images.pexels.com/photos/4098369/pexels-photo-4098369.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "conditions\varicocele.jpg"; u = "https://images.pexels.com/photos/7579834/pexels-photo-7579834.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "conditions\hematospermia.jpg"; u = "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "conditions\male-luts.jpg"; u = "https://images.pexels.com/photos/7108344/pexels-photo-7108344.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "conditions\urethral-stricture.jpg"; u = "https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "conditions\meatal-stenosis.jpg"; u = "https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "conditions\recurrent-urethral-stricture.jpg"; u = "https://images.pexels.com/photos/3259624/pexels-photo-3259624.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "conditions\vesicoureteral-reflux.jpg"; u = "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "conditions\posterior-urethral-valves.jpg"; u = "https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "conditions\undescended-testis.jpg"; u = "https://images.pexels.com/photos/3662664/pexels-photo-3662664.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "conditions\pediatric-hydronephrosis.jpg"; u = "https://images.pexels.com/photos/8942993/pexels-photo-8942993.jpeg?auto=compress&cs=tinysrgb&w=1200" },

  # Treatments — procedure / clinic / theatre / medicines
  @{ p = "treatments\rirs.jpg"; u = "https://images.pexels.com/photos/8460156/pexels-photo-8460156.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "treatments\ursl.jpg"; u = "https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "treatments\pcnl.jpg"; u = "https://images.pexels.com/photos/7583381/pexels-photo-7583381.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "treatments\eswl.jpg"; u = "https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "treatments\dj-stenting.jpg"; u = "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "treatments\turp.jpg"; u = "https://images.pexels.com/photos/3845126/pexels-photo-3845126.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "treatments\holep.jpg"; u = "https://images.pexels.com/photos/8376302/pexels-photo-8376302.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "treatments\medical-bph-treatment.jpg"; u = "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "treatments\urethral-dilatation.jpg"; u = "https://images.pexels.com/photos/4225886/pexels-photo-4225886.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "treatments\dviu.jpg"; u = "https://images.pexels.com/photos/6129214/pexels-photo-6129214.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "treatments\urethroplasty.jpg"; u = "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "treatments\cystoscopy.jpg"; u = "https://images.pexels.com/photos/7088485/pexels-photo-7088485.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "treatments\turbt.jpg"; u = "https://images.pexels.com/photos/7583373/pexels-photo-7583373.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "treatments\intravesical-therapy.jpg"; u = "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "treatments\laparoscopic-nephrectomy.jpg"; u = "https://images.pexels.com/photos/3259629/pexels-photo-3259629.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "treatments\laparoscopic-adrenal-surgery.jpg"; u = "https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "treatments\other-laparoscopic-procedures.jpg"; u = "https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "treatments\kidney-cancer-surgery.jpg"; u = "https://images.pexels.com/photos/3376799/pexels-photo-3376799.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "treatments\bladder-cancer-surgery.jpg"; u = "https://images.pexels.com/photos/6129681/pexels-photo-6129681.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "treatments\prostate-cancer-treatment.jpg"; u = "https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "treatments\male-infertility-evaluation.jpg"; u = "https://images.pexels.com/photos/1257110/pexels-photo-1257110.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "treatments\varicocele-management.jpg"; u = "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  @{ p = "treatments\surgical-sperm-retrieval.jpg"; u = "https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1200" }
)

foreach ($job in $jobs) {
  Save-Image $job.p $job.u
}
