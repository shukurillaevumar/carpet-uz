import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";
export default function Faq() {
  const { t } = useTranslation();

  const dropdowns = [
    {
      title: t("faqTitle1"),
      content: t("faqDesc1"),
    },
    {
      title: t("faqTitle2"),
      content: t("faqDesc2"),
    },
    {
      title: t("faqTitle3"),
      content: t("faqDesc3"),
    },
    {
      title: t("faqTitle4"),
      content: t("faqDesc4"),
    },
    {
      title: t("faqTitle5"),
      content: t("faqDesc5"),
    },
    {
      title: t("faqTitle6"),
      content: t("faqDesc6"),
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="border-t-2 mt-4 pt-4 flex justify-between max-xl:flex-col max-xl:items-center"
      id="faq"
    >
      <p className="text-3xl text-[#E76421] font-semibold">{t("faq")}</p>
      <div className="flex flex-col gap-4 w-2/3 max-xl:w-full">
        {dropdowns.map((dropdown, index) => (
          <div key={index} className="rounded-lg shadow-md bg-white">
            <button
              className="flex justify-between items-center w-full px-4 py-3 text-lg font-medium bg-[#E76421] rounded-lg cursor-pointer"
              onClick={() => toggleDropdown(index)}
            >
              <span className="text-white">{dropdown.title}</span>
              <ChevronDownIcon
                className={`w-6 h-6 shrink-0 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="px-4 py-2 text-gray-700"
              >
                {dropdown.content}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
