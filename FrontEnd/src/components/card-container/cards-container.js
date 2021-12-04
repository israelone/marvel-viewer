import ActionAreaCard from "./card/card";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  background-color: rgba(255, 93, 0, 0.85);
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const CardsContainer = () => {
  return (
    <Container>
      <ActionAreaCard></ActionAreaCard>
      <ActionAreaCard></ActionAreaCard>
    </Container>
  );
};

export default CardsContainer;
