"use client";

import React, { useState } from "react";

const TimeSelector: React.FC<{
  times: { time: string; date: string }[];
  onSelect: (time: string, date: string) => void;
}> = ({ times, onSelect }) => {
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");

  const handleSelect = (time: string, date: string) => {
    setSelectedTime(time);
    setSelectedDate(date);
    onSelect(time, date);
  };

  return (
    <div className="grid grid-cols-5 gap-2 mt-4 h-40">
      {times.map((time: { time: string; date: string }, i) => (
        <button
          key={i}
          onClick={() => handleSelect(time.time, time.date)}
          className={`px-4 py-2 border border-gray-300 rounded-[15px] flex flex-col items-center ${
            selectedTime === time.time && selectedDate === time.date
              ? "bg-black text-white"
              : "bg-white transition-colors duration-300 hover:bg-gray-200"
          }`}
        >
          <p className="font-semibold text-[12px]">{time.time}</p>
          <p className="text-[14px] text-gray-500 text-[10px]">{time.date}</p>
        </button>
      ))}
    </div>
  );
};

export default TimeSelector;
