import cleanPhoto from "../images/clean.png";
import adyolPhoto from "../images/adyol.png";
import dazmolPhoto from "../images/dazmol.png";
import gilamPhoto from "../images/gilam.png";
import pardaPhoto from "../images/parda.png";
import ContactUs from "./contactUs";

import { useTranslation } from "react-i18next";

export default function serviceTypes() {
  const { t } = useTranslation();
  const cardInfo = [
    { imgSrc: cleanPhoto, title: t("serviceCardTitle1") },
    { imgSrc: dazmolPhoto, title: t("serviceCardTitle2") },
    { imgSrc: pardaPhoto, title: t("serviceCardTitle3") },
    { imgSrc: gilamPhoto, title: t("serviceCardTitle4") },
    { imgSrc: adyolPhoto, title: t("serviceCardTitle5") },
  ];
  return (
    <div id="service">
      <p className="text-3xl mt-10 text-[#4C5269] font-semibold">
        {t("serviceType")}
      </p>
      <div className="grid grid-cols-2 mt-10 gap-15 max-sm:grid-cols-1 max-sm:gap-5">
        {cardInfo.map(({ imgSrc, title }, index) => (
          <div
            key={index}
            className="flex justify-center items-center flex-col bg-[#F3F6F6] rounded-xl gap-5 pb-6"
          >
            <img src={imgSrc} className="w-full" alt="img" />
            <p className="text-[#2C788D] text-3xl font-semibold max-sm:text-center">
              {title}
            </p>
            <ContactUs />
          </div>
        ))}
      </div>
    </div>
  );
}
