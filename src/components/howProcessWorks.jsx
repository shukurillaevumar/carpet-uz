export default function HowProcessWorks() {
  const cardsInfo = [
    {
      icon: "fi fi-rr-phone-call",
      title: "Call Us",
      description:
        "Call or leave a request on the website (we'll clarify the details and provide the price).",
    },
    {
      icon: "fi fi-rr-shipping-fast",
      title: "Place an Order",
      description: "Order carpet cleaning at home or in the factory.",
    },
    {
      icon: "fi fi-rr-document-signed",
      title: "Contract",
      description: "We will sign a formal contract and start the work.",
    },
    {
      icon: "fi fi-rr-tire-rugged",
      title: "Carpet Pickup",
      description: "We will pick up your carpets for free.",
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
        <button className="text-lg text-white bg-[#FEB640] p-4 rounded-xl text-center">
          Order Now
        </button>
      ),
      description:
        "The best guarantee is our reputation, which we value! Trust us!",
    },
  ];
  return (
    <div>
      <p className="text-3xl mt-10 text-[#4C5269] font-semibold text-center">
        How the Process Works
      </p>
      <div className="grid grid-cols-4 gap-5 mt-10">
        {cardsInfo.map(({ icon, title, description, button }, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-start gap-2 bg-[#F9F9F9] p-4 rounded-xl shadow-lg"
          >
            <div className="flex gap-4 items-center">
              <i className={`${icon} text-4xl text-[#04A2BA]`} />
              {button}
              <p>{title}</p>
            </div>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
