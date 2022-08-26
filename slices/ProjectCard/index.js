/* eslint-disable @next/next/no-img-element */
import React from "react";
import { PrismicRichText, PrismicLink } from "@prismicio/react";
import Image from "next/image";

const ProjectCard = ({ slice }) => {
  // console.log(slice.variation.primary);
  return (
    <section className="w-full lg:w-1/3 relative lg:right-56 h-80 m-10 lg:-mt-40 first:mt-40">
      <Image
        className=""
        src={slice.variation.primary.image.url}
        alt={slice.variation.primary.image.alt}
        layout="fill"
        objectFit="cover"
      />
      <div className="w-full h-full bg-red-200 top-0 left-0 opacity-50"></div>
      <div className="w-full z- h-full flex flex-col absolute top-0 left-0 justify-center items-center">
        <PrismicRichText field={slice.variation.primary.title} />
        <button>
          Click Here
          {/* <PrismicLink field={slice.variation.primary.link}>
            My Link
          </PrismicLink> */}
        </button>
      </div>
      <div className=" text-center bg-red-400 text-white w-full">
        <PrismicRichText field={slice.variation.primary.description} />
      </div>
    </section>
  );
};

export default ProjectCard;
