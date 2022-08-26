import React from "react";
import { PrismicRichText, PrismicLink } from "@prismicio/react";
import Image from "next/image";

const HomeHero = ({ slice }) => (
  <section className="w-full relative h-80 lg:mb-52">
    <Image
      className=""
      src={slice.variation.primary.image.url}
      alt={slice.variation.primary.image.alt}
      layout="fill"
      objectFit="cover"
    />
    <div className="w-full h-full bg-slate-400 top-0 left-0 opacity-50"></div>
    <div className="w-full z- h-full flex flex-col absolute top-0 left-0 justify-center items-center">
      <PrismicRichText field={slice.variation.primary.title} />
      <PrismicRichText field={slice.variation.primary.heroText} />
    </div>

  </section>
);

export default HomeHero;
