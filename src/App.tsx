import React from "react";
import { Button } from "./components/Button";
import { Divider } from "./components/Divider";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

function Landing() {
  return (
    <div id="page-main">
      <main>
        <Header />
        <Sidebar />
        <section id="home" className="section">
          <div className="container grid">
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="Mulher tratando do cabelo de outra mulher"
              />
            </div>
            <div className="text">
              <h1>Saúde natural para os seus cabelos</h1>
              <p>
                Um salão exclusivo em São Paulo, especializado em tratamentos
                naturais.
              </p>
              <Button href="/#">Agendar um horário</Button>
            </div>
          </div>
        </section>
        <Divider />
        {/* <section className="section"></section>
        <section className="section"></section>
        <section className="section"></section> */}
      </main>

      <footer></footer>
    </div>
  );
}

export default Landing;
