import React from "react";
import { Cosmetic, Trim, WomanHair } from "./assets/_index";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Divider } from "./components/Divider";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { TestimonalCard } from "./components/TestimonialCard";

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
        <section className="section" id="about">
          <div className="container grid">
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1559599101-f09722fb4948?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="Três mulheres sorrindo"
              />
            </div>
            <div className="text">
              <h2 className="title">Sobre nós</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, fugiat nihil corrupti nobis atque blanditiis, id
                libero commodi sequi inventore eius quia consequatur provident
                rerum omnis aut ipsa perspiciatis consectetur.
              </p>
              <br />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perspiciatis laborum deserunt maxime! Velit dignissimos maiores
                cupiditate maxime, veniam quisquam minus aperiam a nam et
                reiciendis libero, aliquam iure voluptas fuga.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A sed
                voluptatem, placeat rerum dolorum commodi odio laboriosam quos,
                alias nulla assumenda iusto in velit excepturi, nemo quasi
                quibusdam consectetur quo.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Divider isReverted />
      <section className="section" id="services">
        <div className="container grid">
          <header>
            <h2 className="title">Serviços</h2>
          </header>
          <div className="cards grid">
            <Card
              title="Terapia capilar"
              icon={{ source: WomanHair, alt: "Mulher de cabelos presos" }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum, velit maxime? Accusantium praesentium ullam culpa
              autem nemo delectus, reprehenderit est corrupti, voluptates
              tempore facilis blanditiis. Unde iste sed nemo enim.
            </Card>
            <Card
              title="Cortes"
              icon={{ source: Trim, alt: "Mulher de cabelos presos" }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum, velit maxime? Accusantium praesentium ullam culpa
              autem nemo delectus, reprehenderit est corrupti, voluptates
              tempore facilis blanditiis. Unde iste sed nemo enim.
            </Card>
            <Card
              title="Tratamentos"
              icon={{ source: Cosmetic, alt: "Mulher de cabelos presos" }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum, velit maxime? Accusantium praesentium ullam culpa
              autem nemo delectus, reprehenderit est corrupti, voluptates
              tempore facilis blanditiis. Unde iste sed nemo enim.
            </Card>
          </div>
        </div>
      </section>
      <Divider />
      <section className="section" id="testimonials">
        <div className="container grid">
          <header>
            <h2 className='title'>Depoimentos de <br /> quem já passou <br /> por aqui</h2>
          </header>
        </div>
        <div className="testimonials-wrapper">
          <TestimonalCard name='Wanessa Souza' avatar='https://randomuser.me/api/portraits/women/3.jpg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quidem magni tenetur! Eum incidunt nostrum, veritatis eveniet in inventore, sequi nihil ipsum optio maiores, sapiente earum laborum aliquid repudiandae atque?
          </TestimonalCard>
          <TestimonalCard name='Wanessa Souza' avatar='https://randomuser.me/api/portraits/women/3.jpg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quidem magni tenetur! Eum incidunt nostrum, veritatis eveniet in inventore, sequi nihil ipsum optio maiores, sapiente earum laborum aliquid repudiandae atque?
          </TestimonalCard>
          <TestimonalCard name='Wanessa Souza' avatar='https://randomuser.me/api/portraits/women/3.jpg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quidem magni tenetur! Eum incidunt nostrum, veritatis eveniet in inventore, sequi nihil ipsum optio maiores, sapiente earum laborum aliquid repudiandae atque?
          </TestimonalCard>
          <TestimonalCard name='Wanessa Souza' avatar='https://randomuser.me/api/portraits/women/3.jpg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quidem magni tenetur! Eum incidunt nostrum, veritatis eveniet in inventore, sequi nihil ipsum optio maiores, sapiente earum laborum aliquid repudiandae atque?
          </TestimonalCard>
          
        </div>
      </section>
      <footer></footer>
    </div>
  );
}

export default Landing;
