import Home from "./Home";
import ContactUs from "./ContactUs";
import Menu from "./Menu";
import Enquiry from "./Enquiry";
import GiftCard from "./GiftCard";
import Stores from "./Stores";
import VegPizzas from "./VegPizzas";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/stores" element={<Stores />} />
        <Route exact path="/gift-card" element={<GiftCard />} />
        <Route exact path="/enquiry" element={<Enquiry />} />
        <Route exact path="/contact-us" element={<ContactUs />} />
        <Route exact path="/menu/veg-pizzas" element={<VegPizzas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
