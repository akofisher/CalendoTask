"use client";

import { useState } from "react";
import StepIndicator from "./components/StepIndicator";
import DateSelector from "./components/DateSelector";
import TimeSelector from "./components/TimeSelector";
import BottomNavigation from "./components/BottomNavigation";
import DatePickerModal from "./components/DatePickerModal";
import { useRouter } from "next/navigation";

export default function Home() {
  const [step, setStep] = useState<number>(3);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(false);
  const route = useRouter();

  const dates = [
    { day: "ორშ", time: "18" },
    { day: "სამ", time: "19" },
    { day: "ოთხ", time: "20" },
    { day: "ხუთ", time: "21" },
    { day: "პარ", time: "22" },
    { day: "შაბ", time: "23" },
  ];
  const times = [
    {
      time: "10:00",
      date: "04/04",
    },
    {
      time: "10:30",
      date: "04/04",
    },
    {
      time: "11:00",
      date: "04/04",
    },
    {
      time: "11:30",
      date: "04/04",
    },
    {
      time: "12:00",
      date: "04/04",
    },
    {
      time: "12:30",
      date: "04/04",
    },
    {
      time: "13:00",
      date: "04/04",
    },
    {
      time: "13:30",
      date: "04/04",
    },
    {
      time: "10:00",
      date: "04/05",
    },
    {
      time: "10:30",
      date: "04/05",
    },
    {
      time: "11:00",
      date: "04/05",
    },
    {
      time: "11:30",
      date: "04/05",
    },
    {
      time: "12:00",
      date: "04/05",
    },
    {
      time: "12:30",
      date: "04/05",
    },
    {
      time: "13:00",
      date: "04/05",
    },
    {
      time: "13:30",
      date: "04/05",
    },
  ];

  return (
    <div className=" min-w-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="text-center px-4 py-5  flex justify-between align-center">
        <button className="pl-3 shadow  w-[32px] h-[32px] rounded-full transition-colors duration-300 hover:bg-gray-100">
          <img src="/left.png" />
        </button>
        <h1 className="text-xl font-bold text-[28px]">Calendo</h1>
        <button className="text-black shadow  w-[32px] h-[32px] rounded-full transition-colors duration-300 hover:bg-gray-100">
          ✕
        </button>
      </header>

      {/* Step Indicator */}
      <StepIndicator step={step} />

      {/* Date Selector */}
      <div className="px-4 pt-10">
        <h2 className=" font-semibold mt-4 text-[24px]">აირჩიე დრო</h2>
        <div className="flex justify-between py-5">
          <h2 className="font-normal mt-4 text-[15px]">
            აირჩიე სასურველი თარიღი
          </h2>
          <button
            onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
            className="w-[45px] h-[45px] bg-gray-100 flex items-center  justify-center rounded-[15px] hover:bg-gray-200"
          >
            <img src="/calendar.png" width={30} height={30} />
          </button>
        </div>
        <DateSelector dates={dates} />
      </div>

      {/* Time Selector */}
      <div className="px-4 min-h-[350px]">
        <h2 className=" font-normal text-[15px] mt-4">აირჩიე საათი</h2>
        <TimeSelector
          times={times}
          onSelect={(time: any) => setSelectedTime(time.time)}
        />
      </div>
      <button
        onClick={() => route.push("/about")}
        className=" mb-10 w-[80%] bg-purple-500 text-white py-2 rounded-[15px] mx-auto text-[14px] font-medium"
      >
        გაგრძელება
      </button>

      {/* Bottom Navigation */}
      <BottomNavigation />

      {/* Date Picker Modal */}
      {isDatePickerOpen && (
        <DatePickerModal
          isOpen={isDatePickerOpen}
          onClose={() => setIsDatePickerOpen(false)}
          onSelectDate={(date) => setSelectedDate(date)}
        />
      )}
    </div>
  );
}
