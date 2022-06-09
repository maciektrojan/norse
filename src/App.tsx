import React from "react";
import { Wrapper } from "./components/Wrapper";
import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { PartnersSection } from "./sections/PartnersSection";
import { ReviewsSection } from "./sections/ReviewsSection";
import { ServicesSection } from "./sections/ServicesSection";
import { StartSection } from "./sections/StartSection";

function App(): React.ReactElement {
  return (
    <Wrapper>
      <StartSection />
      <AboutSection />
      <PartnersSection />
      <ServicesSection />
      <ReviewsSection />
      <ContactSection />
    </Wrapper>
  );
}

export default App;
