import img from "../images/footer/Image.png";
import { useTranslation } from "react-i18next";
import axios from "axios";

export default function Footer() {
  const { t } = useTranslation();

  const SendMessage = async (event) => {
    event.preventDefault();

    const token = "7575586675:AAGe-jkvgQN4gCi_1pP8d4teZjyWENYVGYc"; // Храним в .env
    const chatId = 7297266784; // Проверь, правильный ли ID
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const name = document.getElementById("name").value.trim();
    const number = document.getElementById("number").value.trim();

    if (!name || !number) {
      alert("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }

    try {
      await axios.post(url, {
        chat_id: chatId, // Исправленный ключ
        text: `Ism: ${name}\nTelefon: ${number}`, // Отправляем всё вместе
      });

      alert("Muvaffaqiyatli yuborildi!");
      document.getElementById("myForm").reset(); // Очищаем форму после отправки
    } catch (error) {
      console.error("Yuborishda xatolik:", error);
      alert("Xatolik yuz berdi, qayta urinib ko'ring!");
    }
  };

  return (
    <div
      className="p-4 mt-10 rounded-xl flex justify-around items-center"
      style={{
        background:
          "radial-gradient(circle, rgba(231,100,33,1) 23%, rgba(227,183,2,1) 100%)",
      }}
    >
      <div className="bg-white p-4 rounded-xl w-1/2 flex flex-col gap-5 max-sm:w-full">
        <p className="text-4xl font-semibold max-sm:text-2xl text-[#E76421]">
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
            type="text"
            placeholder="+998 97 123 12 12"
            className="p-4 outline-0 bg-[#E5E5E5] rounded-xl"
            id="number"
          />
          <button
            type="submit"
            className="bg-[#E76421] text-white p-4 rounded-lg cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
      <img src={img} alt="img" className="max-sm:hidden" />
    </div>
  );
}
