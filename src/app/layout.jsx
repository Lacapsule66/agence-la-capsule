
import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Agence web la Capsule - pour les professionnels de la santé',
  description: 'Création de sites web pour les professionnels de la santé, médecins, infirmiers, kinésithérapeutes, ostéopathes, etc. Boostez votre visibilité sur internet !',
  authors : [{name: "Romain Marty"}],
  icons: {
    icon: "favicon.ico",
  },
    referrer: 'origin-when-cross-origin',
  alternates :{
    canonical: "https://www.agence-la-capsule.fr/"
  },
  generator : "NextJS",
  applicationName : "Agence web la Capsule",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
   
  },
  openGraph: {
    title: 'Agence web la Capsule - pour les professionnels de la santé',
    description: 'Création de sites web pour les professionnels de la santé, médecins, infirmiers, kinésithérapeutes, ostéopathes, etc. Boostez votre visibilité sur internet !',
    url: 'https://www.agence-la-capsule.fr/',
    siteName: 'Agence web la Capsule',
    locale: 'fr_FR',
    type: 'website',
  },







}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Analytics />
        </body>
    </html>
  )
}
