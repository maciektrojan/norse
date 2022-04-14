import React from "react";
import { Wrapper } from "./components/Wrapper";
import { AboutSection } from "./sections/AboutSection";
import { ServicesSection } from "./sections/ServicesSection";
import { StartSection } from "./sections/StartSection";

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