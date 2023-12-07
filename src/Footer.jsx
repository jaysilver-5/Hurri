import React from 'react';
import { BiLogoFacebook } from 'react-icons/bi';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { FaLinkedinIn } from 'react-icons/fa';
import Logo from './public/logo.png';
const Footer = () => {
  return (
    <div className="px-6 md:px-8 lg:px-12 xl:px-16 bg-[#17181A] min-h-40 pt-8 md:pt-0 lg:pt-0 xl:pt-0 flex items-center w-full">
      <div className="w-full">
        <div className="flex xl:gap-y-0 lg:gap-y-0 md:gap-y-0 gap-y-4  border-b pb-6 pt-6 xl:flex-row lg:flex-row md:flex-row flex-col border-lightgray justify-between">
          <img src={Logo} alt="logo" width={100} height={180} />
          <div className="flex gap-x-2">
            <a href="https://www.linkedin.com/in/hurri-logistics-590437293/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center text-white rounded-full bg-[#323438]"><FaLinkedinIn /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center text-white rounded-full bg-[#323438]"><BiLogoFacebook /></a>
            <a href="https://www.instagram.com/hurri.ng/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center text-white rounded-full bg-[#323438]"><BsInstagram /></a>
          </div>
        </div>
        <div className="flex xl:flex-row gap-y-4 lg:flex-row flex-col md:flex pt-6 pb-6 justify-between w-full">
          <div className="flex gap-y-4 xl:flex-row lg:flex-row md:flex-row flex-col gap-x-4">
            <Link to="/" className="text-lightgray text-[12px]">Home</Link>
            <Link to="/faq" className="text-lightgray text-[12px]">FAQ</Link>
            <Link to="/privacy" className="text-lightgray text-[12px]">Privacy Policy</Link>
            <Link to="/support" className="text-lightgray text-[12px]">Support</Link>
          </div>
          <p className="text-lightgray py-4 border-t md:border-t lg:border-t-0 xl:border-t-0 border-lightgray  md:py-4 lg:py-0 xl:py-0 border-t-1 text-[12px]">
            Copyright © 2023 Hurri. All rights reserved <a className='text[#1DA1F2]' style={{color: '#1DA1F2'}} href='http://schlitterslimited.com'>Schlitters Limited</a>.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;