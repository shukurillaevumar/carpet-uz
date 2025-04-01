import Image from "../images/Image.png";
import ContactUs from "./contactUs";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function InfImage() {
  const { t } = useTranslation();
  return (
    <motion.div
      className="flex justify-center items-center mt-10 relative"
      initial={{ opacity: 0, x: -100 }} // Начальное состояние (невидим и слева)
      whileInView={{ opacity: 1, x: 0 }} // При появлении — плавное появление
      transition={{ duration: 0.8, ease: "easeOut" }} // Плавная анимация
      viewport={{ once: true, amount: 0.5 }} // Повторяет анимацию, но не исчезает
    >
      <img
        src={Image}
        alt="img"
        className="max-sm:h-120 object-cover rounded-xl"
      />
      <div className="flex flex-col text-white absolute gap-5 left-20 max-sm:left-2">
        <p className="text-5xl font-semibold max-sm:text-2xl w-140 max-sm:w-auto">
          {t("infImageTitle")}
        </p>
        <p className="text-xl max-sm:text-sm w-140 max-sm:w-auto">
          {t("infImageDescription")}
        </p>
        <p className="text-4xl font-semibold max-sm:text-xl">
          998-95-000-30-80
        </p>
        <p className="text-4xl font-semibold max-sm:text-xl">
          998-95-060-30-80
        </p>
        <Link to="faq" smooth={true} duration={500}>
          <ContactUs />
        </Link>
      </div>
    </motion.div>
  );
}
