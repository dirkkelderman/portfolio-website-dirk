import React from 'react'
import { PrismicRichText, PrismicLink } from '@prismicio/react'
import Image from 'next/image'

const ProjectCard = ({ slice }) => (
  <section className=' bg-slate-100 m-4 p-4 rounded-2xl'>

    <div className='text-center text-xl'>
      <PrismicRichText field={slice.variation.primary.title} />
    </div>

    <div className='text-center'>
    <PrismicRichText field={slice.variation.primary.description} />

    </div>

    <img src={slice.variation.primary.image.url} alt={slice.variation.primary.image.alt} />
    
    <div className='flex flex-col justify-center'>
      <button>
        Click Here
        <PrismicLink  field={slice.variation.primary.link}>My Link</PrismicLink>
      </button>

    </div>

  </section>
)

export default ProjectCard