import Headers from "./Components/Headers";
import Section from "./Components/Section";
import React from "react";
import CompaniesSlider from "./Components/CompaniesSlider";
import VideoSlider from "./Components/VideoSlider";
import MidSection from "./Components/MidSection";
import ColumnText from "./Components/ColumnText";
import CaseStudies from "./Components/CaseStudies";
import  TeamSection  from "./Components/TeamSection";

function App() {
  return (
    <div className="App">
      <div className="flex-wrap">
        <header>
          <Headers />
        </header>
        <section>
          <Section />
          <CompaniesSlider />
          <MidSection />
          <ColumnText />
          <VideoSlider />
          <CaseStudies />
          <TeamSection />
        </section>
      </div>
    </div>
  );
}

export default App;
