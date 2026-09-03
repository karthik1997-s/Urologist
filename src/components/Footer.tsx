import { Instagram, Mail, Stethoscope } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#092f2d] text-slate-300">
      <div className="container-wide grid gap-10 py-12 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <div className="flex items-center gap-3 text-white">
            {/* <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal-600">
            <Stethoscope size={20}/>
            </span> */}
            <span className="font-display font-bold">Dr. Suryaram Aravind</span></div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">Consultant Urologist in Karaikudi providing evidence-based urological care and patient education.</p>
        </div>
        <div><p className="text-xs font-bold uppercase tracking-widest text-teal-200">Contact</p><div className="mt-4 space-y-3 text-sm"><a href="tel:+9280701585" className="block hover:text-white">+91 93605 10074</a><a href="mailto:rkckaraikudi1@gmail.com" className="block hover:text-white">Email clinic</a><a href="https://www.instagram.com/uro_bytes/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white"></a></div></div>
        <div><p className="text-xs font-bold uppercase tracking-widest text-teal-200">Legal</p><div className="mt-4 space-y-3 text-sm"><a href="#" className="block hover:text-white">Privacy Policy</a><a href="#" className="block hover:text-white">Terms of Use</a><a href="#" className="block hover:text-white">Medical Disclaimer</a></div></div>
      </div>
      <div className="border-t border-white/10"><div className="container-wide flex flex-col gap-2 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Dr. Suryaram Aravind. All rights reserved.</span><span>Karaikudi · Tamil Nadu · India</span></div></div>
    </footer>
  );
}
