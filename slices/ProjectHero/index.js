import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import Image from 'next/image'

const ProjectHero = ({ slice }) => (
  <section className="w-full relative h-80 lg:mb-52 shadow-2xl">
      <Image
        className=""
        src={slice.primary.image.url}
        alt={slice.primary.image.alt}
        layout="fill"
        objectFit="cover"
      />
      <div className="w-full h-full bg-[#26547C] top-0 left-0 opacity-90">
        <div className="flex flex-col h-full justify-end ">
          <div className="border-t-2 border-white mx-4 py-3 text-7xl text-white font-semibold">
            <PrismicRichText field={slice.primary.title} />
            <PrismicRichText field={slice.primary.heroText} />
          </div>
        </div>
      </div>
    </section>
)

export default ProjectHero