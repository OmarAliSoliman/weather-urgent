import React from "react";
import '../sass/style.scss';

function Loaderpage() {
  return (
    <div className="loader-page">
      <div className="spinner-loading">
        <div className="spinner-grow text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-secondary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default Loaderpage;
