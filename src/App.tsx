import React from "react";

function Landing() {
  return (
    <div id="page-main">
      <header>
        <nav className="container">
          <a className="logo" href="/#">
            beauty<span>salon</span>.
          </a>
          <div className="menu">...</div>
        </nav>
      </header>

      <main>
        <section>
          <div className="container">
            <img
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="Mulher tratando do cabelo de outra mulher"
            />
            <h1>Saúde natural para os seus cabelos</h1>
            <p>
              Um salão exclusivo em São Paulo, especializado em tratamentos
              naturais.
            </p>
            <a className="button" href="/#">
              Agendar um horário
            </a>
          </div>
        </section>
        <section></section>
        <section></section>
        <section></section>
      </main>

      <footer></footer>
    </div>
  );
}

export default Landing;
