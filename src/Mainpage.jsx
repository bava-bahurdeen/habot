import React, { useState } from "react";
import { MdWork } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { HiArrowLongRight } from "react-icons/hi2";
import requirement from "./assets/images/hero-2.jpg";
import check from "./assets/images/check.png";
import {boxes,buttons} from "./components/data.js"

export default function Mainpage() {
  const [tab, Settab] = useState(false);
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
              className=" md:w-full p-2 h-fit  border-none focus:border-none focus:outline-none bg-none"
              placeholder="Search your required service here"
            />
          </div>
          <div className="flex items-center lg:w-[400px] p-2 bg-white rounded-md">
            <FaLocationDot className="text-xl text-success" />
            <input
              type="text"
              className=" md:w-full p-2 h-fit  border-none focus:border-none focus:outline-none bg-none"
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
      <section className="container mx-auto flex flex-col  lg:flex-row lg:justify-around justify-center p-10 md:p-20">
        <div className="flex flex-col gap-y-6  items-center lg:items-start ">
          <h2 className="text-center text-2xl md:text-4xl font-bold">
            Ready to dive into <span className="text-habot">HABOT?</span>
          </h2>
          <p className=" text-center lg:text-lg lg:text-start  lg:w-9/12 font-medium">
            Signing up with HABOT opens the door to a world of new opportunities
            and potential for business growth. Gain access to a vibrant
            community of like-minded individuals, unlock valuable resources, and
            take the first step towards realizing your entrepreneurial dreams.
          </p>
          <buttn className="w-40 md:w-80 bg-primary p-2 md:p-4 font-bold text-white md:text-lg flex items-center justify-around   rounded-md">
            Signup Today! <HiArrowLongRight className="text-2xl" />{" "}
          </buttn>
        </div>
        <div className="w-full mt-5 lg:mt-0 grid sm:grid-cols-2 place-items-center gap-y-10">
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
      {/* requirements section */}
      <section className=" grid place-items-center">
        <div className="bg-box  rounded-md  flex flex-col lg:flex-row gap-x-14 p-10 md:p-28">
          <img src={requirement} alt="requirement" className="rounded-md" />

          <div>
            <div className="flex justify-around text-white mt-5 lg:mt-0  md:text-3xl font-semibold">
              <div className="text-center space-y-2">
                <h2
                  className={`${
                    tab ? "" : "!text-secondary "
                  } transition-all duration-300  cursor-pointer`}
                  onClick={() => Settab(!tab)}
                >
                  Buyer
                </h2>
                <div
                  className={`${
                    tab ? " opacity-0" : "opacity-100 "
                  } w-32 md:w-52 h-1 transition-all duration-300  bg-secondary`}
                ></div>
              </div>
              <div className="text-center space-y-2">
                <h2
                  className={`${
                    tab ? "!text-secondary " : ""
                  } transition-all duration-300 cursor-pointer`}
                  onClick={() => Settab(!tab)}
                >
                  Supplier
                </h2>
                <div
                  className={`${
                    tab ? "opacity-100 " : "opacity-0"
                  }  w-32 md:w-52 h-1 transition-all duration-300  bg-secondary`}
                ></div>
              </div>
            </div>
            {tab ? (
              <div
                className={`${
                  tab ? "opacity-100" : "opacity-0"
                } md:w-[500px] space-y-2 mt-10 font-medium text-white  `}
              >
                <div className="flex items-center gap-x-2  text-xs md:text-2xl">
                  <img src={check} alt="check" />
                  <p className="flex items-center ">
                    {" "}
                    Complete your profile and get verified..
                  </p>
                </div>

                <div className="flex items-center gap-x-2  text-xs md:text-2xl">
                  <img src={check} alt="check" />
                  <p className="flex items-center ">
                    Select service tags for relevant opportunities.
                  </p>
                </div>
                <div className="flex items-center gap-x-2  text-xs md:text-2xl">
                  <img src={check} alt="check" />
                  <p className="flex items-center  ">
                    {" "}
                    Reach out to buyers and expand your business.
                  </p>
                </div>
              </div>
            ) : (
              <div
                className={`${
                  tab ? "opacity-0" : "opacity-100"
                } md:w-[500px] space-y-2 mt-10 font-medium text-white  `}
              >
                <div className="flex items-center gap-x-2  text-xs md:text-2xl">
                  <img src={check} alt="check" />
                  <p className="flex items-center "> Post your requirements.</p>
                </div>

                <div className="flex items-center gap-x-2  text-xs md:text-2xl">
                  <img src={check} alt="check" />
                  <p className="flex items-center ">
                    {" "}
                    Sit back for multiple suppliers to contact you.
                  </p>
                </div>
                <div className="flex items-center gap-x-2  text-xs md:text-2xl">
                  <img src={check} alt="check" />
                  <p className="flex items-center  ">
                    {" "}
                    Choose among the suppliers based on the ratings and reviews.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* verfied section */}
      <section className="w-full  sm:ml-0 h-48 py-10 md:py-16  bg-cyan-50 mt-10 md:mt-28">
        <div className="flex flex-col gap-y-4 md:flex-row justify-around items-center">
          <h2 className="md:text-2xl lg:text-4xl">
            Lets Suppliers{" "}
            <span className="border-b-4 border-secondary">Find You</span>
          </h2>
          <button className="bg-secondary rounded-lg text-white font-semibold w-52 p-4">
            Get Verified
          </button>
        </div>
      </section>
      {/* how it works section */}
      <section className="h-fit md:mt-10 mb-28 container mx-auto grid place-items-center">
        <div className="md:w-7/12 text-center space-y-7">
          <h2 className="font-bold md:text-4xl">How it works?</h2>
          <p className="text-xs md:text-xl">
            Buyers post their needs and review top suppliers, while suppliers
            complete profiles, connect with potential buyers, and build
            successful business relationships, sharing valuable feedback.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 place-content-center md:gap-x-6 lg:gap-x-0 gap-y-4 lg:gap-y-0 mt-5 mb-5 ">
            {boxes.map(({id,text,img})=>{
                return(
                    <div key={id} className={`${id%2===0?"bg-white":"bg-cyan-50"} w-fit lg:w-96 md:h-64 flex flex-col justify-center items-center text-center gap-y-5 `}>
<img src={img} alt="box" className="w-16 sm:w-auto" />
<p className="text-xs md:text-sm lg:text-lg font-semibold w-40 md:w-64">{text}</p>
                    </div>
                )
            })}
        </div>
      </section>
    </div>
  );
}
