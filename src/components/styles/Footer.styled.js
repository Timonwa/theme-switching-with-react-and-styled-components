import styled from "styled-components";

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  padding: 40px 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.background};
  a {
    color: ${({ theme }) => theme.colors.background};
  }
`;
