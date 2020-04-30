import React from "react";

function Home() {
  return (
    <div>
      <div className="home-page">
        <div className="font-awsome">
          <i className="fa fa-bullseye circle" aria-hidden="true"></i>
          <i className="fa fa-bullseye onedrive" aria-hidden="true"></i>
          <i className="fa fa-bullseye circle2" aria-hidden="true"></i>
          <i className="fa fa-bullseye onedrive2" aria-hidden="true"></i>
        </div>
        <p className="header-slag"> <i className="fa fa-globe" aria-hidden="true"></i> hello to our website</p>
        <h5 className="home_page_title">DEC<br/>IGN</h5>
        <p className="home_page-paragraph">hello to our site<br/> we are so glad<br/>we love you</p>
        <h5 className="patrick-title text-capitalize">hello<span className="dot">.</span><br/>iam<br/>patrick</h5>
        <h5 className="text-capitalize signture">omar ali</h5>
        <p className="made-by">urgent solution <i className="fa fa-heart" aria-hidden="true"></i></p>
      </div>
    </div>
  );
}

export default Home;
