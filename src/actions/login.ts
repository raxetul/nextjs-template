'use server'

import type * as z from 'zod'

import { LoginSchema } from '@/schemas'
export const login = (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Invalid login fields!' }
  }
  console.log(values)
  return { success: 'Fields are correct' }
}
