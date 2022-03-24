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
  font-family: ${({ theme }) => theme.fonts.family};
  font-size: ${({ theme }) => theme.fonts.size};
  overflow-x: hidden;
}

// theme buttons color
.light {
  background-color: ${theme.light.colors.primary};
}
.dark {
  background-color: ${theme.dark.colors.primary};
}
.oceanwave {
  background-color: ${theme.oceanwave.colors.primary};
}
.camouflage {
  background-color: ${theme.camouflage.colors.primary};
}
.sunshine {
  background-color: ${theme.sunshine.colors.primary};
}
.barbie {
  background-color: ${theme.barbie.colors.primary};
}

// active theme
.active{
    border: 3px solid ${({ theme }) => theme.colors.border};
    opacity: 1;
}
`;
