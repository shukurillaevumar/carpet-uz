import Logo from "../images/logo.png";
import ContactUs from "./contactUs";
import LanguageChanger from "./languageChanger";

export default function Menu() {
  return (
    <div className="flex justify-center items-center w-full shadow-xl gap-10">
      <img src={Logo} width={200} height={200} />
      <div className="flex gap-5 justify-center items-center font-semibold text-lg">
        <p>Asosiy</p>
        <p>Nega Biz</p>
        <p>Xizmatlar</p>
        <p>Fikrlar</p>
        <p>Savollar</p>
      </div>
      <div className="flex justify-between items-center gap-10">
        <LanguageChanger />
        <ContactUs />
      </div>
    </div>
  );
}
