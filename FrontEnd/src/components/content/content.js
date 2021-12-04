import React from "react";
import styled from "styled-components";
import CardsContainer from "../card-container/cards-container";
const Container = styled.div`
  height: 100%;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  background: url(http://majorspoilers.com/wp-content/uploads/2020/05/1024px-Marvel_Comics_1990_logo.svg_.png)
    no-repeat fixed center;
  background-size: 54%;
  opacity: 0.75;
`;

const Content = () => {
  return (
    <>
      <Container>
        <CardsContainer></CardsContainer>
        <CardsContainer></CardsContainer>
        <CardsContainer></CardsContainer>
      </Container>
    </>
  );
};

export default Content;
