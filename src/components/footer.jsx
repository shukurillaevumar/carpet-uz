import img from "../images/footer/Image.png";

export default function Footer() {
  return (
    <div
      className="p-4 mt-10 rounded-xl flex justify-around items-center"
      style={{
        background:
          "radial-gradient(circle, rgba(4,162,186,1) 0%, rgba(2,227,214,1) 100%)",
      }}
    >
      <div className="bg-white p-4 rounded-xl w-1/2 flex flex-col gap-5">
        <p className="text-4xl font-semibold">
          Leave your <br /> information
        </p>
        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Name"
            className="p-4 outline-0 bg-[#E5E5E5] rounded-xl"
          />
          <input
            type="number"
            placeholder="+998 97 123 12 12"
            className="p-4 outline-0 bg-[#E5E5E5] rounded-xl appearance-none"
          />
          <button className="bg-black text-white p-4 rounded-lg cursor-pointer">
            Submit
          </button>
        </form>
      </div>
      <img src={img} alt="img" />
    </div>
  );
}
