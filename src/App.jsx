import HomePage from "./HomePage";
import ContactUsPage from "./ContactUsPage";
import MenuPage from "./MenuPage";

import Disclaimer from "./Disclaimer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CateringServicePage from "./CateringServicePage";
import FindStoresPage from "./FindStoresPage";
import ProductCardPage from "./ProductCardPage";
import NutritionPage from "./NutritionPage";
import BirthdayPartyPage from "./BirthdayPartyPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/menu" element={<MenuPage />} />
        <Route exact path="/find-stores" element={<FindStoresPage />} />
        <Route exact path="/birthday-party" element={<BirthdayPartyPage />} />
        <Route exact path="/contact-us" element={<ContactUsPage />} />
        <Route exact path="/menu/veg-pizzas" element={<ProductCardPage />} />
        <Route exact path="/disclaimer" element={<Disclaimer />} />
        <Route exact path="/nutritional-info" element={<NutritionPage />} />
        <Route
          exact
          path="/catering-service"
          element={<CateringServicePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
