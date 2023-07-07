import React from 'react'
import Image from 'next/image'
import { footerLinks } from '../constants'
import { link } from 'fs'
import { title } from 'process'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100
    mt-5 border-t border-gray-100'>
      <div className='flex max-md:flex-col
      flex-wrap justify-between gap-5 sm:px-16 py-10'>
        <div className='flex flex-col 
        justify-start items-start gap-6'>
          <Image src="/logo.svg" alt="logo" width={118}
            height={18} className='object-contain'
          />
          <p className='text-base
          text-gray-700'>CarHub 2023 <br />
            All right reserved
          </p>
        </div>
        <div className='footer__links'>

          {footerLinks.map((link) => (
            <div key={link.title}
              className='footer__link'>
              <h3 className='font-bold'>{link.title}</h3>
              {link.links.map((title) => (
                <Link
                  key={title.title}
                  href={title.url}>
                  <h1 className='text-gray-500'>{title.title}</h1>
                </Link>
              ))}

            </div>
          ))}
        </div>

      </div>
      <div className='flex max-md:flex-col
      flex-wrap justify-between gap-5 sm:px-16 py-10'>
        <div className='flex flex-col 
        justify-start items-start gap-6'>
          
          <p className='text-base'>
               @2023 Car Hub All right 
          </p>
        </div>
        <div className='footer__links'>

              <Link className='text-gray'
              href={"/"}>
                Primary Policy
              </Link>

              <Link className='text-gray' 
              href={"/"}>
                Term of Use
              </Link>
        </div>

      </div>
    </footer>
  )
}

export default Footer