import React from "react";
import { MdWork } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { HiArrowLongRight } from "react-icons/hi2";
const buttons = [
  {
    id: 1,
    city: "Abu Dhabi",
  },
  {
    id: 2,
    city: "Dubai",
  },
  {
    id: 3,
    city: "Sharjah & Ajman",
  },
  {
    id: 4,
    city: "Fujairah",
  },
  {
    id: 5,
    city: "Ras Al Khaimah",
  },
  {
    id: 6,
    city: "Umm Al Quwain",
  },
];
export default function Mainpage() {
  return (
    <div className="container mx-auto">
      {/* hero-section */}
      <section className="hero flex flex-col justify-center items-center gap-8 ">
        <div className="text-center text-white">
          <h1 className="text-2xl lg:text-5xl font-extrabold">
            Are You a Supplier?
          </h1>
          <h2 className="text-3xl lg:text-6xl ">
            Explore Matching Opportunities
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-y-4 items-center gap-x-4">
          <div className="flex items-center lg:w-[400px] p-2 bg-white rounded-md">
            <MdWork className="text-xl text-success" />
            <input
              type="text"
              className=" md:w-full p-2 h-fit  border-none focus:border-none bg-none"
              placeholder="Search your required service here"
            />
          </div>
          <div className="flex items-center lg:w-[400px] p-2 bg-white rounded-md">
            <FaLocationDot className="text-xl text-success" />
            <input
              type="text"
              className=" md:w-full p-2 h-fit  border-none focus:border-none bg-none"
              placeholder="Search your desired location here"
            />
          </div>
          <button className="p-2 w-48 md:p-4 rounded-md font-semibold bg-primary text-white md:w-32">
            Search
          </button>
        </div>
        <h2 className="font-bold text-white text-center md:text-start md:text-xl mb-2">
          Are you a buyer?
          <a href="" className="font-light underline">
            Click here if you are looking to post a requirements
          </a>
        </h2>
      </section>
      {/* habot Signup section */}
      <section className="container mx-auto flex flex-col md:flex-row md:justify-around justify-center p-10 md:p-20">
        <div className="flex flex-col gap-y-6  items-center sm:items-start ">
          <h2 className="md:text-4xl font-bold">
            Ready to dive into <span className="text-habot">HABOT?</span>
          </h2>
          <p className="md:w-6/12 font-medium">
            Signing up with HABOT opens the door to a world of new opportunities
            and potential for business growth. Gain access to a vibrant
            community of like-minded individuals, unlock valuable resources, and
            take the first step towards realizing your entrepreneurial dreams.
          </p>
          <buttn className="w-40 md:w-80 bg-primary p-2 md:p-4 font-bold text-white md:text-lg flex items-center justify-around   rounded-md">
            Signup Today! <HiArrowLongRight className="text-2xl" />{" "}
          </buttn>
        </div>
        <div className="w-full mt-5 md:mt-0 grid sm:grid-cols-2 place-items-center gap-y-10">
          {buttons.map(({ id, city }) => {
            return (
              <button
                key={id}
                className="w-40 p-2 sm:p-4 md:w-64 border-2 border-success justify-around md:font-semibold flex items-center transition-all duration-500 hover:bg-success hover:border-none"
              >
                {city}
                <HiArrowLongRight className="text-white md:text-4xl font-extrabold" />
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
