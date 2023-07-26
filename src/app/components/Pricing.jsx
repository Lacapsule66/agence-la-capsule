/* This example requires Tailwind CSS v2.0+ */
import { CheckCircleIcon } from '@heroicons/react/solid'
import Seo from './Seo'
import Link from 'next/link'

const includedFeatures = [
  'Création du site internet avec mise en page préconcus',
  'Choix du nom de domaine',
  'Déploiement du site internet sur un serveur sécurisé',
  
]

export default function Pricing() {
  return (
    <div id='toggle2' className="bg-gray-100">
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">Une tarification simple</p>
           
            <h3 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-4xl">
            <span className="block xl:inline">   Nous proposons deux formules pour la création de votre site internet. <br/> </span>{" "}
            <span className="block text-indigo-600 xl:inline">
            Pas de mauvaise surprise, pas de frais cachés.
            </span>
          </h3>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-100" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
              <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Création du site avec mise en page préconcus</p>
                <p className="mt-6 text-base text-gray-500">
                  Nous avons créer a l'avance trois mise en page pour votre site internet. Vous pouvez choisir celle qui vous convient le mieux.
                </p>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">
                      Ce qui est inclus
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <ul role="list" className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                    {includedFeatures.map((feature) => (
                      <li key={feature} className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                          <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                <p className="text-lg leading-6 font-medium text-gray-900">Paiement en trois fois possible</p>
                <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                  <span>€450</span>
                  <span className="ml-3 text-xl font-medium text-gray-500">Euro</span>
                </div>
               
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <Link
                      href="/contact"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                    >
                      Contactez-nous
                    </Link>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-100" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
              <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Création du site entièrement personnalisable</h3>
                <p className="mt-6 text-base text-gray-500">
                  Avec ce forfait, nous créons votre site internet de A à Z. Vous pouvez choisir la mise en page, les couleurs, les polices, les images, etc.
                  Nous vous guidons dans le choix de ces éléments pour que votre site internet soit le plus adapté à votre activité.
                </p>
                <div className="mt-8">
                  <div className="flex items-center">
                    <p className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">
                      Ce qui est inclus
                    </p>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <ul role="list" className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                    {includedFeatures.map((feature) => (
                      <li key={feature} className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                          <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                <p className="text-lg leading-6 font-medium text-gray-900">Paiement en trois fois possible</p>
                <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                  <span>€650</span>
                  <span className="ml-3 text-xl font-medium text-gray-500">Euro</span>
                </div>
                
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <Link
                      href="/contact"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                    >
                      Nous contacter
                    </Link>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
