
import Model from './components/models/Model'
import RegisterModel from './components/models/RegisterModel'
import Navbar from './components/navbar/Navbar'
import './globals.css'

import { Nunito } from 'next/font/google'


export const metadata = {
  title: 'Airbnb',
  description: 'This is airbnb clone site',
}

const font = Nunito({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {/* <Model isOpen  actionLabel={"Submit"} title={"Hello Wrold"} /> */}
        <RegisterModel />
        {children}
      </body>
    </html>
  )
}
