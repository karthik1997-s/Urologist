import { ArrowRight, CalendarDays, Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "./SectionHeading";

const phone = "+919360510074";
const email = "krishnakanth002@gmail.com";

export default function CTASection() {
  return (
    <section id="appointment" className="section-pad">
      <div className="container-wide grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <SectionHeading eyebrow="06 Consultation" title="Have a urological concern?" description="Book a consultation for a proper evaluation and a clear discussion of your options." />
          <div className="mt-8 space-y-4">
            <a href={`tel:${phone}`} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 hover:border-teal-200"><Phone className="text-teal-700"/><span><span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Call</span><span className="font-semibold text-ink">+91 93605 10074</span></span></a>
            <a href={`mailto:${email}`} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 hover:border-teal-200"><Mail className="text-teal-700"/><span><span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Email</span><span className="font-semibold text-ink">{email}</span></span></a>
            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5"><MapPin className="mt-1 text-teal-700"/><span><span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Hospital</span><span className="font-semibold leading-6 text-ink">Preethi Multispeciality Hospital, 50 Melur Main Road, Uthangudi, Madurai</span></span></div>
          </div>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); alert("Thank you. Please call the clinic to confirm your appointment."); }} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-card md:p-9">
          <div className="mb-7 flex items-center gap-3"><CalendarDays className="text-teal-700"/><div><h3 className="font-display text-2xl font-semibold">Request an appointment</h3><p className="text-sm text-slate-500">We will use these details to understand your request.</p></div></div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" placeholder="Your full name" />
            <Field label="Phone" placeholder="Mobile number" type="tel" />
            <Field label="Email" placeholder="Email address" type="email" />
            <Field label="Preferred date" type="date" />
            <label className="block sm:col-span-2"><span className="mb-2 block text-sm font-semibold text-slate-700">How can we help?</span><textarea rows={4} placeholder="Briefly describe your concern" className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none focus:border-teal-500 focus:bg-white"/></label>
          </div>
          <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-700 px-5 py-3.5 font-semibold text-white hover:bg-teal-800">Submit request <ArrowRight size={17}/></button>
          <p className="mt-4 text-center text-xs text-slate-400">This form is a request only. Please confirm availability with the clinic.</p>
        </form>
      </div>
    </section>
  );
}

function Field({ label, placeholder = "", type = "text" }: { label: string; placeholder?: string; type?: string }) {
  return <label className="block"><span className="mb-2 block text-sm font-semibold text-slate-700">{label}</span><input required type={type} placeholder={placeholder} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none focus:border-teal-500 focus:bg-white"/></label>;
}
