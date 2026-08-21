/** Standard masthead for a standalone page. */
export function PageHeader({ eyebrow, title, lead, meta }) {
  return (
    <header className="shell border-b border-rule pb-10 pt-12 sm:pb-14 sm:pt-16">
      <div className="reveal">
        {eyebrow ? <p className="label mb-5">{eyebrow}</p> : null}
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
          <h1 className="font-display text-[2.5rem] font-bold leading-[1.05] tracking-[-0.02em] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {meta ? <p className="label pb-2">{meta}</p> : null}
        </div>
        {lead ? (
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{lead}</p>
        ) : null}
      </div>
    </header>
  )
}
