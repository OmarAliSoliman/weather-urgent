import React, {lazy, Suspense} from "react";
import Navbar from './components/Navbar';
import FullPage from './components/Fullpage';
import './sass/style.scss';
import Loader from "./components/Loader";

// const FullPage = lazy(()=> import("./components/Fullpage"));

function App() {
  return (
    <div className="App">
      <Navbar />
      <FullPage />
    </div>
  );
}

export default App;
