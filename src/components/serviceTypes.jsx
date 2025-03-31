import cleanPhoto from "../images/clean.png";
import adyolPhoto from "../images/adyol.png";
import dazmolPhoto from "../images/dazmol.png";
import gilamPhoto from "../images/gilam.png";
import pardaPhoto from "../images/parda.png";
import ContactUs from "./contactUs";

export default function serviceTypes() {
  const cardInfo = [
    { imgSrc: cleanPhoto, title: "We Don't Just Clean Carpets" },
    { imgSrc: dazmolPhoto, title: "All Types of Furniture" },
    { imgSrc: pardaPhoto, title: "All Types of Curtains" },
    { imgSrc: gilamPhoto, title: "All Types of Carpets" },
    { imgSrc: adyolPhoto, title: "All Types of Blankets" },
  ];
  return (
    <div cla>
      <p className="text-3xl mt-10 text-[#4C5269] font-semibold">
        Service Types
      </p>
      <div className="grid grid-cols-2 mt-10 gap-15">
        {cardInfo.map(({ imgSrc, title }, index) => (
          <div
            key={index}
            className="flex justify-center items-center flex-col bg-[#F3F6F6] rounded-xl gap-5 pb-6"
          >
            <img src={imgSrc} className="w-full" alt="img" />
            <p className="text-[#2C788D] text-3xl font-semibold">{title}</p>
            <ContactUs />
          </div>
        ))}
      </div>
    </div>
  );
}
