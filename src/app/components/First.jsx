"use client";
import React, { useEffect } from "react";
import { anim, scale2, scale3, toggle, toggle2 } from "../anim/anim";
import Image from "next/legacy/image";
import gsap from "gsap/dist/gsap";
import { SplitText } from "gsap/dist/SplitText";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);


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
    const split = new SplitText(".text", { type: "chars, words" });
    gsap.fromTo(split.words, {
  
     
      y: 150,
      // skewY: 10,
      // skewX: 10,
      // scale: 0.5,
      // rotation: 90,
  
    }, {
      opacity: 1,
      y: 0,
      skewY: 0,
      skewX: 0,
      scale: 1,
      rotation: 0,
      stagger: 0.08,
      duration: 0.66,
      ease: "expo"
      
    });
     
  }, [])
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
            <h1 className="text-4xl tracking-tight  font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <div className=" overflow-hidden">
            <span className="block xl:inline text overflow-hidden  ">Agence La Capsule</span>{" "}
            
            <span className="block text-indigo-600 xl:inline text ">
           Santé
            </span>
            </div>
          </h1>
              <p className="mt-4 text-2xl  text-gray-700 mt-4">
                La Capsule est une agence web spécialisée dans la création de
                sites internet et d'applications pour les professionels de
                santé. Nous vous accompagnons dans la création de votre site
                internet, de votre application mobile ou de votre application
                web.
              </p>
              <div className="aspect-w-3 aspect-h-2 md:hidden  bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/image.webp"
                height={600}
                width={800}
                alt=""
                id="scale"
                style={{height : "100%", width : "100%"}}
                className="object-center object-cover "
              />
            </div>
              <p className="mt-4 text-2xl text-gray-700">
                Que vous soyez médecin, infirmier, kinésithérapeute, dentiste, ou encore pharmacien, nous vous accompagnons dans la création de votre site internet.
              </p>
            </div>
          
            <div className="aspect-w-3 aspect-h-2  max-md:hidden bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/image.webp"
                height={600}
                width={800}
                alt=""
                id="scale"
                style={{height : "100%", width : "100%"}}
                className="object-center object-cover "
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
