import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Software CORE',
  description: 'Software CORE - Software para la gestión de la calidad',
  icons: [{ url: '/note.svg', rel: 'icon', type: 'image/svg+xml' }]
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es-co'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
