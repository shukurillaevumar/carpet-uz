import RounedPhoto from "../images/rounded-photo-main.png";
import LeftPhoto from "../images/main-left-photo.png";
import ContactUs from "./contactUs";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

export default function Main() {
  const { t } = useTranslation();
  return (
    <div
      className="flex mt-10 justify-between relative max-xl:h-[420px]"
      id="main"
    >
      <div className="flex flex-col items-start gap-10 max-xl:absolute max-xl:p-4 max-xl:gap-4">
        <p className="text-7xl font-semibold text-[#E76421] max-xl:text-3xl max-xl:text-white max-xl:bg-[#E76421] max-xl:rounded-xl max-xl:p-2">
          {t("cleaningService")}
        </p>
        <p className="text-lg max-xl:text-white max-xl:bg-[#E76421] max-xl:rounded-xl max-xl:p-2">
          {t("mainDescription")}
        </p>
        <img
          src={RounedPhoto}
          alt="img"
          width={250}
          className="max-xl:hidden"
        />
        <Link to="faq" smooth={true} duration={500} className="max-sm:hidden">
          <ContactUs />
        </Link>
      </div>

      <img
        src={LeftPhoto}
        alt="img"
        className="rounded-xl max-xl:w-full object-cover"
      />
    </div>
  );
}
