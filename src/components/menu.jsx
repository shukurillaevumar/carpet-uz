import { useState } from "react";
import { Menu, X } from "lucide-react"; // Иконки бургер-меню

import Logo from "../images/logo.png";
import ContactUs from "./contactUs";
import LanguageChanger from "./languageChanger";

import { useTranslation } from "react-i18next";

import { Link } from "react-scroll";

export default function Menu1() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md sticky top-0 z-2">
      <div className="flex justify-center gap-10 items-center max-sm:gap-4">
        <img src={Logo} width={180} className="max-sm:w-[150px]" alt="Logo" />
        {/* Навигация для больших экранов */}
        <ul className="hidden md:flex space-x-6 text-lg font-semibold">
          <Link to="main" smooth={true} duration={500}>
            <li className="cursor-pointer border-2 border-white hover:border-b-amber-300 hover:text-amber-300">
              {t("home")}
            </li>
          </Link>
          <Link to="whyWe" smooth={true} duration={500}>
            <li className="cursor-pointer border-2 border-white hover:border-b-amber-300 hover:text-amber-300">
              {t("whyUs")}
            </li>
          </Link>
          <Link to="service" smooth={true} duration={500}>
            <li className="cursor-pointer border-2 border-white hover:border-b-amber-300 hover:text-amber-300">
              {t("services")}
            </li>
          </Link>
          <Link to="comments" smooth={true} duration={500}>
            <li className="cursor-pointer border-2 border-white hover:border-b-amber-300 hover:text-amber-300">
              {t("comments")}
            </li>
          </Link>
          <Link to="faq" smooth={true} duration={500}>
            <li className="cursor-pointer border-2 border-white hover:border-b-amber-300 hover:text-amber-300">
              {t("faq")}
            </li>
          </Link>
        </ul>
        <LanguageChanger />
        <div className="max-sm:hidden">
          <Link to="faq" smooth={true} duration={500}>
            <ContactUs />
          </Link>
        </div>

        {/* Бургер-кнопка */}
        <button
          className="md:hidden p-2 rounded focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Мобильное меню */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <Link to="main" smooth={true} duration={500}>
            <p className="cursor-pointer border-2 border-white hover:border-b-amber-300 hover:text-amber-300">
              {t("home")}
            </p>
          </Link>
          <Link to="whyWe" smooth={true} duration={500}>
            <p className="cursor-pointer border-2 border-white hover:border-b-amber-300 hover:text-amber-300">
              {t("whyUs")}
            </p>
          </Link>
          <Link to="service" smooth={true} duration={500}>
            <p className="cursor-pointer border-2 border-white hover:border-b-amber-300 hover:text-amber-300">
              {t("services")}
            </p>
          </Link>
          <Link to="comments" smooth={true} duration={500}>
            <p className="cursor-pointer border-2 border-white hover:border-b-amber-300 hover:text-amber-300">
              {t("comments")}
            </p>
          </Link>
          <Link to="faq" smooth={true} duration={500}>
            <p className="cursor-pointer border-2 border-white hover:border-b-amber-300 hover:text-amber-300">
              {t("faq")}
            </p>
          </Link>
        </div>
      )}
    </nav>
  );
}
