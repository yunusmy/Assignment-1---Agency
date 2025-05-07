import React from "react";

import CompaniesLogo from "../components/companiesLogo/CompaniesLogo";
import Faq from "../components/faq/Faq";
import Footer from "../components/Footer";
import Navigation from "../components/header/Navigation";
import HeroSection from "../components/heroSection/HeroSection";
import Pricing from "../components/pricing/Pricing";
import Service from "../components/service/Service";
import Testimonial from "../components/testimonial/Testimonial";
import Trial from "../components/trial/Trial";

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navigation />
      <HeroSection />
      <CompaniesLogo />
      <Service />
      <Testimonial />
      <Pricing />
      <Faq />
      <Trial />
      <Footer />
    </div>
  );
};

export default HomePage;
