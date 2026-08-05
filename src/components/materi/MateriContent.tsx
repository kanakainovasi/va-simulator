import { Fragment } from 'react'

interface LineNode {
  type: 'h2' | 'h3' | 'ul' | 'ol' | 'table' | 'code' | 'text' | 'quote'
  content: string
  rows?: string[][]
  headers?: string[]
}

function parseInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = []
  const regex = /\*\*(.+?)\*\*|`(.+?)`/g
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(<Fragment key={key++}>{text.slice(lastIndex, match.index)}</Fragment>)
    }
    if (match[1] !== undefined) {
      parts.push(<strong key={key++} className="font-semibold">{match[1]}</strong>)
    } else if (match[2] !== undefined) {
      parts.push(
        <code key={key++} className="px-1.5 py-0.5 rounded bg-violet-100 dark:bg-violet-900/40 text-violet-800 dark:text-violet-200 text-sm font-mono">
          {match[2]}
        </code>
      )
    }
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < text.length) {
    parts.push(<Fragment key={key++}>{text.slice(lastIndex)}</Fragment>)
  }
  return parts
}

function parseContent(content: string): LineNode[] {
  const lines = content.split('\n')
  const nodes: LineNode[] = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    if (line.startsWith('## ')) {
      nodes.push({ type: 'h2', content: line.slice(3) })
      continue
    }
    if (line.startsWith('### ')) {
      nodes.push({ type: 'h3', content: line.slice(4) })
      continue
    }
    if (line.startsWith('```')) {
      const codeLines: string[] = []
      i++
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i])
        i++
      }
      nodes.push({ type: 'code', content: codeLines.join('\n') })
      continue
    }
    if (line.trim().startsWith('|')) {
      const headerMatch = lines[i + 1]?.trim().match(/^\|[\s\-|]+\|$/)
      if (headerMatch) {
        const headers = line.split('|').map((h) => h.trim()).filter((h) => h.length > 0)
        const rows: string[][] = []
        i += 2
        while (i < lines.length && lines[i].trim().startsWith('|')) {
          const row = lines[i].split('|').map((c) => c.trim()).filter((c) => c.length > 0)
          rows.push(row)
          i++
        }
        i--
        nodes.push({ type: 'table', content: '', headers, rows })
        continue
      }
    }
    if (/^[-*]\s/.test(line)) {
      const ul: string[] = []
      while (i < lines.length && /^[-*]\s/.test(lines[i])) {
        ul.push(lines[i].replace(/^[-*]\s/, ''))
        i++
      }
      i--
      nodes.push({ type: 'ul', content: ul.join('\n') })
      continue
    }
    if (/^\d+\.\s/.test(line)) {
      const ol: string[] = []
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        ol.push(lines[i].replace(/^\d+\.\s/, ''))
        i++
      }
      i--
      nodes.push({ type: 'ol', content: ol.join('\n') })
      continue
    }
    if (line.trim().startsWith('>')) {
      nodes.push({ type: 'quote', content: line.replace(/^>\s?/, '') })
      continue
    }
    if (line.trim() === '') {
      continue
    }
    nodes.push({ type: 'text', content: line })
  }

  return nodes
}

export function MateriContent({ content }: { content: string }) {
  const nodes = parseContent(content)

  return (
    <div className="space-y-5">
      {nodes.map((node, idx) => {
        switch (node.type) {
          case 'h2':
            return (
              <h2 key={idx} className="text-xl sm:text-2xl font-bold mt-8 first:mt-0">
                {node.content}
              </h2>
            )
          case 'h3':
            return (
              <h3 key={idx} className="text-lg font-semibold mt-6">
                {node.content}
              </h3>
            )
          case 'ul':
            return (
              <ul key={idx} className="space-y-2 pl-1">
                {node.content.split('\n').map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-500 shrink-0" />
                    <span className="text-[15px] leading-relaxed text-foreground/90">{parseInline(item)}</span>
                  </li>
                ))}
              </ul>
            )
          case 'ol':
            return (
              <ol key={idx} className="space-y-2 pl-1">
                {node.content.split('\n').map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 text-xs font-bold shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-[15px] leading-relaxed text-foreground/90">{parseInline(item)}</span>
                  </li>
                ))}
              </ol>
            )
          case 'table':
            return (
              <div className="overflow-x-auto rounded-xl border border-violet-100 dark:border-violet-900">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-violet-50 dark:bg-violet-950/40">
                      {node.headers?.map((h, i) => (
                        <th key={i} className="text-left p-3 font-semibold text-violet-700 dark:text-violet-300 whitespace-nowrap">
                          {parseInline(h)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {node.rows?.map((row, i) => (
                      <tr key={i} className="border-t border-violet-100 dark:border-violet-900 hover:bg-muted/40 transition-colors">
                        {row.map((cell, j) => (
                          <td key={j} className="p-3 text-foreground/90 align-top">
                            {parseInline(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          case 'code':
            return (
              <pre className="p-4 rounded-xl bg-gray-900 text-gray-100 text-sm overflow-x-auto leading-relaxed">
                <code>{node.content}</code>
              </pre>
            )
          case 'quote':
            return (
              <blockquote className="pl-4 border-l-4 border-violet-400 text-muted-foreground italic">
                {node.content}
              </blockquote>
            )
          default:
            return (
              <p key={idx} className="text-[15px] leading-relaxed text-foreground/90">
                {parseInline(node.content)}
              </p>
            )
        }
      })}
    </div>
  )
}
