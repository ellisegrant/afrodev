import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [dark, setDark] = useState(
    () => typeof document !== 'undefined' && document.documentElement.classList.contains('dark'),
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
    document
      .querySelector('meta[name="theme-color"]:not([media])')
      ?.setAttribute('content', dark ? '#11100D' : '#F7F5F0')
  }, [dark])

  return (
    <button
      type="button"
      onClick={() => setDark((d) => !d)}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-ink/5 hover:text-ink"
    >
      <svg
        viewBox="0 0 18 18"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {dark ? (
          <circle cx="9" cy="9" r="3.4" />
        ) : (
          <path d="M14.5 10.8A6 6 0 0 1 7.2 3.5a6 6 0 1 0 7.3 7.3Z" />
        )}
        {dark ? (
          <path d="M9 1.5v1.6M9 14.9v1.6M3.7 3.7l1.1 1.1M13.2 13.2l1.1 1.1M1.5 9h1.6M14.9 9h1.6M3.7 14.3l1.1-1.1M13.2 4.8l1.1-1.1" />
        ) : null}
      </svg>
    </button>
  )
}
