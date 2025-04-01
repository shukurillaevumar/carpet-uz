import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
const initialVideos = [
  "/videos/video-1 (1).mp4",
  "/videos/video-1 (2).mp4",
  "/videos/video-1 (3).mp4",
  "/videos/video-1 (4).mp4",
];

export default function VideoSlider() {
  const { t } = useTranslation();
  const [videos, setVideos] = useState(initialVideos);
  const [translateX, setTranslateX] = useState(0);
  const startX = useRef(0);
  const isDragging = useRef(false);
  const videoCounter = useRef(initialVideos.length + 1); // Чтобы генерировать новые видео

  const generateNewVideo = () => {
    const newVideo = `/videos/video${videoCounter.current}.mp4`;
    videoCounter.current += 1;
    return newVideo;
  };

  const handleStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const handleMove = (e) => {
    if (!isDragging.current) return;
    const currentX = e.touches ? e.touches[0].clientX : e.clientX;
    setTranslateX(currentX - startX.current);
  };

  const handleEnd = () => {
    isDragging.current = false;

    if (translateX < -50) {
      // Свайп влево (добавить видео справа)
      const newVideo = generateNewVideo();
      setVideos((prev) => [...prev.slice(1), newVideo]);
    } else if (translateX > 50) {
      // Свайп вправо (добавить видео слева)
      const newVideo = generateNewVideo();
      setVideos((prev) => [newVideo, ...prev.slice(0, -1)]);
    }

    // Сбрасываем положение
    setTranslateX(0);
  };

  return (
    <div>
      <motion.p
        className="text-3xl mt-10 text-[#4C5269] font-semibold text-center"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        {t("workPlaceTitle")}
      </motion.p>
      <div
        className="relative w-full max-w-4xl mx-auto select-none overflow-hidden mt-10"
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
      >
        <div
          className="flex gap-4 transition-transform duration-300 ease-out"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {videos.map((video, index) => (
            <video
              key={index}
              src={video}
              controls
              className="w-1/4 h-[500px] object-cover rounded-lg shadow-lg max-sm:w-full"
            >
              Ваш браузер не поддерживает тег video.
            </video>
          ))}
        </div>
      </div>
    </div>
  );
}
