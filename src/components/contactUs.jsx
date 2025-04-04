import { useTranslation } from "react-i18next";

export default function ContactUs() {
  const { t } = useTranslation();
  return (
    <div>
      <button className="bg-[#E76421] text-white font-semibold px-10 py-2 rounded-full cursor-pointer text-xl max-xl:p-5 max-xl:text-lg">
        {t("contactUs")}
      </button>
    </div>
  );
}
