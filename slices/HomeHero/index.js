import React from "react";
import { PrismicRichText, PrismicLink } from "@prismicio/react";
import Image from "next/image";

const HomeHero = ({ slice }) => (
  <section className="w-full relative h-80 lg:mb-52 shadow-2xl">
    <Image
      className=""
      src={slice.variation.primary.image.url}
      alt={slice.variation.primary.image.alt}
      layout="fill"
      objectFit="cover"
    />
    <div className="w-full h-full bg-[#26547C] top-0 left-0 opacity-90">
      <div className="flex flex-col h-full justify-end ">
        <div className="border-t-2 border-white mx-4 py-3 text-7xl text-white font-semibold">
          <PrismicRichText field={slice.variation.primary.title} />
          <PrismicRichText field={slice.variation.primary.heroText} />
        </div>
      </div>
    </div>
  </section>
);

export default HomeHero;
