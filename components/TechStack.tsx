import { technologies } from '@/constants/Technologies';
import { motion } from 'framer-motion';
import React from 'react';

const TechStack = () => {
  return (
    <section className="tech-stack-section">
      <div className="my-5 w-full h-px bg-zinc-800" />
      <div className='my-12'>
        <h2 className="text-4xl text-center relative font-bold">Tech Stack</h2>
        <motion.div
          className="w-[150px] h-[3px] bg-green-600 my-1.5 mx-auto"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
        />
      </div>
      <div className="flex flex-col gap-5">
        {technologies.map((tech, index) => (
          <div key={tech.category} className="mb-8">
            <h3 className="text-2xl mb-6 pl-4 flex items-center">
              <span className='mr-2'>{tech.icon}</span> {tech.category}
            </h3>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(110px,1fr))] gap-3 p-2">
              {tech.items.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  key={index}
                  style={{ '--hover-color': item.color } as React.CSSProperties}
                >
                  <div className="tech-card flex flex-col items-center p-3 rounded-[6px] shadow-md transition-all duration-300 ease-in-out cursor-pointer  hover:shadow-lg hover:-translate-y-1 dark:bg-[#131313] bg-slate-50 dark:hover:bg-[#232125] h-full">
                  <div className="tech-icon">{item.icon}</div>
                  <span className="tech-name text-xs text-center">{item.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>

  )
}

export default TechStack