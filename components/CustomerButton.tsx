"use client";

import React from 'react'
import { CustomerPros } from '@/types';
import Image from 'next/image'
const CustomerButton = ({ title, containerStyles, handleClick, btnTypes, textStyles, rightIcon, isDisable }: CustomerPros) => {
   return (
      <button
         disabled={false}
         type={btnTypes || 'button'}
         className={`custom-btn ${containerStyles}`}
         onClick={handleClick}
      >
         <span className={`flex-1 ${textStyles}`}>
            {title}
         </span>
         {rightIcon && (
            <div className='relative w-6 h-6'>
               <Image src={rightIcon} alt='rightIcon' 
               fill
               object-contain/>
            </div>
         )}
      </button>

   )
}

export default CustomerButton