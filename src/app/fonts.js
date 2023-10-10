import { Bebas_Neue, Libre_Baskerville } from 'next/font/google'
import localFont from 'next/font/local'

export const bebas_neue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
  style: 'normal',
  weight: ['400']
})

export const libre_baskerville = Libre_Baskerville({
  subsets: ['latin'],
  variable: '--font-baskerville',
  display: 'swap',
  style: 'normal',
  weight: ['400', '700']
})

export const chlakh_demo = localFont({
  src: '../../public/fonts/Chlakh-Demo.woff2',
  variable: '--font-chlakh',
  display: 'swap',
})

