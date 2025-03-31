import Image from "../images/Image.png";
import ContactUs from "./contactUs";

export default function InfImage() {
  return (
    <div className="flex justify-center items-center mt-10 relative">
      <img src={Image} alt="img" />
      <div className="flex flex-col text-white absolute gap-5 left-20">
        <p className="text-5xl font-semibold">
          30 m² va undan katta <br /> maydonlar uchun <br /> 10% chegirma!
        </p>
        <p className="text-xl">
          Bizning xizmatimizdan foydalanib, 30 m² <br /> va undan katta
          maydonlar uchun 10% che- <br />
          girma oling! Bugun yuvdirish jarayonini os- <br />
          onlashtiring va toza muhitda hayotingizni <br /> yanada qulayroq
          qiling.
        </p>
        <p className="text-4xl font-semibold">998-95-000-30-80</p>
        <p className="text-4xl font-semibold">998-95-060-30-80</p>
        <ContactUs />
      </div>
    </div>
  );
}
