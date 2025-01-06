import React from "react";

const BottomNavigation: React.FC = () => {
  return (
    <div className=" w-[100%] flex justify-around bg-white pt-4 pb-8 shadow-lg">
      <button className="flex flex-col items-center">
        <img src="/home.png" />
        <p className="font-semibold text-[11px] text-[#64748B]">მთავარი</p>
      </button>
      <button className="flex flex-col items-center">
        <img src="/timer.png" />
        <p className="font-semibold text-[11px] text-[#000000]">აქტივობები</p>
      </button>
      <button className="flex flex-col items-center">
        <img src="/placeholder.png" />
        <p className="font-semibold text-[11px] text-[#64748B]">პროფილი</p>
      </button>
    </div>
  );
};

export default BottomNavigation;
