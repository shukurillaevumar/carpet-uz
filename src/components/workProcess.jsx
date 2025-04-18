import Img1 from "../images/work process images/damas.jpg";
import Img2 from "../images/work process images/toza.png";
import Img3 from "../images/work process images/temir.png";
import Img4 from "../images/work process images/tozalovchi.png";
import Img5 from "../images/work process images/tozaman.png";
import ContactUs from "./contactUs";
import { useTranslation } from "react-i18next";

import { Link } from "react-scroll";

export default function WorkProcess() {
  const { t } = useTranslation();
  const imgInfo = [
    { imgSrc: Img1 },
    { imgSrc: Img2 },
    { imgSrc: Img3 },
    { imgSrc: Img4 },
    { imgSrc: Img5 },
  ];

  return (
    <div>
      <p className="text-3xl mt-10 text-[#E76421] font-semibold">
        {t("workProcess")}
      </p>
      <div className="grid grid-cols-3 gap-4 mt-10 max-sm:grid-cols-1">
        {imgInfo.map(({ imgSrc }, index) => (
          <div
            key={index}
            className={`${
              index === 0 ? "row-span-2" : ""
            } relative overflow-hidden group`}
          >
            {/* Изображение с эффектом увеличения */}
            <img
              src={imgSrc}
              alt="img"
              className="w-full h-full object-cover rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-110 max-xl:w-1/2 max-xl:mx-auto"
            />

            {/* Кнопка появляется по центру при наведении */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Link to="faq" smooth={true} duration={500}>
                <ContactUs />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
