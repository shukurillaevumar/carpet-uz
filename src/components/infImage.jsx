import Image from "../images/Image.png";
import ContactUs from "./contactUs";

import { useTranslation } from "react-i18next";

export default function InfImage() {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center items-center mt-10 relative">
      <img
        src={Image}
        alt="img"
        className="max-sm:h-120 object-cover rounded-xl"
      />
      <div className="flex flex-col text-white absolute gap-5 left-20 max-sm:left-2">
        <p className="text-5xl font-semibold max-sm:text-2xl w-140 max-sm:w-auto">
          {t("infImageTitle")}
        </p>
        <p className="text-xl max-sm:text-sm w-140 max-sm:w-auto">
          {t("infImageDescription")}
        </p>
        <p className="text-4xl font-semibold max-sm:text-xl">
          998-95-000-30-80
        </p>
        <p className="text-4xl font-semibold max-sm:text-xl">
          998-95-060-30-80
        </p>
        <ContactUs />
      </div>
    </div>
  );
}
