import { useState, useEffect } from "react";
import Quotes from "./components/Quotes";
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
  blue,
  green,
  brown,
  pink,
} from "./components/styles/Theme.styled";

function App() {
  // theme state
  const [selectedTheme, setSelectedTheme] = useState(brown);

  // react hook to get the theme selected by the user that is saved in local storage
  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem("theme"));
    if (currentTheme) {
      setSelectedTheme(currentTheme);
    }
  }, []);

  // function to handle user theme selection on click and save it to local storage
  const HandleThemeChange = (theme) => {
    setSelectedTheme(theme);
    localStorage.setItem("theme", JSON.stringify(theme));
  };

  return (
    <ThemeProvider theme={selectedTheme}>
      <>
        <GlobalStyles />
        <Header>Game of Thrones Quotes</Header>

        <ThemeContainer>
          <span>Themes: </span>
          <ThemeButton
            className={`light ${selectedTheme === light ? "active" : ""}`}
            onClick={() => HandleThemeChange(light)}></ThemeButton>
          <ThemeButton
            className={`dark ${selectedTheme === dark ? "active" : ""}`}
            onClick={() => HandleThemeChange(dark)}></ThemeButton>
          <ThemeButton
            className={`blue ${selectedTheme === blue ? "active" : ""}`}
            onClick={() => HandleThemeChange(blue)}></ThemeButton>
          <ThemeButton
            className={`green ${selectedTheme === green ? "active" : ""}`}
            onClick={() => HandleThemeChange(green)}></ThemeButton>
          <ThemeButton
            className={`brown ${selectedTheme === brown ? "active" : ""}`}
            onClick={() => HandleThemeChange(brown)}></ThemeButton>
          <ThemeButton
            className={`pink ${selectedTheme === pink ? "active" : ""}`}
            onClick={() => HandleThemeChange(pink)}></ThemeButton>
        </ThemeContainer>

        <Quotes />

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
