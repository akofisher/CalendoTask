import React from "react";

const StepIndicator: React.FC<{ step: number }> = ({ step }) => {
  return (
    <div className="flex items-center justify-center w-[100%] mt-4 ">
      {[1, 2, 3, 4].map((num, index) => (
        <div
          key={num}
          className={`flex items-center ${num == 4 ? 0 : "w-1/4"}`}
        >
          {/* Step Ball */}
          <div
            className={`flex items-center justify-center ${
              step === num
                ? "w-6 h-6 border-2 border-[#7C1FD1] rounded-full"
                : "w-5 h-5"
            } ${step >= num ? "bg-[#7C1FD1]" : "bg-gray-300"} rounded-full`}
          >
            {step === num && (
              <div className="w-5 h-5 bg-[#7C1FD1] rounded-full border-2 border-white"></div>
            )}
          </div>

          {/* Connecting Line */}
          {index < 3 && (
            <div
              className={`h-1 flex-1 mx-1 rounded-[15px] ${
                step > num ? "bg-[#7C1FD1]" : "bg-gray-300"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
