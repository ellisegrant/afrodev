import { marked } from 'marked'

/**
 * Posts are Markdown files in src/posts with a small frontmatter block:
 *
 *   ---
 *   title: Keeping a watch party in sync
 *   date: 2026-08-12
 *   summary: One sentence for the list and the meta description.
 *   ---
 *
 * Vite inlines them at build time, so there is no fetch and no loading state —
 * adding a post means adding a file, nothing else.
 */
const files = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default', eager: true })

function parse(raw) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw)
  if (!match) return { meta: {}, body: raw }

  const meta = {}
  for (const line of match[1].split(/\r?\n/)) {
    const at = line.indexOf(':')
    if (at === -1) continue
    meta[line.slice(0, at).trim()] = line
      .slice(at + 1)
      .trim()
      .replace(/^["']|["']$/g, '')
  }
  return { meta, body: raw.slice(match[0].length) }
}

const formatDate = (value) => {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

export const posts = Object.entries(files)
  .map(([path, raw]) => {
    const { meta, body } = parse(raw)
    return {
      slug: path.split('/').pop().replace(/\.md$/, ''),
      title: meta.title ?? 'Untitled',
      date: meta.date ?? '',
      dateLabel: meta.date ? formatDate(meta.date) : '',
      summary: meta.summary ?? '',
      draft: meta.draft === 'true',
      html: marked.parse(body),
    }
  })
  // Newest first; drafts stay out of the published list entirely.
  .filter((post) => !post.draft)
  .sort((a, b) => (a.date < b.date ? 1 : -1))

export const getPost = (slug) => posts.find((post) => post.slug === slug)
