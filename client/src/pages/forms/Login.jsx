import React from "react";
import "./forms.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SingIn from "../../components/forms/SingIn";

const Login = () => {
  return (
    <div className="wrapper">
      <header className="header-container">
        <Header />
      </header>

      <main>
        <SingIn />
      </main>

      <footer className="footer-container">
        <Footer />
      </footer>
    </div>
  );
};

export default Login;
