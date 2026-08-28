import AnimatedText from "./AnimatedText";

type Props = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <div >
      <AnimatedText>
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-teal-700 sm:text-xs">
          {eyebrow}
        </p>
      </AnimatedText>

      <AnimatedText delay={0.1}>
        <h2 className="mt-3 max-w-4xl font-display text-3xl font-semibold tracking-[-0.03em] text-slate-900 sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </AnimatedText>

      {description && (
        <AnimatedText delay={0.2}>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            {description}
          </p>
        </AnimatedText>
      )}
    </div>
  );
}