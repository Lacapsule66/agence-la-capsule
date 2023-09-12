import React from 'react'
import Team from '../components/Team'
import Team2 from '../components/Team2'
export const metadata = {
  title: "L'équipe - Agence web la Capsule",
  description: "Découvrez l'équipe de l'agence web la Capsule. Nous sommes spécialisés dans la création de sites web pour les professionnels de la santé.",
  alternates :{
      canonical: "https://sante.agence-la-capsule.fr/team"
    },
};

export default function page() {
  return (
   <><Team /><Team2 /></>

  )
}
