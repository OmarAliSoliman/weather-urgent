import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

// pages
import Home from './Home';
import Weather from './Weather';

const anchors = ["Home", "Weather"];
function Fullpage() {
  return (
    <div>
      <ReactFullpage
        //fullpage options
        licenseKey={null}
        navigation={true}
        navigationTooltips={anchors}
        showActiveTooltip={true}
        anchors={anchors}
        scrollingSpeed={2000} /* Options here */
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section home-section">
                <Home />
              </div>
              <div className="section weather-page">
                <Weather />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}

export default Fullpage;
