import { useState, useEffect } from "react";
import Quotes from "./components/Quotes";
import { Container } from "./components/styles/Container.styled";
import { Footer } from "./components/styles/Footer.styled";
import { Header } from "./components/styles/Header.styled";
import {
  ThemeContainer,
  ThemeButton,
} from "./components/styles/ThemeSwitching.styled";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global";
import {
  light,
  dark,
  oceanwave,
  camouflage,
  sunshine,
  barbie,
} from "./components/styles/Theme.styled";

function App() {
  const [selectedTheme, setSelectedTheme] = useState(light);

  return (
    <ThemeProvider theme={selectedTheme}>
      <>
        <GlobalStyles />
        <Header>Game of Thrones Quotes</Header>

        <ThemeContainer>
          <span>Themes: </span>
          <ThemeButton
            className={`light ${selectedTheme === light ? "active" : ""}`}
            onClick={() => {
              setSelectedTheme(light);
            }}></ThemeButton>
          <ThemeButton
            className={`dark ${selectedTheme === dark ? "active" : ""}`}
            onClick={() => {
              setSelectedTheme(dark);
            }}></ThemeButton>
          <ThemeButton
            className={`oceanwave ${
              selectedTheme === oceanwave ? "active" : ""
            }`}
            onClick={() => {
              setSelectedTheme(oceanwave);
            }}></ThemeButton>
          <ThemeButton
            className={`camouflage ${
              selectedTheme === camouflage ? "active" : ""
            }`}
            onClick={() => {
              setSelectedTheme(camouflage);
            }}></ThemeButton>
          <ThemeButton
            className={`sunshine ${selectedTheme === sunshine ? "active" : ""}`}
            onClick={() => {
              setSelectedTheme(sunshine);
            }}></ThemeButton>
          <ThemeButton
            className={`barbie ${selectedTheme === barbie ? "active" : ""}`}
            onClick={() => {
              setSelectedTheme(barbie);
            }}></ThemeButton>
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
    </ThemeProvider>
  );
}

export default App;
