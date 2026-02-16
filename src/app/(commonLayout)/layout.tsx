import { Navbar1 } from '@/components/layout/navbar1';
import React from 'react'

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Navbar1/>
    <div>{children}</div>
    </>
    
  )
}
