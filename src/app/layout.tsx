import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from "./providers";
import NavBar from './components/NavBar';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Panada Wallet',
  description: 'Learn solidity smart contract security and auditing by joining the guild and taking part in technical workshops. ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body>
      <Providers>
        <NavBar />
        {children}
      </Providers>
    </body>
  </html>
  )
}
