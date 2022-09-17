/* eslint-disable @next/next/no-img-element */
import React from "react";
import { PrismicRichText, PrismicLink } from "@prismicio/react";
import Image from "next/image";
import { motion } from "framer-motion";

const cardAnimation = {
  offScreen: { x: -1000, opacity: 0 },
  onScreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 2 },
  },
  hover: {
    scale: 1.1,
    transition: { duration: 1 },
  },
};

const filterAnimation = {
  offScreen: { y: 100, opacity: 0 },
  onScreen: {
    y: 0,
    opacity: 0.9,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 3,
    },
  },
  hover: {
    scale: 1.1,
    transition: { duration: 1 },
  },
};

const textAnimation = {
  offScreen: { y: 100, opacity: 0 },
  onScreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 3,
    },
  },
  // hover: {
  //   scale: 1.1,
  //   transition: { duration: 1 },
  // },
};

const ProjectCard = ({ slice }) => {
  return (
    <motion.section
      initial={"offScreen"}
      whileInView={"onScreen"}
      whileHover={"hover"}
      viewport={{
        once: true,
        amount: 0.5,
      }}
      transition={{ staggerChildren: 0.5 }}
      className="lg:w-72 relative lg:right-48 h-96 m-10 lg:-mt-40 first:mt-40 "
    >
      <motion.div variants={cardAnimation} className="absolute h-full w-full ">
        <Image
          className=""
          src={slice.variation.primary.image.url}
          alt={slice.variation.primary.image.alt}
          layout="fill"
          objectFit="cover"
        />
      </motion.div>

      <motion.div
        variants={filterAnimation}
        className="flex flex-col justify-end w-full h-full bg-[#EF476F] top-0 left-0 opacity-90 font-medium z-10 shadow-2xl"
      >
        <motion.div variants={textAnimation} className="py-3 mx-4 font-bold">
          <PrismicRichText field={slice.variation.primary.title} />
        </motion.div>

        <div className="border-t-2 border-black mx-4">
          <motion.div variants={textAnimation}>
            <PrismicRichText field={slice.variation.primary.description} />
          </motion.div>
          <motion.button variants={textAnimation} className="py-1">
            Click Here
            <PrismicLink document={slice.variation.primary.link}>
              My Link
            </PrismicLink>
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ProjectCard;
