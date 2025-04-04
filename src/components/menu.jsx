import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Иконки бургер-меню

import Logo from "../images/logo.png";
import ContactUs from "./contactUs";
import LanguageChanger from "./languageChanger";

import { useTranslation } from "react-i18next";

import { Link } from "react-scroll";

export default function Menu1() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };
  return (
    <nav className="bg-white shadow-md sticky top-0 z-2">
      <div className="flex justify-center gap-10 items-center max-sm:gap-4">
        <Link to="main" smooth={true} duration={500}>
          <img
            src={Logo}
            width={180}
            className="max-sm:w-[150px] cursor-pointer"
            alt="Logo"
          />
        </Link>
        {/* Навигация для больших экранов */}
        <ul className="hidden md:flex space-x-6 text-lg font-semibold">
          <Link to="main" smooth={true} duration={500}>
            <li className="cursor-pointer border-2 border-white hover:border-b-[#E76421] hover:text-[#E76421]">
              {t("home")}
            </li>
          </Link>
          <Link to="whyWe" smooth={true} duration={500}>
            <li className="cursor-pointer border-2 border-white hover:border-b-[#E76421] hover:text-[#E76421]">
              {t("whyUs")}
            </li>
          </Link>
          <Link to="service" smooth={true} duration={500}>
            <li className="cursor-pointer border-2 border-white hover:border-b-[#E76421] hover:text-[#E76421]">
              {t("services")}
            </li>
          </Link>
          <Link to="comments" smooth={true} duration={500}>
            <li className="cursor-pointer border-2 border-white hover:border-b-[#E76421] hover:text-[#E76421]">
              {t("comments")}
            </li>
          </Link>
          <Link to="faq" smooth={true} duration={500}>
            <li className="cursor-pointer border-2 border-white hover:border-b-[#E76421] hover:text-[#E76421]">
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
        <div
          ref={menuRef}
          className={`md:hidden flex flex-col items-center space-y-4 mt-4 transition-all duration-300 ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <Link
            to="main"
            smooth={true}
            duration={500}
            onClick={handleLinkClick}
          >
            <p className="cursor-pointer border-2 border-white hover:border-b-[#E76421] hover:text-[#E76421]">
              {t("home")}
            </p>
          </Link>
          <Link
            to="whyWe"
            smooth={true}
            duration={500}
            onClick={handleLinkClick}
          >
            <p className="cursor-pointer border-2 border-white hover:border-b-[#E76421] hover:text-[#E76421]">
              {t("whyUs")}
            </p>
          </Link>
          <Link
            to="service"
            smooth={true}
            duration={500}
            onClick={handleLinkClick}
          >
            <p className="cursor-pointer border-2 border-white hover:border-b-[#E76421] hover:text-[#E76421]">
              {t("services")}
            </p>
          </Link>
          <Link
            to="comments"
            smooth={true}
            duration={500}
            onClick={handleLinkClick}
          >
            <p className="cursor-pointer border-2 border-white hover:border-b-[#E76421] hover:text-[#E76421]">
              {t("comments")}
            </p>
          </Link>
          <Link to="faq" smooth={true} duration={500} onClick={handleLinkClick}>
            <p className="cursor-pointer border-2 border-white hover:border-b-[#E76421] hover:text-[#E76421]">
              {t("faq")}
            </p>
          </Link>
        </div>
      )}
    </nav>
  );
}
