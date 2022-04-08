import React from "react";
import { Wrapper } from "./components/Wrapper";
import { StartSection } from "./sections/StartSection";
import { AboutSection } from "./sections/AboutSection";
import { ServicesSection } from "./sections/ServicesSection";

function App(): React.ReactElement {
  return (
    <Wrapper>
      <StartSection />
      <AboutSection />
      <ServicesSection />
    </Wrapper>
  );
}

export default App;
