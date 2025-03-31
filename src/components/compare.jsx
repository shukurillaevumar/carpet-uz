import { useState } from "react";
import beforeImg from "../images/before.jpg";
import afterImg from "../images/after.jpg";
export default function Compare() {
  const [sliderPosition, setSliderPosition] = useState(50);
  return (
    <div>
      <p className="text-3xl mt-10 text-[#4C5269] font-semibold text-center max-sm:text-2xl">
        Qanday natijaga erishayotganimizni ko`ring
      </p>
      <div className="relative w-[800px] h-[500px] mx-auto overflow-hidden rounded-lg shadow-lg mt-10 max-sm:w-auto max-sm:h-[300px]">
        {/* Левая (до) */}
        <div className="absolute inset-0">
          <img
            src={afterImg}
            alt="Before"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Правая (после), обрезается по ползунку */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImg}
            alt="After"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Полоса-разделитель */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-md"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        ></div>

        {/* Ползунок */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(e.target.value)}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );
}
