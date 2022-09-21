import React from "react";
import { PrismicRichText } from "@prismicio/react";

const ProjectImageCard = ({ slice }) => {
  const imageDefault = (
    <section className="lg:w-3/6 relative lg:left-60 m-10 lg:-mt-40 last:lg:-mt-10">
      <div className="flex justify-center">
        <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
      </div>
    </section>
  );

  const imageLeft = (
    <section className="lg:w-3/6 relative lg:right-60 m-10 lg:-mt-40 last:lg:-mt-10">
      <div className="flex justify-center">
        <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
      </div>
    </section>
  );
  return (
    <>
      {slice.variation === "default" ? imageDefault : imageLeft}
    </>
  );
};

export default ProjectImageCard;
