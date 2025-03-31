import { useState } from "react";
import { Menu, X } from "lucide-react"; // Иконки бургер-меню

import Logo from "../images/logo.png";
import ContactUs from "./contactUs";
import LanguageChanger from "./languageChanger";

export default function Menu1() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="flex justify-center gap-10 items-center max-sm:gap-4">
        <img src={Logo} width={200} className="max-sm:w-[150px]" alt="Logo" />
        {/* Навигация для больших экранов */}
        <ul className="hidden md:flex space-x-6 text-lg font-semibold">
          <li>Асосий</li>
          <li>Мега Биз</li>
          <li>Хизматлар</li>
          <li>Фикрлар</li>
          <li>Контакт</li>
        </ul>
        <LanguageChanger />
        <div className="max-sm:hidden">
          <ContactUs />
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
          <p>Асосий</p>
          <p>Мега Биз</p>
          <p>Хизматлар</p>
          <p>Фикрлар</p>
        </div>
      )}
    </nav>
  );
}
