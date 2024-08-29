import React from "react";
import {
  LightBulbIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";

const services = [
  {
    step: "01",
    name: "Diagnostics",
    imageUrl:
      "https://images.unsplash.com/photo-1632733711679-529326f6db12?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "State-of-the-art diagnostics to accurately identify vehicle issues.",
  },
  {
    step: "02",
    name: "Repairs",
    imageUrl:
      "https://images.unsplash.com/photo-1687462970787-61d953508926?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      " Engine overhauls to brake replacements, we ensure high-quality work for your vehicle’s longevity.",
  },
  {
    step: "03",
    name: "Maintenance",
    imageUrl:
      "https://images.unsplash.com/photo-1635437536607-b8572f443763?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      " Oil changes, tire rotations, and more to enhance performance and prevent future issues.",
  },
];

const FlipCardComponent = () => {
  return (
    <section className="py-16 mx-auto sm:py-20">
      <div className="mx-auto flex justify-center object-center  px-4 py-16  sm:py-24 lg:max-w-7xl ">
        <div className="flex justify-center object-center flex-col gap-12 sm:gap-16">
          <h2 className="text-4xl font-semibold tracking-tight  text-gray-950  sm:text-5xl lg:text-6xl">
            Services
          </h2>
          <div className=" mx-auto grid gap-12 space-y-10 md:space-y-0 sm:gap-16 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.name}
                className="group  h-96 w-96  [perspective:1000px]"
              >
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front face with image */}
                  <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
                    {service.imageUrl && (
                      <Image
                        className="object-cover cursor-pointer object-left h-full w-full rounded-xl"
                        src={service.imageUrl}
                        alt={service.name}
                        width={320}
                        height={320}
                      />
                    )}
                    <p className=" md:my-6 text-2xl">{service.name}</p>
                  </div>
                  {/* Back face with text */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center">
                      <h2 className="text-2xl font-bold mb-4">
                        {service.name}
                      </h2>
                      <p className="text-lg text-pretty text-center mb-4 ">
                        {service.description}
                      </p>
                      <a href="tel:555-555-5555" className="inline-flex">
                        <button className="my-2 bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 w-auto rounded-full inline-flex items-center">
                          <span>Schedule Service</span>
                          <WrenchScrewdriverIcon className="h-6 w-6 ml-2" />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlipCardComponent;
