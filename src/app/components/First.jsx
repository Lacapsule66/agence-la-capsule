"use client";
import React, { useEffect } from "react";
import { anim, scale2, scale3, toggle, toggle2 } from "../anim/anim";
import Image from "next/legacy/image";

const incentives = [
  {
    name: "Mise en place de votre site internet rapidement",
    imageSrc: "/icone-fast.svg",
    description:
      "Nous vous accompagnons dans la création de votre site internet, de votre application mobile ou de votre application web.",
  },
  {
    name: "Satisfaction garantie",
    imageSrc: "/icone-star.svg",
    description:
      "Nous sommes spécialisés dans la création de sites internet pour les professionels de santé. Nous vous garantissons un site internet qui vous ressemble et qui répond à vos besoins.",
  },
];

export default function First() {
  useEffect(() => {
    anim();
    toggle();
    toggle2();
    scale3();
  }, []);
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="max-w-2xl mx-auto px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
            <div>
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Agence La Capsule</span>{" "}
            <span className="block text-indigo-600 xl:inline">
           Santé
            </span>
          </h1>
              <p id="scale2" className="mt-4 text-2xl scale-50 text-gray-700 mt-4">
                La Capsule est une agence web spécialisée dans la création de
                sites internet et d'applications pour les professionels de
                santé. Nous vous accompagnons dans la création de votre site
                internet, de votre application mobile ou de votre application
                web.
              </p>
              <p className="mt-4 text-2xl text-gray-700">
                Que vous soyez médecin, infirmier, kinésithérapeute, dentiste, ou encore pharmacien, nous vous accompagnons dans la création de votre site internet.
              </p>
            </div>
          
            <div className="aspect-w-3 aspect-h-2 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/image.webp"
                height={390}
                width={800}
                alt=""
                id="scale"
                className="object-center object-cover scale-50"
              />
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">
                  <Image
                    height={64}
                    width={64}
                    id="scale3"
                    className="w-16 h-16  "
                    src={incentive.imageSrc}
                    alt=""
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <p className="text-lg font-medium text-gray-900">
                    {incentive.name}
                  </p>
                  <p className="mt-2 text-lg text-gray-500">
                    {incentive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
