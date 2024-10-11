import React from 'react'

const aboutItem = [
    {
        label : "Project done",
        number : 10
    }
]

function About() {
  return (
    <section id='about' className='section'>
        <div className='container'>
            <div className='bg-zinc-800/50 p-7 rounded-2xl md:p-12'>
                <p className='text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]'>
                I am a passionate frontend developer with a strong foundation in JavaScript, React, and modern web technologies. With a knack for building dynamic and user-friendly applications, I enjoy crafting seamless digital experiences. My dedication to problem-solving and continuous learning has led me to develop projects that prioritize performance, usability, and clean design. Always excited to collaborate on innovative ideas and constantly push the boundaries of what’s possible in the web development space.
                </p>

                <div className='flex flex-wrap items-center gap-4 md:gap-7'>
                {
                    aboutItem.map(({label, number}, key) => (
                        <div key={key}>
                            <div className='flex items-center md:mb-2'>
                            <span className='text-2xl font-semibold md:text-4xl'>{number}</span>
                            <span className='text-sky-400 font-semibold md:text-3xl'>+</span>
                            </div>

                            <p className='text-sm text-zinc-400'>{label}</p>
                        </div>
                    ))
                }
                <img src='\Images\logo.svg' alt='Logo' width={30} height={30} 
                className='ml-auto md:w-[40px] md:h-[40px]'></img>
                </div>
            </div>
            
        </div>

    </section>
  )
}

export default About
