import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SSBPL | Shashwat Samya Buildcon',
  description:
    'Empowering Smart, Scalable, and Sustainable Technology. Shashwat Samya Buildcon delivers engineering and infrastructure solutions across India.',
  icons: {
    icon: '/assets/ssbl_logo_transparent.png',
    apple: '/assets/ssbl_logo_transparent.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
  themeColor: '#0A1F3D',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
