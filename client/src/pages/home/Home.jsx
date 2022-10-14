import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Slider from "../../components/slider/Slider";
import "./home.css";

const home = () => {
  return (
    <div className="wrapper">
      <header className="header-container">
        <Header />
      </header>

      <main className="main-container">
        <Slider />
      </main>

      <footer className="footer-container">
        <Footer />
      </footer>
    </div>
  );
};

export default home;
