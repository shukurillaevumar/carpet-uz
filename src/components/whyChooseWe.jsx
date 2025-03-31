export default function WhyChooseWe() {
  const CardsInfo = [
    {
      icon: "fi fi-rr-bolt",
      title: "Tezkor Gilam Yuvish Xizmati",
      description:
        "Arizalar kuniga 24 soat qabul qilinadi. Agar shoshilinch gilam yuvish kerak bo'lsa, biz darhol yetib borishimiz mumkin. Shungaqaramay, sifat mukammal bo'lib qoladi.",
    },
    {
      icon: "fi fi-rr-badget-check-alt",
      title: "Yetuk Mutaxassislarimiz",
      description:
        "Bizning xodimlarimiz har bir jarayonni puxta amalga oshiradi: gilamlarni qabul qilish, yuvishga tayyorlash, to'liq tozalash, quritish va yakuniy nazorat.",
    },
    {
      icon: "fi fi-rr-handshake",
      title: "Sizga Maqul Va Qulay Vaqtda",
      description:
        "Siz o'zingiz uchun maqul va qulay vaqtni tanlang va gilamlaringizni yuvish uchun bizga murojaat qiling. Sizga kafolatlangan va samarali natijani ta’minlaymiz.",
    },
  ];
  return (
    <div>
      <div className="border-b-2 border-b-[#4C5269]">
        <p className="text-3xl mt-10 text-[#4C5269] font-semibold">
          Nima uchun bizni tanlashadi?
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {CardsInfo.map(({ icon, title, description }, index) => (
          <div key={index} className="flex flex-col gap-3 mt-10">
            <i className={`${icon} text-4xl text-[#04A2BA]`}></i>
            <p className="text-xl font-semibold">{title}</p>
            <p className="text-lg font-semibold text-[#676D83]">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
