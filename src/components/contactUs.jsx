import { useTranslation } from "react-i18next";

export default function ContactUs() {
  const { t } = useTranslation();
  return (
    <div>
      <button className="bg-[#FEB640] text-white font-semibold px-10 py-2 rounded-full cursor-pointer text-xl">
        {t("contactUs")}
      </button>
    </div>
  );
}
