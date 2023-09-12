import React from 'react'
import Contact from '../components/Contact'
export const metadata = {
  title: 'Contactez-nous - Agence web la Capsule',
  description: 'Contactez-nous pour toute demande de devis ou de renseignements. Nous vous répondrons dans les plus brefs délais.',
  alternates :{
    canonical: "https://sante.agence-la-capsule.fr/contact"
  },
}
export default function page() {
  
  return (
    <Contact/>
  )
}
