import React from "react";
import { Wrapper } from "./components/Wrapper";
import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { OpinionsSection } from "./sections/OpinionsSection";
import { PartnersSection } from "./sections/PartnersSection";
import { ServicesSection } from "./sections/ServicesSection";
import { StartSection } from "./sections/StartSection";

function App(): React.ReactElement {
  return (
    <Wrapper>
      <StartSection />
      <AboutSection />
      <ServicesSection />
      <OpinionsSection />
      <PartnersSection />
      <ContactSection />
    </Wrapper>
  );
}

export default App;
