import React from 'react'
import { PrismicRichText,PrismicLink } from '@prismicio/react'

const CallToAction = ({ slice }) => (
  <section className='flex bg-red-100 m-4 p-4 rounded-2xl'>
    <div className='w-1/2'>
      <PrismicRichText field={slice.variation.primary.title} />
      <PrismicRichText field={slice.variation.primary.description} />
      <span >{ slice.variation.primary.button_text }</span>
      <PrismicLink  field={slice.variation.primary.link}>My Link</PrismicLink>

    </div>
  
    <div className='w-1/2'>
      <img src={slice.variation.primary.image.url} alt={slice.variation.primary.image.alt} />
    </div>

  </section>
)

export default CallToAction