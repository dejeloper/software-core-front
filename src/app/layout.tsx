import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Software CORE',
  description: 'Software CORE - Software para la gestión de la calidad'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-co">
      <body>{children}</body>
    </html>
  )
}
