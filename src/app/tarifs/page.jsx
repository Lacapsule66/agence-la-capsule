import React from 'react'
import Pricing from '../components/Pricing'
import Seo from '../components/Seo'
export const metadata = {
  title: 'Tarifs - Agence web la Capsule',
  description: 'Découvrez nos tarifs pour la création de votre site web. Nous proposons des offres adaptées à tous les budgets.',
  alternates :{
    canonical: "https://sante.agence-la-capsule.fr/tarifs"
  },
}

export default function page() {
  return (
    <><Pricing /><Seo /></>
  )
}
