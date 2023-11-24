import HomePage from "./HomePage";
import ContactUsPage from "./ContactUsPage";
import MenuPage from "./MenuPage";

import DisclaimerPage from "./DisclaimerPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CateringServicePage from "./CateringServicePage";
import FindStoresPage from "./FindStoresPage";
import ProductCardPage from "./ProductCardPage";
import NutritionPage from "./NutritionPage";
import BirthdayPartyPage from "./BirthdayPartyPage";
import AboutUsPage from "./AboutUsPage";
import FaqPage from "./FaqPage";
import PrivacyPolicyPage from "./PrivacyPolicyPage";
import TermsAndConditionsPage from "./Terms&ConditionsPage";
import SignUp from "./SignUp";
import Nav from "./Nav";
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
        <Route exact path="/disclaimer" element={<DisclaimerPage />} />
        <Route exact path="/nutritional-info" element={<NutritionPage />} />
        <Route
          exact
          path="/catering-service"
          element={<CateringServicePage />}
        />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/about-us" element={<AboutUsPage />} />
        <Route exact path="/faq" element={<FaqPage />} />
        <Route exact path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route
          exact
          path="/terms-and-conditions"
          element={<TermsAndConditionsPage />}
        />
        <Route exact path="/navbar" element={<Nav />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
