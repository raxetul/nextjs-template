'use client'
import React, { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import type * as z from 'zod'

import { CardWrapper } from '@/components/auth/card-wrapper'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'

import { Input } from '@/components/ui/input'
import { RegisterSchema } from '@/schemas'
import { Button } from '@/components/ui/button'
import { FormError } from '@/components/form-error'
import { FormSuccess } from '../form-success'
import { register } from '@/actions/register'

const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: ''
    }

  })

  const onSubmit = (values: z.infer<typeof RegisterSchema>): void => {
    startTransition(() => {
      register(values)
        .then((data) => {
          setError(data.error)
          setSuccess(data.success)
        })
    })
  }

  return (
    <CardWrapper
    headerLabel='Create an account'
    bachButtonLabel="Already have an account?"
    backButtonHref='/auth/login'
    showSocial>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((onSubmit))}
          className="space-y-6">
          <div
            className='space-y-4'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      {...field}
                      placeholder="falan@filan.com"
                      type='email'
                      />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}>
            </FormField>
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      {...field}
                      placeholder='***'
                      type='password'
                      />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}>
            </FormField>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      {...field}
                      placeholder="Falan Filan"
                      />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}></FormField>
          </div>
          <FormError message={error}></FormError>
          <FormSuccess message={success}></FormSuccess>
          <Button
            type='submit'
            disabled={isPending}
            className='w-full'>
            Create an Account
          </Button>
        </form>

      </Form>
    </CardWrapper>
  )
}

export default RegisterForm
