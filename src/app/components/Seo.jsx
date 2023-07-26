/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const tiers = [
  {
    name: 'Standard',
    href: '#',
    priceMonthly: 350,
    description: 'boostez votre visibilité sur internet',
    features: [
      'Récherche de mots clés',
      'Optimisation du contenu',
      'Suivi des résultats',
    ],
  },
  {
    name: 'Premium',
    href: '#',
    priceMonthly: 495,
    description: 'boostez votre visibilité sur internet',
    features: [
      'Récherche de mots clés',
      'Optimisation du contenu',
      'Création de backlinks',
      'Gestion des réseaux sociaux',
      'Suivi des résultats',
      
    ],
  },
]

export default function Seo() {
  return (
    <div className="bg-gray-800">
      <div className="pt-12 sm:pt-16 lg:pt-24">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
            <h4 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">SEO</h4>
            <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Référencement naturel
            </p>
            <p className="text-base text-indigo-600 font-semibold tracking-wide uppercase mt-4">
                Nous vous proposons un référencement naturel de votre site internet afin de le rendre visible sur les moteurs de recherche.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="absolute inset-0 h-3/4 bg-gray-800" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
              {tiers.map((tier) => (
                <div id='scale2' key={tier.name} className=" flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                    <div>
                      <p
                        className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600"
                        id="tier-standard"
                      >
                        {tier.name}
                      </p>
                    </div>
                    <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                      €{tier.priceMonthly}
                      
                    </div>
                    <p className="mt-5 text-lg text-gray-500">{tier.description}</p>
                  </div>
                  <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                    <ul role="list" className="space-y-4">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon className="h-6 w-6 text-green-500" aria-hidden="true" />
                          </div>
                          <p className="ml-3 text-base text-gray-700">{feature}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-md shadow">
                      <Link
                        href="/contact"
                        className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-800"
                        aria-describedby="tier-standard"
                      >
                        Contactez-nous
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
