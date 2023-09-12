import Image from "next/image"

/* This example requires Tailwind CSS v2.0+ */

  export default function Mission() {
    return (
      <div id="toggle" className="relative bg-white py-16 sm:py-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative sm:py-16 lg:py-0">
            <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
              <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
              <svg
                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
              {/* Testimonial card*/}
              <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                <Image
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/mission.webp"
                  layout="fill"

                  alt=""
                />
                <div className="absolute inset-0  mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-90" />
                <div className="relative px-8">
                  <div>
                    <img
                      className="h-12"
                      src="/logo.svg"
                      alt="Workcation"
                    />
                  </div>
                  <blockquote className="mt-8">
                    <div className="relative text-lg font-medium text-white md:flex-grow">
                      <svg
                        className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-400"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="relative">
                        Toute l'équipe de l'agence La Capsule est à votre écoute pour vous accompagner dans la création de votre site internet. Nous vous proposons des solutions adaptées à vos besoins et à votre budget. Nous vous conseillons sur les meilleures pratiques pour vous aider à développer votre activité en ligne.
                      </p>
                    </div>
  
                    <div className="mt-4">
                      <p className="text-base font-semibold text-indigo-200">Sophie, CEO at Agence La Capsule</p>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
  
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
             
              <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-4xl">
            <span className="block xl:inline">Notre mission,</span>{" "}
            <span className="block text-indigo-600 xl:inline">
            développer votre visibilité sur le web.
            </span>
          </h2>
              <div className="mt-6 text-gray-500 space-y-6">
                <p className="text-xl">
                  
                </p>
                <p className="text-base leading-7">
                Dans un monde de plus en plus connecté, il est essentiel d'être présent en ligne pour atteindre vos patients et développer votre activité. Chez La Capsule, nous comprenons les besoins uniques des professionnels de santé et nous nous engageons à vous offrir une présence en ligne efficace et professionnelle.
                </p>
                <p className="text-base leading-7">
                Notre équipe expérimentée de concepteurs et de développeurs web sait exactement comment créer un site internet adapté à votre domaine médical. Nous mettons en avant votre expertise et vos services, tout en garantissant une expérience utilisateur fluide et attrayante.
                </p>
                <p className="text-base leading-7">
                Ne laissez pas votre visibilité en ligne être un obstacle à votre succès professionnel. Faites confiance à notre agence web spécialisée dans les sites internet pour les professionnels de santé et donnez à votre pratique médicale la présence en ligne qu'elle mérite.
                </p>
                <p className="text-base leading-7">
                Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé. Ensemble, nous propulserons votre activité vers de nouveaux sommets !
                </p>
              </div>
            </div>
  
           
           
          </div>
        </div>
       

      </div>
    )
  }
  