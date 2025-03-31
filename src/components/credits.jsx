import logo from "../images/logo.png";

export default function Credits() {
  return (
    <div className="flex items-center gap-10 mt-10">
      <img src={logo} alt="logo" width={200} />
      <div className="flex flex-col gap-2">
        <p>Uzbekistan, Tashkent City</p>
        <p>+998950003080</p>
        <p>+998990603080</p>
      </div>
    </div>
  );
}
