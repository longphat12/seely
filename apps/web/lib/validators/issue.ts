import { z } from 'zod'

export const updateIssueStatusSchema = z.object({
  status: z.enum(['OPEN', 'FIXED', 'IGNORED']),
})
