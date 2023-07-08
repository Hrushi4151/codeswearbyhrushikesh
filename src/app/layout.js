import react from 'react'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './globals.css'
import { AppProvider } from './context/Context'
import { MdNavigateBefore } from 'react-icons/md'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CodesWear-Wear The Code',
  description: 'CodesWear - Wear the Code',
  icon: '/logo.png'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/logo.png"
        type="image/<generated>"
        sizes="<generated>"
      />
      <body className={inter.className}>
        <AppProvider>
          <Navbar/>
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  )
}
