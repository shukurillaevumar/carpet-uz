import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
const initialVideos = [
  "/videos/video-1 (1).mp4",
  "/videos/video-1 (2).mp4",
  "/videos/video-1 (3).mp4",
  "/videos/video-1 (4).mp4",
];

export default function VideoSlider() {
  const { t } = useTranslation();

  return (
    <div>
      <motion.p
        className="text-3xl mt-10 text-[#E76421] font-semibold text-center"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        {t("workPlaceTitle")}
      </motion.p>
      <div className="w-full max-w-screen-lg mx-auto max-xl:w-1/2">
        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
          loop={true}
          touchRatio={2}
          modules={[Pagination]}
          className="mySwiper mt-10"
          breakpoints={{
            0: { slidesPerView: 1 }, // Любой экран до 640px - 1 слайд
            640: { slidesPerView: 2 }, // От 640px - 2 слайда
            1024: { slidesPerView: 3 }, // От 1024px - 3 слайда
          }}
        >
          {initialVideos.map((video, index) => (
            <SwiperSlide key={index} className="rounded-xl shadow-lg">
              <video src={video} controls autoPlay muted />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
