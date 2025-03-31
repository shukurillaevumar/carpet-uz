import "./App.css";
import InfImage from "./components/infImage";
import Main from "./components/main";
import Menu from "./components/menu";
import WhyChooseWe from "./components/whyChooseWe";
import ServiceTypes from "./components/serviceTypes";
import Compare from "./components/compare";
import VideoSlider from "./components/videoSlider";
import HowProcessWorks from "./components/howProcessWorks";
import WorkProcess from "./components/workProcess";
import Comments from "./components/comments";
import Faq from "./components/faq";
import Footer from "./components/footer";
import Credits from "./components/credits";

function App() {
  return (
    <div className="w-full">
      <Menu />
      <div className="w-2/3 mx-auto">
        <Main />
        <WhyChooseWe />
        <InfImage />
        <ServiceTypes />
        <Compare />
        <VideoSlider />
        <HowProcessWorks />
        <WorkProcess />
        <Comments />
        <Faq />
        <Footer />
        <Credits />
      </div>
    </div>
  );
}

export default App;
