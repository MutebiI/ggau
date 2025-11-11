import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GGAU - Genetics & Genomics Association of Uganda | Medical Research',
  description: 'Leading genetics and genomics research in Uganda. Medical innovation, pharmaceutical production (UMPR), and healthcare transformation across Africa.',
  keywords: 'genetics, genomics, Uganda, medical research, UMPR, healthcare, pharmaceuticals, Africa, DNA research',
  authors: [{ name: 'GGAU Research Team' }],
  creator: 'Genetics and Genomics Association of Uganda',
  publisher: 'GGAU',
  metadataBase: new URL('https://ggau-research.vercel.app'),
  openGraph: {
    title: 'GGAU - Genetics & Genomics Association of Uganda',
    description: 'Transforming healthcare through genetics research and medical innovation in Africa',
    url: 'https://ggau-research.vercel.app',
    siteName: 'GGAU Research',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GGAU - Genetics & Genomics Association of Uganda',
    description: 'Leading medical research and innovation in Uganda',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="cSPaHSTn66UzB5sm-A_8Bdcd7wjJrpWUKAVpbgN9hPg" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

// Footer Component
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