"use client"

import { useEffect } from 'react';
import './globals.css'
import { Inter } from 'next/font/google'
import { GoogleAnalytics } from 'nextjs-google-analytics';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  
  useEffect(() => {
    // TagManager.initialize({ gtmId: 'GTM-XXXXX' });
  }, []);


  return (
    <html lang="es">
      <GoogleAnalytics />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
