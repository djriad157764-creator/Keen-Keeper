import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-[#244D3F]">
      <footer className="w-full max-w-277.5 mx-auto text-center  text-primary-content pt-20">
        <div className="   px-5 xl:px-0">
          <h2 className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold mb-4">
            KeenKeeper
          </h2>
          <p className="text-white/80 mb-6">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>

        <div className="">
          <h3 className="text-xl font-medium mb-4">Social Links</h3>
          <div className="flex items-center justify-center gap-3">
            <div className="bg-white text-black p-2.5 rounded-full">
              <AiFillInstagram className="text-xl " />
            </div>
            <div className="bg-white text-black p-2.5 rounded-full">
              <FaFacebookSquare className="text-xl" />
            </div>
            <div className="bg-white text-black p-2.5 rounded-full">
              <IoLogoTwitter className="text-xl" />
            </div>
          </div>
        </div>
        <div className="lg:flex items-center justify-between mt-10 border-t py-7.5 border-white/5">
          <p className="text-gray-400">
            © 2026 KeenKeeper. All rights reserved.
          </p>
          <ul className="flex items-center justify-center gap-4 text-gray-400">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookies</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
