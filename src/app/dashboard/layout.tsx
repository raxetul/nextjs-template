import React from 'react'

type Props = {}

export default function DashboardLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='flex flex-col gap-y-5'>
    <nav className='bg-black text-white'>
      This is a shared navbar from the layout of dashboard
    </nav>
    {children}
  </div>
  )
}