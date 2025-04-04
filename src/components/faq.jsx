import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";
export default function Faq() {
  const { t } = useTranslation();

  const dropdowns = [
    {
      title: "How long does washing carpets take?",
      content:
        "The carpet washing process usually takes 3-5 days. During this time, carpets are deeply cleaned, dried, and prepared for delivery.",
    },
    {
      title: "How is the price of your services determined?",
      content:
        "Prices are determined based on the size, material, and cleaning level of the carpet. We often provide prices based on square meters. For special orders, additional information is required to determine the price.",
    },
    {
      title: "Will my carpets be damaged?",
      content:
        "No, our experienced specialists and modern equipment guarantee that carpets will not be damaged. We apply special cleaning methods suitable for each type of carpet.",
    },
    {
      title: "What cleaning products do you use during the washing process?",
      content:
        "We use environmentally friendly and safe cleaning products for humans and animals. These products deeply clean carpets without causing damage.",
    },
    {
      title: "Is there a carpet pickup and delivery service?",
      content:
        "Yes, we pick up and deliver your carpets for free at a convenient time for you. You only pay for the washing service.",
    },
    {
      title: "Can any carpet be washed?",
      content:
        "We wash many types of carpets, including wool, silk, and synthetic carpets. However, for very delicate or antique carpets, we apply special cleaning methods or recommend alternative cleaning methods.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="border-t-2 mt-4 pt-4 flex justify-between max-sm:flex-col max-sm:items-center"
      id="faq"
    >
      <p className="text-3xl text-[#E76421] font-semibold">{t("faq")}</p>
      <div className="flex flex-col gap-4 w-2/3 max-sm:w-full">
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
