import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="col-span-1 bg-black-300 testimonial-card group rounded-xl">
      <div className="group-hover:bg-blue-300 transition-all duration-700 p-10 rounded-xl ">
        <div className="flex items-center justify-between">
          <img
            src={testimonial.imgPath}
            alt="cover"
            className="md:w-36 md:h-36 w-24 h-24 border border-transparent rounded-full group-hover:border-white transition-all duration-700  group-hover:translate-y-2 group-hover:translate-x-2 "
          />
          <img
            src="/images/quote.png"
            alt="quote"
            className="md:w-28 md:h-28 w-14 h-14 group-hover:mix-blend-screen transition-all duration-700"
          />
        </div>
        <div className="mt-10">
          <p className="md:text-2xl font-light group-hover:text-white-50 transition-all duration-700 ">
            {testimonial.review}
          </p>
        </div>
        <div className="flex md:flex-row flex-col md:items-center justify-between md:mt-20 mt-10">
          <div className="">
            <h1 className="text-blue-50 md:text-3xl text-lg font-medium mb-1 group-hover:text-white transition-all duration-700">
              {testimonial.name}
            </h1>
            <p className=" md:text-xl text-sm opacity-70 font-light group-hover:text-white-50 transition-all duration-700">
              {testimonial.pos}
            </p>
          </div>
          <div className="flex items-center gap-3 md:mt-0 mt-5">
            <img
              src="/images/x.svg"
              alt="x"
              className="md:size-12 size-5 group-hover:mix-blend-luminosity transition-all duration-700"
            />
            <img
              src="/images/fb.svg"
              alt="fb"
              className="md:size-12 size-5 group-hover:mix-blend-luminosity transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
