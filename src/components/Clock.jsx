import { useEffect, useState } from 'react'

const format = (timezone) =>
  new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: timezone,
  }).format(new Date())

/** Live local time. A small signal that the site is a real place, not a template. */
export function Clock({ timezone, label = 'Local time' }) {
  const [time, setTime] = useState(() => format(timezone))

  useEffect(() => {
    const id = setInterval(() => setTime(format(timezone)), 1000)
    return () => clearInterval(id)
  }, [timezone])

  return (
    <span className="label tabular-nums">
      {label} {time} GMT
    </span>
  )
}
