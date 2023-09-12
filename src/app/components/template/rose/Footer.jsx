import Link from "next/link";
import React from "react";
import {
  FaFacebook,

  FaLinkedin,
  FaPinterest,
 
  
} from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";

const FooterRose = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-800 to-indigo-700 py-6 px-6 absolute  w-screen">
      <div className="container mx-auto flex flex-wrap justify-center">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <p className="text-lg font-bold text-white">Liens utiles et pratiques</p>
          <ul className="mt-4">
            <li className="mb-2 h-12">
              <a
                href="https://www.ameli.fr/"
                className="  text-gray-400 hover:text-white"
              >
              Assurance Maladie, Ameli
              </a>
            </li>
            
            <li className="mb-2 h-12">
              <a
                href="https://www.ordre-infirmiers.fr/"
                className="text-gray-400 hover:text-white"
              >
               Ordre National des Infirmiers
              </a>
            </li>
            <li className="mb-2 h-12">
              <a
                href="https://pharmaciebarniol.fr/"
                className="text-gray-400 hover:text-white"
              >
                Pharmacie BARNIOL à Argelès sur Mer
              </a>
            </li>
            <li className="mb-2 h-12">
              <a
                href="https://www.cicat-occitanie.org/"
                className="text-gray-400 hover:text-white"
              >
                Cicat Occitanie
              </a>
            </li>
            
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h6 className="text-lg font-bold text-white">Rétrouvez le cabinet sur les réseaux sociaux</h6>
          <div className="flex mt-4">
            <a
              href="https://www.facebook.com/nicolas.66.300"
              className="mr-4 text-gray-400 hover:text-white"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/nicolas-condette-544672279/"
              className="mr-4 text-gray-400 hover:text-white"
            >
              {" "}
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://pin.it/3kustoP"
              className="mr-4 text-gray-400 hover:text-white"
            >
              {" "}
              <FaPinterest size={24} />
            </a>
            <a href='https://goo.gl/maps/9774sZ4NhywhH7Jh8'
              className="mr-4 text-gray-400 hover:text-white"
            >
              {" "}
              <AiFillGoogleCircle size={24} />
            </a>
            
          </div>
          <div className="mt-4 text-gray-400">
            <p className="font-bold">Numéro de téléphone</p>
            <a href="tel:0768658055" className=" text-green-600 text-4xl">
              {" "}
              <strong> 07 68 65 80 55 </strong>
            </a>
          </div>
          <div className="mt-4 text-gray-400">
            <p className="font-bold"> Adresse</p>
            <p className="text-gray-400">
              {" "}
              4 rue victor Hugo 66700 argeles-sur-mer, Pyrénées-orientales, France
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <h6 className=" font-bold text-white">Infos utiles et pratiques</h6>
          <div className="mt-4">
            <p className="text-gray-200 ">
              Trois services d'urgences à proximité d'Argelès-Sur-Mer : CH Saint
              Jean, <a href="https://www.elsan.care/fr/clinique-saint-pierre">Clinique Saint-Pierre à Perpignan </a>, Clinique Médipôle à
              Cabestany. <br />
              Pour connaître les autres services d'urgences, veuillez vous
              rendre sur le site de l'
              <a href="https://www.hopital.fr/"> hopital.fr </a> Fédération
              Hospitalière de France
            </p>
            <div className="mt-4">
              <p className="text-gray-200">
                Sos Médecin est disponible sur la commune du samedi 14h jusqu'au
                lundi 8h. En dehors de ces horaires, veuillez vous adressez à
                votre médecin traitant.
                <br />
                Pour toutes urgences médicales, veuillez composer le 15.
              </p>
            </div>
            <div className="mt-4">
              <p className="text-gray-200  ">
                {" "}
                Pharmacie de garde : 3237
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-center ">
        <div className=" md:w-2/3 w-full">
          <Link className=" text-gray-400 text-xl " href="/mentions">
            {" "}
            Mentions légales
          </Link>
          <p className="text-gray-200  text-sm">
            La mission de ce site est d'informer les patients sur les
            prestations fournies par le Cabinet de Soins Infirmiers à domicile, ainsi que de
            faciliter la prise de rendez-vous et l'accès aux soins. Ce site
            précise également les secteurs desservis par les infirmiers et infirmières se déplaçant à domicile.
          </p>
          <a href="https://www.agence-la-capsule.fr/" className="text-gray-200  mt-4 text-sm">Site créer par l'Agence La Capsule.</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterRose;
