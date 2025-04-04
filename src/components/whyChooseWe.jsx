import { useTranslation } from "react-i18next";

export default function WhyChooseWe() {
  const { t } = useTranslation();
  const CardsInfo = [
    {
      icon: "fi fi-rr-bolt",
      title: t("whyChooseUsCard1"),
      description: t("whyChooseUsCard1Description"),
    },
    {
      icon: "fi fi-rr-badget-check-alt",
      title: t("whyChooseUsCard2"),
      description: t("whyChooseUsCard2Description"),
    },
    {
      icon: "fi fi-rr-handshake",
      title: t("whyChooseUsCard3"),
      description: t("whyChooseUsCard3Description"),
    },
  ];
  return (
    <div id="whyWe">
      <div className="border-b-2 border-b-[#4C5269]">
        <p className="text-3xl mt-10 text-[#E76421] font-semibold">
          {t("whyChooseUs")}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 max-xl:grid-cols-1 max-xl:mt-10">
        {CardsInfo.map(({ icon, title, description }, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 mt-10 max-xl:border max-xl:rounded-xl max-xl:p-2 max-xl:border-[#E76421] max-xl:mt-0"
          >
            <i className={`${icon} text-4xl text-[#E76421]`}></i>
            <p className="text-xl font-semibold max-xl:text-2xl">{title}</p>
            <p className="text-lg font-semibold text-[#676D83] max-xl:text-sm">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
