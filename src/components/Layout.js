import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";

export default function layout({ children }) {
  return (
    <>
      <div className="site-intro">
        <header className="header">
          <Header />
        </header>
        <div className="hero">
          <Hero />
        </div>
      </div>
      <main className="main">{children}</main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}