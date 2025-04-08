import { certifications } from '@/constants/certifications'
import { motion } from 'framer-motion'
import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { PiCertificateFill } from "react-icons/pi";
import { TiArrowRight } from "react-icons/ti";
import { useState } from "react";
import Link from 'next/link';
// modified

const Certifications = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="certification-section !mt-0">
      <div className="my-5 w-full h-px bg-zinc-800" />

      <div className="w-full mx-auto mt-12 border border-slate-500 rounded-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-[#131313] rounded-2xl shadow-lg p-4 hover:shadow-xl transition-shadow"
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-full cursor-pointer"
          >
            <h3 className=" flex flex-row justify-start items-center gap-2 text-lg font-semibold"><PiCertificateFill /><span>My Certifications</span></h3>
            <span
              className={`transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'
                }`}
            >
              <IoMdArrowDropdown />
            </span>
          </button>

          <motion.div
            initial={false}
            animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="my-5 w-full h-px bg-zinc-800" />

            <ul className="list-disc pl-5">
              {certifications.map((cert, index) => (
                cert.credentialURL !== null ? (
                  <li key={index} className="text-[14px] text-gray-600 dark:text-gray-300 box-border">
                    <a
                      href={cert.credentialURL}
                      target='_blank'
                      className='cursor-pointer transition-transform hover:scale-[103%] py-1 ml-1 inline-block horizontal-underline-white'>
                      <span className='inline-flex items-center gap-1'>
                        <span>
                          {cert.title} <span className='text-xs'>&nbsp;↗</span>
                          {/* {cert.title}<TiArrowRight className='-rotate-45' size={15} /> */}
                        </span>
                      </span>
                    </a>
                  </li>
                ) : (
                  <li key={index} className="text-[14px] text-gray-600 dark:text-gray-300 box-border">
                    <p
                      className='cursor-pointer transition-transform hover:scale-[103%] py-1 ml-1 inline-block horizontal-underline-white'>
                      <span className='inline-flex items-center gap-1'>
                        <span>
                          {cert.title}
                          {/* {cert.title}<TiArrowRight className='-rotate-45' size={15} /> */}
                        </span>
                      </span>
                    </p>
                  </li>
                )
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>

    </div>
  )
}

export default Certifications
