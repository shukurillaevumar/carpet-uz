import RounedPhoto from "../images/rounded-photo-main.png";
import LeftPhoto from "../images/main-left-photo.png";
import ContactUs from "./contactUs";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

export default function Main() {
  const { t } = useTranslation();
  return (
    <div
      className="flex mt-10 justify-between relative max-sm:h-[420px]"
      id="main"
    >
      <div className="flex flex-col items-start gap-10 max-sm:absolute max-sm:p-4 max-sm:gap-4">
        <p className="text-7xl font-semibold text-[#E76421] max-sm:text-3xl max-sm:text-white max-sm:bg-[#E76421] max-sm:rounded-xl max-sm:p-2">
          {t("cleaningService")}
        </p>
        <p className="text-lg max-sm:text-white max-sm:bg-[#E76421] max-sm:rounded-xl max-sm:p-2">
          {t("mainDescription")}
        </p>
        <img
          src={RounedPhoto}
          alt="img"
          width={250}
          className="max-sm:hidden"
        />
        <Link to="faq" smooth={true} duration={500}>
          <ContactUs />
        </Link>
      </div>

      <img src={LeftPhoto} alt="img" width={500} className="rounded-xl" />
    </div>
  );
}
