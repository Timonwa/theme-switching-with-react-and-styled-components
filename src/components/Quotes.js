import React from "react";
import {
  CardsContainer,
  Card,
  CardTitle,
  CardBody,
} from "./styles/Cards.styled";

const Quotes = () => {
  return (
    <CardsContainer>
      <Card>
        <CardTitle>Bran Stark</CardTitle>
        <CardBody>
          <p>
            I was never going to be as good a lady as you. So I had to be
            something else. I never could have survived what you survived.
          </p>
        </CardBody>
      </Card>

      <Card>
        <CardTitle>Tyrion Lannister</CardTitle>
        <CardBody>
          <p>
            It’s not easy being drunk all the time. If it were easy, everyone
            would do it.
          </p>
        </CardBody>
      </Card>

      <Card>
        <CardTitle>Jon Snow</CardTitle>
        <CardBody>
          <p>
            Sometimes there is no happy choice Sam, only one less grievous than
            the others.
          </p>
        </CardBody>
      </Card>
    </CardsContainer>
  );
};

export default Quotes;
