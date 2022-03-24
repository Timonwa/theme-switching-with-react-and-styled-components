import styled from "styled-components";

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.quoteBgc};
  border: 1px solid ${({ theme }) => theme.colors.quoteBorder};
  margin-bottom: 20px;
  border-radius: 3px;
`;

export const CardTitle = styled.div`
  color: ${({ theme }) => theme.colors.quoteTitle};
  border-bottom: 1px solid ${({ theme }) => theme.colors.quoteBorder};
  text-align: center;
  padding: 10px;
  font-weight: bold;
`;

export const CardQuote = styled.div`
  color: ${({ theme }) => theme.colors.quoteBody};
  padding: 10px;
`;
