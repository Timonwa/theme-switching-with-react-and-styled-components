import { createGlobalStyle } from "styled-components";
import * as theme from "./Theme.styled";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: monospace;
  overflow-x: hidden;
}

// theme buttons color
.light {
  background-color: ${theme.light.colors.primary};
}
.dark {
  background-color: ${theme.dark.colors.primary};
}
.blue {
  background-color: ${theme.blue.colors.primary};
}
.green {
  background-color: ${theme.green.colors.primary};
}
.brown {
  background-color: ${theme.brown.colors.primary};
}
.pink {
  background-color: ${theme.pink.colors.primary};
}

// active theme
.active{
    border: 3px solid ${({ theme }) => theme.colors.border};
    opacity: 1;
}
`;
