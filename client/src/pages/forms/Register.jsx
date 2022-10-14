import React from "react";
import "./forms.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Sing from "../../components/forms/Sing";

const Register = () => {
  return (
    <div className="wrapper">
      <header className="header-container">
        <Header />
      </header>

      <main>
        <Sing />
      </main>

      <footer className="footer-container">
        <Footer />
      </footer>
    </div>
  );
};

export default Register;
