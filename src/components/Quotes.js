import React from "react";
import { Card, CardTitle, CardQuote } from "./styles/Quote.styled";

const Quotes = () => {
  return (
    <>
      <Card>
        <CardTitle>Bran Stark</CardTitle>
        <CardQuote>
          <p>
            I was never going to be as good a lady as you. So I had to be
            something else. I never could have survived what you survived.
          </p>
        </CardQuote>
      </Card>

      <Card>
        <CardTitle>Tyrion Lannister</CardTitle>
        <CardQuote>
          <p>
            It’s not easy being drunk all the time. If it were easy, everyone
            would do it.
          </p>
        </CardQuote>
      </Card>

      <Card>
        <CardTitle>Jon Snow</CardTitle>
        <CardQuote>
          <p>
            Sometimes there is no happy choice Sam, only one less grievous than
            the others.
          </p>
        </CardQuote>
      </Card>
    </>
  );
};

export default Quotes;
