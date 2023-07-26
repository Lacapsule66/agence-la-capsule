"use client"
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link href='/' className="flex-shrink-0">
                  <img
                    className="block lg:hidden h-16 w-auto"
                    src="./logo.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-16 w-auto"
                    src="/logo.svg"
                    alt="Workflow"
                  />
                </Link>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <Link href="/tarifs" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                     Tarifs
                    </Link>
                    <Link
                      href="/team"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      L'équipe
                    </Link>
                    <Link
                      href="/annuaire"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Annuaire 
                    </Link>
                    <Link
                      href="/contact"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                     Contact
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Disclosure.Button
                as={Link}
                href="/tarifs"
                className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Tarif
              </Disclosure.Button>
            
              <Disclosure.Button
                as={Link}
                href="/team"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                L'équipe
               
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                href="/annuaire"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Annuaire 
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                href="/contact"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact 
                
              </Disclosure.Button>
            </div>
           
           
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}