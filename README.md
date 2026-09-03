# Suryaram Aravind-urology

Vite + React + TypeScript + Tailwind CSS + Lucide React + react-slick.

## Important Node/Vite compatibility

This version pins **Vite 6.4.1** instead of Vite 7.

Vite 7 requires Node.js 20.19+ or 22.12+. The `crypto.hash is not a function` error normally appears when Vite 7 is run with an older Node.js version.

This project is intentionally compatible with Node 18+.

## Clean installation

If you previously installed the old ZIP, delete the old `node_modules` and lock file first:

```bash
rmdir /s /q node_modules
del package-lock.json
npm cache verify
npm install
npm run dev
```

If you are using PowerShell:

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue
npm cache verify
npm install
npm run dev
```

## Recommended

For the best long-term setup, Node.js 20.19+ LTS or newer is recommended.

## Folder structure

```text
Suryaram Aravind-urology/
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── tailwind.config.js
├── postcss.config.js
├── index.html
├── README.md
├── public/
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── vite-env.d.ts
    └── components/
        ├── Navbar.tsx
        ├── Hero.tsx
        ├── Ticker.tsx
        ├── ClinicInfo.tsx
        ├── AboutSection.tsx
        ├── ConditionsSlider.tsx
        ├── TreatmentsSection.tsx
        ├── EducationSection.tsx
        ├── InstagramSection.tsx
        ├── CTASection.tsx
        ├── Footer.tsx
        └── SectionHeading.tsx
```

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Appointment form

The form currently demonstrates the UI and shows a confirmation alert. Connect `CTASection.tsx` to your backend, email service, WhatsApp workflow or CRM before production.

## Images

The hero uses a CSS illustration. Replace it with a licensed doctor image in `Hero.tsx` if you have permission to use the original site imagery.


## UI enhancements in this version

- Sticky header with a scroll-state shadow.
- Animated desktop navigation underline.
- Animated mobile menu open/close.
- Autoplaying `react-slick` carousels with pause-on-hover.
- Equal-height condition and education cards.
- Text/section entrance transitions.
- New `PatientFeedback.tsx` section matching the supplied reference layout.
- Local `public/patient-feedback.svg` image included in the feedback card.
