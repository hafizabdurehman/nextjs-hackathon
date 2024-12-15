import React from "react";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { FaFacebook, FaInstagram, FaSkype, FaPinterest } from "react-icons/fa6";
import { LuTwitter } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="w-full h-full bg-[#2A254B] text-white p-4 sm:p-6 md:p-20 ">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
        {/* Menu Section */}
        <div className="text-sm space-y-4 w-full sm:w-auto">
          <h1 className="text-base font-bold">Menu</h1>
          <ul className="space-y-2">
            <li>New arrivals</li>
            <li>Best sellers</li>
            <li>Recently viewed</li>
            <li>Popular this week</li>
            <li>Gift ideas</li>
          </ul>
        </div>

        {/* Categories Section */}
        <div className="text-sm space-y-4 w-full sm:w-auto">
          <h1 className="text-base font-bold">Categories</h1>
          <ul className="space-y-2">
            <li>Crockery</li>
            <li>Furniture</li>
            <li>Homeware</li>
            <li>Plant pots</li>
            <li>Chairs</li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="text-sm space-y-4 w-full sm:w-auto">
          <h1 className="text-base font-bold">Our company</h1>
          <ul className="space-y-2">
            <li>About us</li>
            <li>Vacancies</li>
            <li>Contact us</li>
            <li>Privacy</li>
            <li>Returns policy</li>
          </ul>
        </div>

        {/* Mailing List */}
        <div className="w-full sm:w-auto space-y-4">
          <h1 className="text-base font-bold">Join our mailing list</h1>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
            <input
              type="text"
              placeholder="your@email.com"
              className="bg-[#FFFFFF26] w-full sm:w-[300px] h-[48px] p-3 rounded-md sm:rounded-r-none"
            />
            <button className="bg-white text-black w-full sm:w-[118px] h-[48px] rounded-md sm:rounded-l-none">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-[#4E4D93] pt-6">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-center sm:text-left">© 2022 Avion LTD</p>
          <div className="flex gap-4 text-lg">
            <RiLinkedinBoxLine />
            <FaFacebook />
            <FaInstagram />
            <FaSkype />
            <LuTwitter />
            <FaPinterest />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
