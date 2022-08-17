import React from "react";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { FaBeer } from "react-icons/fa";
import Image from "next/image";

const TechStackCard = ({ slice }) => {
  return (
    <section className="w-1/2 relative  h-80  ml-40 m-10 left-0 bg-slate-400 opacity-50">
      {/* <div className="w-full h-full bg-slate-400 top-0 left-0 opacity-50"></div> */}
      <div className="w-full z- h-full flex flex-col absolute top-0 left-0 justify-center items-center">
        <PrismicRichText field={slice.variation.primary.title} />
      </div>
      {slice.variation.items.map((item, i) => {
        return (
          <div key={i} className="flex justify-around">
            <Image
              className=""
              src={item?.icon?.url}
              alt={item?.icon?.alt}
              width={50}
              height={50}
              // layout="fill"
              // objectFit="cover"
            />
            <PrismicRichText field={item.tech_name} />
          </div>
        );
      })}
    </section>
    // <section className="grid lg:grid-cols-6 gap-2 w-full lg:w-3/4 py-4 lg:-mt-52 h-80">
    //   <div className="col-start-4 col-end-8 bg-slate-200 text-center rounded-2xl flex flex-col">
    // {slice.variation.items.map((item, i) => {
    //   return (
    //     <div key={i} className="flex justify-around">
    //       <div className=" py-3">
    //         <img src={item?.icon?.url} alt={item?.icon?.alt} width="100px" />
    //       </div>
    //       <div className="">
    //         <PrismicRichText field={item.tech_name} />

    //       </div>
    //     </div>
    //   );
    // })}
    //   </div>
    // </section>
  );
};

export default TechStackCard;
