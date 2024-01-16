'use client';

import React from 'react'
import { 
  Card,
  CardContent,
  CardHeader,
  CardFooter
 } from '@/components/ui/card';
import { Header } from '@/components/auth/header';
import { Social } from "@/components/auth/social";
import { BackButton } from "@/components/auth/back-button";

type CardWrapperProps = {
  children: React.ReactNode;
  headerLabel: string;
  bachButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  bachButtonLabel,
  backButtonHref,
  showSocial
}: CardWrapperProps) => {
  return (
    <Card className='w-[400px] shadow-md'>
      <CardHeader>
        <Header label={headerLabel}>
        </Header>
      </CardHeader>
      <CardContent>
          {children}
      </CardContent>
      {showSocial && (
        <CardFooter>
          <Social>

          </Social>
        </CardFooter>
      )}
      <CardFooter>
        <BackButton 
          label={bachButtonLabel}
          href={backButtonHref}
        />
      </CardFooter>
    </Card>
  )
}
