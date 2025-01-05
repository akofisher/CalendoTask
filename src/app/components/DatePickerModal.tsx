"use client";

import React, { useState } from "react";

interface DatePickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDate: (date: string) => void;
}

const DatePickerModal: React.FC<DatePickerModalProps> = ({
  isOpen,
  onClose,
  onSelectDate,
}) => {
  const [selectedDate, setSelectedDate] = useState<string>("");

  const dates = [
    { date: "2024-10-11", num: "1,610" },
    { date: "2024-10-14", num: "1,141" },
    { date: "2024-10-16", num: "1,141" },
    { date: "2024-10-17", num: "1,610" },
    { date: "2024-10-18", num: "1,141" },
    { date: "2024-10-19", num: "1,141" },
    { date: "2024-10-20", num: "1,610" },
    { date: "2024-10-21", num: "1,141" },
    { date: "2024-10-22", num: "1,141" },
    { date: "2024-10-23", num: "1,610" },
    { date: "2024-10-24", num: "1,141" },
    { date: "2024-10-26", num: "1,141" },
    { date: "2024-10-27", num: "1,610" },
    { date: "2024-10-28", num: "1,141" },
    { date: "2024-10-29", num: "1,141" },
  ];

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed w-[100%] inset-0 bg-black bg-opacity-50 flex  justify-center items-center z-50"
    >
      <div className="bg-white rounded-[20px] w-[85%] max-w-md  mx-auto pb-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 border-b  border-gray p-4">
          <h2 className="text-lg font-bold">აირჩიე თარიღი</h2>
          <button
            onClick={onClose}
            className="text-black shadow w-[32px] h-[32px] rounded-full transition-colors duration-300 hover:bg-gray-100"
          >
            ✕
          </button>
        </div>
        <div className="flex justify-between w-[100%] items-center p-4">
          <button className="mr-[15px] ml-[15px] ">
            <img src="/left.png" />
          </button>
          <p>ოქტომბერი</p>
          <button className="mr-[15px] ml-[15px]">
            <img src="/right.png" />
          </button>
        </div>

        {/* Calendar */}
        <div className="grid grid-cols-7 gap-2 text-center text-sm p-4">
          {["ორშ", "სამ", "ოთხ", "ხუთ", "პარ", "შაბ", "კვ"].map((day) => (
            <span key={day} className="font-bold text-gray-500">
              {day}
            </span>
          ))}

          {dates.map(({ date, num }) => (
            <button
              key={date}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedDate(date);
                onSelectDate(date);
              }}
              className={`p-2 rounded-lg  flex flex-col items-center ${
                selectedDate === date
                  ? "bg-black text-white"
                  : "bg-white transition-colors duration-300 hover:bg-gray-200"
              }`}
            >
              <div>{new Date(date).getDate()}</div>
              <div className="text-xs text-gray-500 ">{num}</div>
            </button>
          ))}
        </div>

        {/* Confirm Button */}
        <button
          onClick={onClose}
          className="mt-4 w-[80%] bg-purple-500 text-white py-2 rounded-[15px] mx-10 "
        >
          დამახსოვრება
        </button>
      </div>
    </div>
  );
};

export default DatePickerModal;
