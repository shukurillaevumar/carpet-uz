import { useTranslation } from "react-i18next";

export default function LanguageChanger() {
  const { t, i18n } = useTranslation();
  const handleChange = (event) => {
    console.log(event);
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div>
      <select
        name="lng"
        id="lng"
        className="border w-25 rounded-lg p-1 border-gray-300"
        onChange={handleChange}
        value={i18n.language}
      >
        <option value="uz">Uz</option>
        <option value="ru">Ru</option>
        <option value="en">En</option>
      </select>
    </div>
  );
}
