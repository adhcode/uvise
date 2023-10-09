import './globals.css'
import { Inter } from 'next/font/google'
import { Nunito } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })


const nunito = Nunito ({ subsets: ['latin'] })

export const metadata = {
  title: 'UVISE',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className} >
      
        <header>
          <Navbar/>
          </header>
        <main>
          {children}
        </main>
       <Footer/>
          </body>
    </html>
  )
}
