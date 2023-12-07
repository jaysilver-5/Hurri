import { IoCall } from "react-icons/io5";
import { BsChatTextFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import React from 'react';
import './globals.css';

const Support = () => {
  
  const handleCallButtonClick = () => {
    // Use the window.location.href to trigger a phone call
    window.location.href = 'tel:+2349013625228';
  };

  const handleChatButtonClick = () => {
    // Use the window.open to open a WhatsApp chat
    window.open('https://api.whatsapp.com/send?phone=+2349013625228', '_blank');
  };

  const handleMailButtonClick = () => {
    // Use the window.open to open the default email client
    window.open('mailto:Support@hurri.ng');
  };

  return (
    <div className='w-full px-16 flex flex-col h-screen justify-center xl:gap-y-16 lg:gap-y-12 md:gap-y-8 gap-y-4 items-center bg-primary'>

      <h1 className='font-primary font-bold text-[32px] text-[#fff]'>Support</h1>  
      <div className='flex flex-col xl:flex-row gap-y-4 lg:flex-row md:flex-row justify-between items-center w-full gap-x-4'>
        <div className='font-primary bg-secondary p-4 rounded-lg w-full flex items-center justify-center flex-1 h-44' onClick={handleCallButtonClick}>
            <div className="flex flex-col items-center justify-center">
                <IoCall className="text-[#fff] font-semibold text-[32px]" />
                <h1 className="text-[#fff] font-bold mt-2 text-[24px]">Call Us</h1>
                <p className="text-[#fff]">9am-5pm, M-F</p>
            </div>
        </div>
        <div className='font-primary bg-secondary p-4 rounded-lg w-full flex items-center justify-center flex-1 h-44' onClick={handleChatButtonClick}>
            <div className="flex flex-col items-center justify-center">
                <BsChatTextFill className="text-[#fff] font-semibold text-[32px]" />
                <h1 className="text-[#fff] font-bold mt-2 text-[24px]">Chat</h1>
                <p className="text-[#fff]">9am-5pm, M-F</p>
            </div>
        </div>
        <div className='font-primary bg-secondary p-4 rounded-lg w-full flex items-center justify-center flex-1 h-44' onClick={handleMailButtonClick}>
            <div className="flex flex-col items-center justify-center">
                <MdMail className="text-[#fff] font-semibold text-[32px]" />
                <h1 className="text-[#fff] font-bold mt-2 text-[24px]">Mail Us</h1>
                <p className="text-[#fff]">Always available</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
