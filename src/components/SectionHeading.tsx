import AnimatedText from "./AnimatedText";
type Props = { eyebrow: string; title: string; description?: string };

export default function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="max-w-3xl">
      <AnimatedText delay={0.17}>
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-teal-600">{eyebrow}</p> 
      </AnimatedText >
      <AnimatedText delay={0.17}>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl text-balance">{title}</h2>
      </AnimatedText>

      {description && <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>}
    </div>
  );
}
