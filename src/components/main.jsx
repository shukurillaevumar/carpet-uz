import RounedPhoto from "../images/rounded-photo-main.png";
import LeftPhoto from "../images/main-left-photo.png";
import ContactUs from "./contactUs";

export default function Main() {
  return (
    <div className="flex mt-10 justify-between">
      <div className="flex flex-col items-start gap-10">
        <p className="text-7xl font-semibold text-[#FEB640]">
          Gilam yuvish xizmati
        </p>
        <p className="text-lg">
          Biz Toshkentda 10 yildan beri <br /> professional gilam yuvish
          ishlarini olib <br /> boramiz, shuning uchun gilamlarni <br /> qanday
          toza va sifatli yuvishni bilamiz.
        </p>
        <img src={RounedPhoto} alt="img" width={250} />
        <ContactUs />
      </div>

      <img src={LeftPhoto} alt="img" width={500} className="rounded-xl" />
    </div>
  );
}
