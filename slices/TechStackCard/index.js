import React from "react";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import { motion } from "framer-motion";

const TechStackCard = ({ slice }) => {
  const TechStackIcons = slice.variation.items.map((item, i) => {
    return (
      <span key={i} className="flex items-center justify-around ">
        <Image
          src={item?.icon?.url}
          alt={item?.icon?.alt}
          layout="intrinsic"
          objectFit="contain"
          height={50}
          width={50}
        />
        <PrismicRichText field={item.tech_name} />
      </span>
    );
  });

  return (
    <motion.section
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 1 },
      }}
      className="lg:w-72 relative lg:left-48 h-96 m-10 lg:-mt-40 shadow-2xl"
    >
      <div className="absolute h-full w-full shadow-2xl">
        <Image
          className="rounded-t-3xl"
          src="https://cdn.searchenginejournal.com/wp-content/uploads/2019/11/why-technical-seo-and-on-site-seo-is-rarely-enough-5dcfef7155db8.png"
          alt="tech stack"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="flex flex-col w-full h-full bg-[#FFD166] opacity-90 top-0 left-0 justify-between">
        <div className="h-full flex flex-col justify-center">
          {TechStackIcons}
        </div>

        <div className="border-t-2 border-black mx-4 py-3 mb-3">
          <PrismicRichText field={slice.variation.primary.title} />
        </div>
      </div>
    </motion.section>
  );
};

export default TechStackCard;
