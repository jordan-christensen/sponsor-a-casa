import { Bebas_Neue, Inter } from 'next/font/google'
import localFont from 'next/font/local'

export const bebas_neue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
  style: 'normal',
  weight: ['400']
})

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  style: 'normal',
  weight: ['400', '700']
})

export const chlakh_demo = localFont({
  src: '../../public/fonts/Chlakh-Demo.woff2',
  variable: '--font-chlakh',
  display: 'swap',
})

