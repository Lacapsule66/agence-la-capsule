import Image from "next/legacy/image"

/* This example requires Tailwind CSS v2.0+ */
const posts = [
    {
      title: 'Cabinet infirmier, Argelès-sur-Mer',
      href: 'https://www.cabinet-infirmier-argeles.com',
      category: { name: 'Infirmier', href: '#' },
      description:
        'Site internet pour un cabinet infirmier à Argelès-sur-Mer. Prise de rendez-vous en ligne, formulaire de contact, présentation des infirmiers, etc.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      imageUrl:
        '/1.webp',
      readingTime: '6 min',
      author: {
        name: 'Nicolas Condette',
        href: 'https://www.cabinet-infirmier-argeles.com',
        imageUrl:
          '/3.webp',
      },
    },
    
  ]
  
  export default function LastCreate() {
    return (
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
          <h5 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-4xl">
            <span className="block xl:inline">Le dernier site créer <br/> </span>{" "}
            <span className="block text-indigo-600 xl:inline">
           Ils nous font confiance pour booster leur activité.
            </span>
          </h5>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5   ">
            {posts.map((post) => (
              <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <a href="https://cabinet-infirmier-argeles.com/" className="flex-shrink-0">
                  <Image layout="responsive" height={192} width={300} className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                </a>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </a>
                    </p>
                    <a href={post.href} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.description}</p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href={post.author.href}>
                        <span className="sr-only">{post.author.name}</span>
                        <Image width={40} height={40} className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a href={post.author.href} className="hover:underline">
                          {post.author.name}
                        </a>
                      </p>
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  