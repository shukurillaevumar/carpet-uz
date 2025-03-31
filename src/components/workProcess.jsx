import Img1 from "../images/work process images/damas.jpg";
import Img2 from "../images/work process images/toza.png";
import Img3 from "../images/work process images/temir.png";
import Img4 from "../images/work process images/tozalovchi.png";
import Img5 from "../images/work process images/tozaman.png";
import ContactUs from "./contactUs";

export default function WorkProcess() {
  const imgInfo = [
    { imgSrc: Img1 },
    { imgSrc: Img2 },
    { imgSrc: Img3 },
    { imgSrc: Img4 },
    { imgSrc: Img5 },
  ];

  return (
    <div>
      <p className="text-3xl mt-10 text-[#4C5269] font-semibold">
        Work Process
      </p>
      <div className="grid grid-cols-3 gap-4 mt-10">
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
              className="w-full h-full object-cover rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-110"
            />

            {/* Кнопка появляется по центру при наведении */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <ContactUs />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
