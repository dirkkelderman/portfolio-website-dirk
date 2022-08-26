import React from "react";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { FaBeer } from "react-icons/fa";
import Image from "next/image";

const TechStackCard = ({ slice }) => {
  const TechStackIcons = slice.variation.items.map((item, i) => {
    return (
      <div key={i} className="flex justify-between ">
        <div className="relative h-14 w-full py-8">
          <Image
            className=""
            src={item?.icon?.url}
            alt={item?.icon?.alt}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex items-center relative w-full pl-4">
          <PrismicRichText field={item.tech_name} />
        </div>
      </div>
    );
  });

  return (
    <section className="w-full lg:w-1/3 relative lg:left-56 h-80 m-10 lg:-mt-40 ">
      <div className="w-full h-full bg-amber-300 top-0 left-0 opacity-50"></div>
      <div className="w-full z- h-full flex flex-col absolute top-0 left-0 justify-center items-center">
        <div className="bg-amber-400 w-full text-center">
          <PrismicRichText field={slice.variation.primary.title} />
        </div>
        <div className="flex flex-col justify-around w-3/5">
          {TechStackIcons}
        </div>
      </div>
    </section>
  );
};

export default TechStackCard;
