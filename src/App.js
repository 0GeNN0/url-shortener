import React from "react";
import Header from "./components/Header";
import IllustrationWorking from "./components/IllustrationWorking";
import AdvancedStatistics from "./components/AdvancedStatistics";
import BoostLinks from "./components/BoostLinks";
import Footer from "./components/Footer";
import './styles/style.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <IllustrationWorking />
      <AdvancedStatistics />
      <BoostLinks />
      <Footer />
    </div>
  );
}

export default App;
