'use client'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

interface HistoryPoint {
  overallScore: number; onPageScore: number; technicalScore: number;
  contentScore: number; performanceScore: number; createdAt: string
}

export function ScoreHistoryChart({ data }: { data: HistoryPoint[] }) {
  const chartData = data.map((d) => ({
    date: new Date(d.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    Overall: d.overallScore,
    'On-Page': d.onPageScore,
    Technical: d.technicalScore,
    Content: d.contentScore,
    Performance: d.performanceScore,
  }))

  return (
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" />
        <XAxis dataKey="date" stroke="#a1a1aa" fontSize={12} />
        <YAxis domain={[0, 100]} stroke="#a1a1aa" fontSize={12} />
        <Tooltip
          contentStyle={{ background: '#18181b', border: '1px solid #3f3f46', borderRadius: 8, fontSize: 13 }}
          labelStyle={{ color: '#fafafa' }}
        />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        <Line type="monotone" dataKey="Overall" stroke="#6366f1" strokeWidth={2} dot={{ r: 3 }} />
        <Line type="monotone" dataKey="On-Page" stroke="#22c55e" strokeWidth={1.5} dot={false} />
        <Line type="monotone" dataKey="Technical" stroke="#f59e0b" strokeWidth={1.5} dot={false} />
        <Line type="monotone" dataKey="Content" stroke="#06b6d4" strokeWidth={1.5} dot={false} />
        <Line type="monotone" dataKey="Performance" stroke="#ec4899" strokeWidth={1.5} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  )
}
