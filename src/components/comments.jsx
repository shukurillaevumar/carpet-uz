import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import Img1 from "../images/user images/barno.jpg";
import Img2 from "../images/user images/bonu.jpg";
import Img3 from "../images/user images/lobar.jpg";
import Img4 from "../images/user images/samiya.jpg";
import Img5 from "../images/user images/nigora.jpg";
import Img6 from "../images/user images/barno.jpg";

import { useTranslation } from "react-i18next";

export default function Comments() {
  const { t } = useTranslation();
  const comments = [
    {
      name: "Lobar",
      telegram: "@hyot",
      text: t("comment1"),
      imgSrc: Img1,
    },
    {
      name: "Barno",
      telegram: "@barno",
      text: t("comment2"),
      imgSrc: Img2,
    },
    {
      name: "Bonu",
      telegram: "@bonu_",
      text: t("comment3"),
      imgSrc: Img3,
    },
    {
      name: "Shahlo",
      telegram: "@shahlo",
      text: t("comment4"),
      imgSrc: Img4,
    },
    {
      name: "Dilnoza",
      telegram: "@dilnoza",
      text: t("comment5"),
      imgSrc: Img5,
    },
    {
      name: "Zarina",
      telegram: "@zarina",
      text: t("comment6"),
      imgSrc: Img6,
    },
  ];
  return (
    <div id="comments">
      <p className="text-3xl mt-10 text-[#E76421] font-semibold text-center">
        {t("comments")}
      </p>
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        grabCursor={true}
        loop={true}
        modules={[Pagination]}
        className="mySwiper mt-10"
        breakpoints={{
          0: { slidesPerView: 1 }, // Любой экран до 640px - 1 слайд
          640: { slidesPerView: 2 }, // От 640px - 2 слайда
          1024: { slidesPerView: 3 }, // От 1024px - 3 слайда
        }}
      >
        {comments.map((comment, index) => (
          <SwiperSlide
            key={index}
            className="p-4 border rounded-xl shadow-lg h-52"
          >
            <div className="h-70">
              <div className="flex items-center gap-2">
                <img
                  src={comment.imgSrc}
                  alt="img"
                  className="w-25 h-25 rounded-full"
                />
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold">{comment.name}</h3>
                  <p className="text-sm text-gray-500">{comment.telegram}</p>
                </div>
              </div>
              <p className="mt-2 text-gray-700">{comment.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
