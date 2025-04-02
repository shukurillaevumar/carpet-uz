import { useState } from "react";
import beforeImg from "../images/before.jpg";
import afterImg from "../images/after.jpg";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
export default function Compare() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const { t } = useTranslation();
  return (
    <div>
      <motion.p
        className="text-3xl mt-10 text-[#E76421] font-semibold text-center max-sm:text-2xl"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        {t("achievedRes")}
      </motion.p>
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
