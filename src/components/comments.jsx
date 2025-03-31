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

export default function Comments() {
  const comments = [
    {
      name: "Lobar",
      telegram: "@hyot",
      text: "There were stains on the carpets, and I thought nothing could remove them. But this service amazed me – the stains completely disappeared! Highly recommend.",
      imgSrc: Img1,
    },
    {
      name: "Barno",
      telegram: "@barno",
      text: "I gave my carpets for cleaning and am very satisfied with the result. The carpets came back perfectly clean! Fast and quality service. Thank you!",
      imgSrc: Img2,
    },
    {
      name: "Bonu",
      telegram: "@bonu_hamidova",
      text: "My carpets were dusty and had an odor. I can't believe they look like new after this cleaning! Excellent service and great customer care.",
      imgSrc: Img3,
    },
    {
      name: "Shahlo",
      telegram: "@shahlo",
      text: "Amazing work! My carpets look brand new again. Super fast service and very friendly staff.",
      imgSrc: Img4,
    },
    {
      name: "Dilnoza",
      telegram: "@dilnoza",
      text: "Very professional cleaning! They removed even the toughest stains. Definitely recommend to everyone!",
      imgSrc: Img5,
    },
    {
      name: "Zarina",
      telegram: "@zarina",
      text: "The best carpet cleaning service I’ve ever used! They care about every detail. Will use again for sure!",
      imgSrc: Img6,
    },
  ];
  return (
    <div>
      <p className="text-3xl mt-10 text-[#4C5269] font-semibold text-center">
        Comments
      </p>
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        grabCursor={true}
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
            className="p-4 border rounded-xl shadow-lg min-h-52"
          >
            <div className="min-h-60">
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
