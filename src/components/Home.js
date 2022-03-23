import React from "react";
import Quotes from "./Quotes";
import { Container } from "./styles/Container.styled";
import { Footer } from "./styles/Footer.styled";
import { Header } from "./styles/Header.styled";
import { ThemeContainer, ThemeButton } from "./styles/ThemeSwitching.styled";

const Home = () => {
  return (
    <>
      <Header>Game of Thrones Quotes</Header>

      <ThemeContainer>
        <ThemeButton className="Dark">D</ThemeButton>
        <ThemeButton className="Light">L</ThemeButton>
        <ThemeButton className="Oceanwave">O</ThemeButton>
        <ThemeButton className="Camouflage">C</ThemeButton>
        <ThemeButton className="Sunshine">S</ThemeButton>
        <ThemeButton className="Barbie">B</ThemeButton>
      </ThemeContainer>

      <Container>
        <Quotes />
      </Container>

      <Footer>
        <p>
          Made with love by <a href="http://bio.link/timonwa">Timonwa</a>
        </p>
      </Footer>
    </>
  );
};

export default Home;
