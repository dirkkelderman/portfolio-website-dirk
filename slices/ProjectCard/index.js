/* eslint-disable @next/next/no-img-element */
import React from "react";
import { PrismicRichText, PrismicLink } from "@prismicio/react";
import Image from "next/image";

const ProjectCard = ({ slice }) => (
  <section className="w-1/2 relative  h-80 m-10 left-0">
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
      <button>
        Click Here
        <PrismicLink field={slice.variation.primary.link}>My Link</PrismicLink>
      </button>
    </div>
  </section>
);

export default ProjectCard;
