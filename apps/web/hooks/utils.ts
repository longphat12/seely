export function scoreColor(score: number) {
  if (score >= 80) return 'score-good'
  if (score >= 50) return 'score-ok'
  return 'score-bad'
}

export function scoreHex(score: number) {
  if (score >= 80) return '#22c55e'
  if (score >= 50) return '#f59e0b'
  return '#ef4444'
}

export function severityBadge(severity: string) {
  return `badge badge-${severity.toLowerCase()}`
}

export function statusBadge(status: string) {
  return `badge badge-${status.toLowerCase()}`
}

export function timeAgo(date: string) {
  const d = new Date(date)
  const now = new Date()
  const diffMs = now.getTime() - d.getTime()
  const mins = Math.floor(diffMs / 60000)
  if (mins < 1) return 'just now'
  if (mins < 60) return `${mins}m ago`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `${hrs}h ago`
  const days = Math.floor(hrs / 24)
  if (days < 30) return `${days}d ago`
  return d.toLocaleDateString()
}
