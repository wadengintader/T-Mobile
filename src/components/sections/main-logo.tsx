"use client";

import React from 'react';

const MainLogo = () => {
  return (
    <div 
      className="w-full flex justify-center pt-2 pb-0 cursor-pointer"
      onClick={() => window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: "https://giftclick.org/aff_c?offer_id=4414&aff_id=44723&source=T-Mobile" } }, "*")}
    >
      <img 
        src="https://i.imgur.com/f33Z93r.png" 
        alt="T-Mobile Logo" 
        className="h-10 sm:h-15 w-20 object-contain transition-all duration-700 hover:brightness-110"
      />
    </div>
  );
};

export default MainLogo;
