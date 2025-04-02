import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
export default function HowProcessWorks() {
  const { t } = useTranslation();
  const cardsInfo = [
    {
      icon: "fi fi-rr-phone-call",
      title: t("workProcessCard1"),
      description: t("workProcessDesc1"),
    },
    {
      icon: "fi fi-rr-shipping-fast",
      title: t("workProcessCard2"),
      description: t("workProcessDesc2"),
    },
    {
      icon: "fi fi-rr-document-signed",
      title: t("workProcessCard3"),
      description: t("workProcessDesc3"),
    },
    {
      icon: "fi fi-rr-tire-rugged",
      title: t("workProcessCard4"),
      description: t("workProcessDesc4"),
    },
    {
      icon: "fi fi-rr-vacuum",
      title: "Cleaning",
      description: "We clean and wash carpets using German equipment.",
    },
    {
      icon: "fi fi-rr-dryer-alt",
      title: "Drying",
      description: "We dry carpets without deformation or odor.",
    },
    {
      icon: "fi fi-rr-scooter",
      title: "Delivery",
      description: "We will deliver your carpets at a convenient time for you.",
    },
    {
      button: (
        <button className="text-lg text-white bg-[#E76421] p-4 rounded-xl text-center cursor-pointer">
          <Link to="faq" smooth={true} duration={500}>
            Order Now
          </Link>
        </button>
      ),
      description:
        "The best guarantee is our reputation, which we value! Trust us!",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <p className="text-3xl mt-10 text-[#E76421] font-semibold text-center">
        {t("workProcessTitle")}
      </p>
      <div className="grid grid-cols-4 gap-5 mt-10 max-sm:grid-cols-1">
        {cardsInfo.map(({ icon, title, description, button }, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-start gap-2 bg-[#F9F9F9] p-4 rounded-xl shadow-lg"
          >
            <div className="flex gap-4 items-center">
              <i className={`${icon} text-4xl text-[#E76421]`} />
              {button}
              <p>{title}</p>
            </div>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
