"use client";
import { Fragment, useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  AnnotationIcon,
  ChatAlt2Icon,
  ChatAltIcon,
  DocumentReportIcon,
  HeartIcon,
  InboxIcon,
  MenuIcon,
  PencilAltIcon,
  QuestionMarkCircleIcon,
  ReplyIcon,
  SparklesIcon,
  TrashIcon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/outline";


import { BsBandaid } from "react-icons/bs";
import { RiSyringeFill } from "react-icons/ri";
import { GiHealthNormal } from "react-icons/gi";
import { opacityAnim, scale, scale2, toggle } from "@/animation/animation";
import RoseContact from "../components/template/rose/RoseContact";
import Image from "next/legacy/image";
import FooterRose from "../components/template/rose/Footer";
const solutions = [
  {
    name: "Inbox",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: InboxIcon,
  },
  {
    name: "Messaging",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: AnnotationIcon,
  },
  {
    name: "Live Chat",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ChatAlt2Icon,
  },
  {
    name: "Knowledge Base",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: QuestionMarkCircleIcon,
  },
];
const features = [
  {
    name: "Pansement lourd et complexe",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: BsBandaid,
  },
  {
    name: "Aide partielle ou totale au soins d’hygiène",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: GiHealthNormal,
  },
  {
    
    name: "Suivi diabétique (endocrinologie)",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: GiHealthNormal,
  },
  {
    name: "Prise de sang",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: RiSyringeFill,
  },
  {
    name: "Perfusion, Injections",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: RiSyringeFill,
  },
  {
    name: "Vaccination",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: RiSyringeFill,
  },
  {
    name: "Prise en charge de la douleur",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: BsBandaid,
  },
  {
    name: "Stomie et iléostomie",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: HeartIcon,
  },
];

const footerNavigation = {
  solutions: [
    { name: "Nos soins", href: "#" },
    { name: "Contact", href: "#" },
    { name: " A propos", href: "#" },
    
  ],
  support: [],
   
  company: [],
  legal: [
   
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Dribbble",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function page() {
  useEffect(() => {
    opacityAnim();
    scale();
    scale2();
    toggle();
  }, []);
  return (
    <div className="bg-white">
      <header>
        <Popover className="relative bg-gradient-to-r from-purple-200 to-indigo-50">
          <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
            <div className="flex justify-start ">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <Image
                height={32}
                width={150} 
                loading="lazy"             
                  className="h-8 w-auto sm:h-10" src="/logo.svg" alt="" />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:bg-white p-4 rounded-lg"
              >
                Nos Soins
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:bg-white p-4 rounded-lg"
              >
                Nous Contacter
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:bg-white p-4 rounded-lg"
              >
                A propos
              </a>
            </Popover.Group>
          </div>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="/logo.svg"
                        alt="Workflow"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  
                </div>
                <div className="py-6 px-5">
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                     Nos Soins
                    </a>
                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Nous Contacter
                    </a>
                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-white"
                    >
                      A propos
                    </a>
                  </div>
                  
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </header>

      <main>
        {/* Hero section */}
        <div className="relative mt-6">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div id="opacity" className="opacity-0 relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div  className="  absolute inset-0">
                <Image
                priority={true}
                layout='fill'
                sizes="100%"
                  className="h-full w-full object-cover"
                  src="/infirmier.jpeg"
                  alt="People working on laptops"
                />
                <div  className="  absolute inset-0 bg-gradient-to-r from-purple-200 to-indigo-700 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">
                    Cabinet infirmier - nom de la commune
                  </span>
                  <span className="block text-indigo-200">Prénom - Nom</span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  neque elit, tristique
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                    <a
                      href="#"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                    >
                      Nous contactez
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Cloud */}
        <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xl font-semibold uppercase text-gray-500 tracking-wide">
              Le cabinet est ouvert du lundi au vendredi de 8h à 18h
            </p>
            <ul className=" list-inside list-none my-12 mx-auto text-center	">
                <li className="text-xl lg:text-2xl  leading-8 text-gray-700  ">
            Adresse du cabinet d'infirmier :<br /> <strong> 4 rue victor Hugo 66700, Argelès-sur-mer.</strong>
                </li>
                <li className="text-xl lg:text-2xl  leading-8 text-gray-700  ">
                  Téléphone: <br />{" "}
                  <a href="tel:0768658055" className=" text-green-600 max-lg:text-4xl text-6xl font-bold ">
                    07 68 65 80 55
                  </a>
                </li>
              
                <li className="text-xl lg:text-2xl  leading-8 text-gray-700  ">
                  Horaires d'ouverture du cabinet: <br />{" "}
                  <strong>du lundi au dimanche de 7h à 20h</strong>
                </li>

                </ul>
            
         </div>
        </div>
        {/* Alternating Feature Sections */}
        <div className="relative  pb-32 overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
          />
          <div className="relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div>
                  <div className="mt-6">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
           
            <h3 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-4xl">
            <span className="block xl:inline">  Présentation des infirmiers <br/> </span>{" "}
            <span className="block text-indigo-600 xl:inline">
            Le nom du Cabinet
            </span>
          </h3>
          </div>
        </div>
                    <p className="mt-4 text-lg text-gray-500">
                      Semper curabitur ullamcorper posuere nunc sed. Ornare
                      iaculis bibendum malesuada faucibus lacinia porttitor.
                      Pulvinar laoreet sagittis viverra duis. In venenatis sem
                      arcu pretium pharetra at. Lectus viverra dui tellus ornare
                      pharetra.
                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                      >
                        Nous contactez
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-6">
                  <blockquote>
                    <div>
                      <p className="text-base text-gray-500">
                        &ldquo;Cras velit quis eros eget rhoncus lacus ultrices
                        sed diam. Sit orci risus aenean curabitur donec aliquet.
                        Mi venenatis in euismod ut.&rdquo;
                      </p>
                    </div>
                    <footer className="mt-3">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <img
                            className="h-6 w-6 rounded-full"
                            src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                            alt=""
                          />
                        </div>
                        <div className="text-base font-medium text-gray-700">
                          Nom prénon - Responsable du cabinet.
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div id="scale" className="px-4 rounded-r-lg scale-50  lg:m-0 lg:relative  lg:h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2939.444103870736!2d3.0231798000000003!3d42.545862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b077fca8840f03%3A0x9aaed9b81fa49b0e!2sInfirmier%20Argeles%20CONDETTE%20NICOLAS!5e0!3m2!1sfr!2sfr!4v1686478015653!5m2!1sfr!2sfr"
                    style={{
                      width: "100%",
                      height: "450px",
                    }}
                    loading="lazy"
                    className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                <div>
                  
                  <div className="mt-6">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
           
            <h3 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-4xl">
            <span className="block xl:inline"> A propos du Cabinet <br/> </span>{" "}
            <span className="block text-indigo-600 xl:inline">
            Le nom du Cabinet
            </span>
          </h3>
          </div>
        </div>
                    <p className="mt-4 text-lg text-gray-500">
                      Semper curabitur ullamcorper posuere nunc sed. Ornare
                      iaculis bibendum malesuada faucibus lacinia porttitor.
                      Pulvinar laoreet sagittis viverra duis. In venenatis sem
                      arcu pretium pharetra at. Lectus viverra dui tellus ornare
                      pharetra.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                <div id="scale2" className=" scale-50  sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <Image 
                  height={500}
                  width={500}
                    className=" rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-10 lg:h-full  "
                    src="/cabinet2.webp"
                    alt="Customer profile user interface"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Feature Section */}
        <div className="bg-gradient-to-r from-purple-800 to-indigo-700">
          <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Nos soins
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-purple-200">
              Liste des soins proposés par le cabinet.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
              {features.map((feature) => (
                <div id="soin" key={feature.name}>
                  <div>
                    <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-white">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-base text-purple-200">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats section */}
       <RoseContact />

        {/* CTA Section */}
      </main>

   <FooterRose />
    </div>
  );
}
