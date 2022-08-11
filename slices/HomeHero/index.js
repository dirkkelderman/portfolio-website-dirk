import React from 'react'
import { PrismicRichText, PrismicLink } from '@prismicio/react'

const HomeHero = ({ slice }) => (
  <section>
    <h1>Hero</h1>
    <PrismicRichText field={slice.variation.primary.title} />
    <PrismicRichText field={slice.variation.primary.heroText} />
    <span >{ slice.variation.primary.button }</span>
    <PrismicLink  field={slice.variation.primary.link}>My Link</PrismicLink>
    <img src={slice.variation.primary.image.url} alt={slice.variation.primary.image.alt} />

  </section>
)

export default HomeHero