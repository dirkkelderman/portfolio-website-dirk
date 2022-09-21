import React from "react";
import { PrismicRichText } from "@prismicio/react";

const ProjectDescriptionCard = ({ slice }) => {
  return (
    <section className="lg:w-3/6 relative lg:right-48 h-96 m-10 lg:-mt-52  bg-slate-400 ">
      <PrismicRichText field={slice.primary.title} />
      <PrismicRichText field={slice.primary.description} />
    </section>
  );
};

export default ProjectDescriptionCard;
