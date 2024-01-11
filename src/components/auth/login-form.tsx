import React from 'react'
import { CardWrapper } from "@/components/auth/card-wrapper";

type Props = {}

const LoginForm = (props: Props) => {
  return (
    <CardWrapper
    headerLabel='Welcome back'
    bachButtonLabel="Don't have an account?"
    backButtonHref='/auth/register'
    showSocial>
      Login Form!
    </CardWrapper>
  )
}

export default LoginForm