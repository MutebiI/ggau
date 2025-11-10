import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import Navbar from '@/components/Navbar'
import Navbar from './components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GGAU - Genetics, Genomics and AU | Medical Innovation Uganda',
  description: 'Empowering Uganda through Genetics, Genomics and Medical Innovation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

// Simple Footer Component
function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>&copy; {currentYear} GGAU - Genetics, Genomics Association of Uganda</p>
        <p className="text-blue-200 mt-2">All for one, one for all</p>
      </div>
    </footer>
  )
}