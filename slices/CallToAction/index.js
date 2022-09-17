import React, { useState } from "react";
import { PrismicRichText, PrismicLink } from "@prismicio/react";

const CallToAction = ({ slice }) => {
  const [formLoading, setFormLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormLoading(true);

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then(setFormLoading(false))
      .catch((err) => console.log(err));

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <section className="flex bg-[#06D6A0] m-4 p-4 lg:mb-52">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <PrismicRichText field={slice.variation.primary.title} />
        <PrismicRichText field={slice.variation.primary.description} />
        <span>{slice.variation.primary.button_text}</span>
        <form className="flex flex-col w-2/3" onSubmit={handleSubmit}>
          <input
            className="m-2"
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
          <input
            className="m-2"
            type="email"
            name="email"
            placeholder="Your email"
            onChange={handleChange}
          />
          <textarea
            name="message"
            className="m-2 resize-none"
            rows={4}
            placeholder="Your message"
            onChange={handleChange}
          ></textarea>
          <div className="flex justify-end">
            {formLoading ? (
              <button className="m-2 bg-red-600 text-white px-4 py-1" disabled>
                Sending...
              </button>
            ) : (
              <button className="m-2 bg-red-600 text-white px-4 py-1">
                Email me
              </button>
            )}
          </div>
        </form>

        <PrismicLink field={slice.variation.primary.link}>My Link</PrismicLink>
      </div>

      <div className="w-1/2">
        <img
          src={slice.variation.primary.image.url}
          alt={slice.variation.primary.image.alt}
        />
      </div>
    </section>
  );
};

export default CallToAction;
