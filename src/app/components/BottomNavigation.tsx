import React from "react";

const BottomNavigation: React.FC = () => {
  return (
    <div className=" w-[100%] flex justify-around bg-white pt-4 pb-8 shadow-lg">
      <button className="text-gray-500">
        🏠
        <p>მთავარი</p>
      </button>
      <button className="text-gray-500">
        🔄
        <p>აქტივობები</p>
      </button>
      <button className="text-gray-500">
        👤
        <p>პროფილი</p>
      </button>
    </div>
  );
};

export default BottomNavigation;
