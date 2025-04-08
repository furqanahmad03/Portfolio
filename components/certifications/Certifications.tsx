"use client";

import { certifications } from "@/constants/certifications";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiCertificateFill } from "react-icons/pi";
import Link from "next/link";

const Certifications = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="certification-section !mt-0">
      <div className="my-5 w-full h-px bg-zinc-800" />

      <div className="w-full mx-auto mt-12">
        {certifications.map((cert, index) => (
          <div key={index} className="mb-4 border border-slate-500 rounded-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-[#131313] rounded-2xl shadow-lg p-4 hover:shadow-xl transition-shadow"
            >
              {/* Certification Name - Click to Toggle */}
              <button
                onClick={() => toggleDropdown(index)}
                className="w-full cursor-pointer"
              >
                <div className="flex items-center justify-between gap-2 w-full p-1">

                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <PiCertificateFill className="shrink-0" />

                    <span className="truncate text-lg font-semibold text-left block w-full">
                      {cert.title}
                    </span>
                  </div>

                  <span
                    className={`transform transition-transform ${openIndex === index ? "rotate-180" : "rotate-0"}`}
                  >
                    <IoMdArrowDropdown className="w-5 h-5 shrink-0" />
                  </span>
                </div>
              </button>



              {/* Certification Details */}
              <motion.div
                initial={false}
                animate={
                  openIndex === index
                    ? { height: "auto", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="my-5 w-full h-px bg-zinc-800" />

                <div className="text-[14px] text-gray-600 dark:text-gray-300 box-border pl-4">
                  <p>
                    <strong>Title:</strong> {cert.title}
                  </p>
                  <p>
                    <strong>Issuer:</strong> {cert.issuer}
                  </p>
                  <p>
                    <strong>Issue Date:</strong> {cert.issueDate}
                  </p>
                  {cert.credentialID && (
                    <p>
                      <strong>Certification ID:</strong> {cert.credentialID}
                    </p>
                  )}
                  {cert.credentialURL && (
                    <p>
                      <strong>View Certificate:</strong>{" "}
                      <Link
                        href={cert.credentialURL}
                        target="_blank"
                        className="text-blue-500 hover:underline"
                      >
                        Click here ↗
                      </Link>
                    </p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
