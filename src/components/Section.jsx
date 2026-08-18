/**
 * Every section shares one header shape: a hairline rule, a numbered mono
 * label on the left, and the title set in serif. The repetition is the point —
 * it is what makes the page read as one document.
 */
export function Section({ index, label, title, id, children, className = '' }) {
  return (
    <section id={id} className={`shell border-t border-rule py-16 sm:py-20 lg:py-28 ${className}`}>
      <header className="reveal mb-10 flex items-baseline gap-6 sm:mb-14">
        <span className="label shrink-0">{index}</span>
        <div className="flex flex-1 items-baseline justify-between gap-6">
          <h2 className="font-display text-3xl leading-none sm:text-4xl lg:text-5xl">{title}</h2>
          {label ? <span className="label hidden shrink-0 sm:block">{label}</span> : null}
        </div>
      </header>
      {children}
    </section>
  )
}
