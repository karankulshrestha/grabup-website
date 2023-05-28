import Headers from "./Components/Headers";
import Section from "./Components/Section";
import React from 'react';
import CompaniesSlider from "./Components/CompaniesSlider";
import VideoSlider from "./Components/VideoSlider";
import MidSection from "./Components/MidSection";

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
          <VideoSlider />
        </section>
      </div>
    </div>
  );
}

export default App;
