import React from "react";
import hbot from "../assets/images/footer.png";
import { FaLinkedinIn,FaTwitter,FaFacebookF,FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" w-full bg-box text-white  md:px-32 md:py-10 ">
      <div className="grid grid-cols-1 text-center md:text-start lg:grid-cols-2 place-content-start lg:place-items-center border-t-2 border-b-2 pt-10 pb-10 border-slate-400">
        <div className="flex flex-col lg:flex-row   items-center ">
          {/* brand image */}
          <div className="flex flex-col justify-stretch items-center  ">
            <img src={hbot} className="md:w-96" alt="hbot sipplier compan   y" />
            <p className="mb-10"> &#169;Singhania</p>
          </div>
          {/* company,terms, related div */}
          <div className="flex text-xs md:text-base justify-center gap-x-8 md:gap-x-8 w-full">
            <div className="flex flex-col">
              <p className="mb-3 ">Company</p>
              <p>About</p>
              <span>FAQ</span>
             
            </div>
            <div className="flex flex-col ">
              <p className="mb-3 ">Terms</p>
              <span>Data Privacy</span>
              <span>Terms</span>
              <span>Accessibility</span>
             
            </div>
            <div className="flex flex-col">
              <p className="mb-3 ">Related</p>
              <span>Find Buyer</span>
              <span>Feedback</span>
             
            </div>
          
          </div>
        </div>
        {/* social icon div */}
        <div className="flex  mt-10 sm:mt-0  gap-x-4 ml-28">
            <div className="size-8 grid place-items-center border-[1px] rounded-full">
                <FaLinkedinIn/>
            </div>
            <div className="size-8 grid place-items-center border-[1px] rounded-full">
                <FaTwitter/>
            </div>
            <div className="size-8 grid place-items-center border-[1px] rounded-full">
                <FaFacebookF/>
            </div>
            <div className="size-8 grid place-items-center border-[1px] rounded-full">
                <FaInstagram/>
            </div>
        </div>
      </div>
    </footer>
  );
}
