/* This example requires Tailwind CSS v2.0+ */
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'


export default function Services({ copy }) {
  const [services, setServices] = useState([])
  //console.log(services)
  useEffect(() => {
    // const cleanedServices = copy.data.body[0].items.forEach((service) => {
    //   service.service_icon = document.createRange().createContextualFragment(`<${service.service_icon} className="h-6 w-6" aria-hidden="true" />`, "text/html")
    //   //console.log(service.service_icon.childNodes[0])
   
    // })
    //setServices(cleanedServices)
    setServices(copy.data.body[0].items)
    //console.log(services)
  }, [services])
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {copy.data.service_title}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          {copy.data.service_description}
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {services.map((service) => (
              <div key={service.service_name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <AnnotationIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{service.service_name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{service.service_description}</dd>
              </div>
            ))}
          </dl>
          <div className="flex justify-center align-center">
            <Link href="https://urbandigitalassets.gumroad.com/">
              <a target="_blank" className="max-w-max flex items-center justify-center mt-10 px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Check Out Our Services
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
