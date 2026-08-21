import { stack } from '../content'

export function StackGrid() {
  return (
    <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {stack.map((column, i) => (
          <div
            key={column.group}
            className="reveal border-t border-rule pt-4"
            style={{ transitionDelay: `${i * 90}ms` }}
          >
            <span className="label mb-5 block">{column.group}</span>
            <ul className="space-y-2.5">
              {column.items.map((item) => (
                <li key={item} className="font-display text-lg leading-tight sm:text-xl">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  )
}
