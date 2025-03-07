import { technologies } from '@/constants/Technologies';
import React from 'react';

const TechStack = () => {
  return (
    <section className="tech-stack-section">
      <div className="my-5 w-full h-px bg-zinc-800" />
      <div className='my-12'>
        <h2 className="text-4xl text-center relative">Tech Stack</h2>
        <div className='block w-[90px] h-[3px] bg-[#ffffff] my-1.5 mx-auto'></div>
      </div>
      <div className="flex flex-col gap-5">
        {technologies.map((tech, index) => (
          <div key={tech.category} className="mb-8">
            <h3 className="text-2xl mb-6 pl-4 flex items-center">
              <span className='mr-2'>{tech.icon}</span> {tech.category}
            </h3>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(110px,1fr))] gap-3 p-2">
              {tech.items.map((item, index) => (
                <div
                  key={index}
                  className="tech-card flex flex-col items-center p-3 rounded-[6px] shadow-md transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-1 hover:shadow-lg dark:bg-[#131313] bg-slate-50 dark:hover:bg-[#232125]"
                  style={{ '--hover-color': item.color } as React.CSSProperties}
                >
                  <div className="tech-icon">{item.icon}</div>
                  <span className="tech-name text-xs text-center">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>

  )
}

export default TechStack