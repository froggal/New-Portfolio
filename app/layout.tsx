import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import styles from './layout.module.css'
import gstyles from './global.module.css'
import footer from './footer.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '키페의 포트폴리오',
  description: '학생 개발자 키페의 포트폴리오입니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={gstyles.main}>
      <body className={inter.className}>{children}</body>
      <div className={footer.main}>
        <div>
          <h1 className={footer.name}>KeyFrog</h1> <p>Copyright 2023. KeyFrog All rights reserved</p>
          <p><Link href='https://litt.ly/keyfrog'>Links</Link></p>
        </div>
      </div>
    </html>
  )
}
