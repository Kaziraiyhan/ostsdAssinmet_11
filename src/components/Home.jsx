import Footer from "./Footer";
import Header from "./Header";
import LoggedIn from "./LoggedIn";
import Loops from "./Loops";
import WeatherInfo from "./WeatherInfo";

const Home = () => {
  return (
    <div>
      <Header />
      <LoggedIn />
      <Loops />
      <WeatherInfo isSunny={true} />
      <Footer />
    </div>
  );
};

export default Home;
