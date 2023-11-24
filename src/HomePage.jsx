/* eslint-disable react/prop-types */
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "./Navbar";
import Nav from "./Nav";
import HomeHeader from "./HomeHeader";
import OffersCarousel from "./OffersCarousel";
import ExploreOptions from "./ExploreOptions";
import Footer from "./Footer";
export default function HomePage() {
  return (
    <div>
      <Nav />
      <HomeHeader />
      <OffersCarousel />
      <ExploreOptions />
      <Footer />
    </div>
  );
}
