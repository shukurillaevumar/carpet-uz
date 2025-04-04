import { useState, useRef, useEffect } from "react";
import img from "../images/footer/Image.png";
import { useTranslation } from "react-i18next";
import axios from "axios";

export default function Footer() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState("");
  const modalRef = useRef(null);

  const SendMessage = async (event) => {
    event.preventDefault();

    const token = "7575586675:AAGe-jkvgQN4gCi_1pP8d4teZjyWENYVGYc";
    const chatId = 7297266784;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const name = document.getElementById("name").value.trim();
    const number = document.getElementById("number").value.trim();

    if (!name || !number) {
      setModalText(`${t("fillField")}`);
      setIsModalOpen(true);
      return;
    }

    try {
      await axios.post(url, {
        chat_id: chatId,
        text: `Ism: ${name}\nTelefon: ${number}`,
      });

      setModalText(`${t("successfullySubmitted")}`);
      setIsModalOpen(true);
      document.getElementById("myForm").reset();
    } catch (error) {
      console.error("Yuborishda xatolik:", error);
      setModalText(`${t("failedSubmit")}`);
      setIsModalOpen(true);
    }
  };

  // Закрытие по клику вне модалки
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <>
      {/* Модалка */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-opacity-40 flex items-center justify-center z-50">
          <div
            ref={modalRef}
            className="bg-white p-10 rounded-xl shadow-xl w-1/3 relative max-xl:w-1/2 max-xl:p-8"
          >
            <button
              className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-black"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
            <p className="text-center text-lg max-xl:text-sm">{modalText}</p>
          </div>
        </div>
      )}

      {/* Футер */}
      <div
        className="p-4 mt-10 rounded-xl flex justify-around items-center"
        style={{
          background:
            "radial-gradient(circle, rgba(231,100,33,1) 23%, rgba(227,183,2,1) 100%)",
        }}
      >
        <div className="bg-white p-4 rounded-xl w-1/2 flex flex-col gap-5 max-xl:w-full">
          <p className="text-4xl font-semibold max-xl:text-2xl text-[#E76421]">
            {t("leaveInf")}
          </p>
          <form
            id="myForm"
            className="flex flex-col gap-5"
            onSubmit={SendMessage}
          >
            <input
              type="text"
              placeholder="Name"
              className="p-4 outline-0 bg-[#E5E5E5] rounded-xl"
              id="name"
            />
            <input
              type="number"
              placeholder="+998 97 123 12 12"
              className="p-4 outline-0 bg-[#E5E5E5] rounded-xl"
              id="number"
            />
            <button
              type="submit"
              className="bg-[#E76421] text-white p-4 rounded-lg cursor-pointer"
            >
              {t("submitBtn")}
            </button>
          </form>
        </div>
        <img src={img} alt="img" className="max-xl:hidden" />
      </div>
    </>
  );
}
