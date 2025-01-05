"use client";

import React, { useState } from "react";

const DateSelector: React.FC<{
  dates: { day: string; time: string }[];
}> = ({ dates }) => {
  const [selectedDate, setSelectedDate] = useState<string>(dates[0].time);

  const handleSelect = (date: string) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex space-x-2 overflow-x-auto py-4">
      {dates.map((date, i) => (
        <button
          key={i}
          onClick={() => handleSelect(date.time)}
          className={`p-2 rounded-[15px] w-[15%]  ${
            selectedDate === date.time
              ? "bg-purple-500 text-white transition-colors duration-300 hover:bg-purple-300"
              : "bg-gray-100 transition-colors duration-300 hover:bg-gray-200"
          }`}
        >
          <p>{date.day}</p>
          <p>{date.time}</p>
        </button>
      ))}
    </div>
  );
};

export default DateSelector;
