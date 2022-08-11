import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const TechStackCard = ({ slice }) => (
  <section>
    <h1>TechStackCard</h1>
    <PrismicRichText field={slice.variation.primary.title} />
    <PrismicRichText field={slice.variation.primary.description} />

  </section>
)

export default TechStackCard