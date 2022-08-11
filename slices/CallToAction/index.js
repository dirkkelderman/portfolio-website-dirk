import React from 'react'
import { PrismicRichText,PrismicLink } from '@prismicio/react'

const CallToAction = ({ slice }) => (
  <section>
    <h1>Call To Action</h1>
    <PrismicRichText field={slice.variation.primary.title} />
    <PrismicRichText field={slice.variation.primary.description} />
    <span >{ slice.variation.primary.button_text }</span>
    <PrismicLink  field={slice.variation.primary.link}>My Link</PrismicLink>
    <img src={slice.variation.primary.image.url} alt={slice.variation.primary.image.alt} />

  </section>
)

export default CallToAction