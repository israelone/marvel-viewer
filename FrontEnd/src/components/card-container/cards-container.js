import ActionAreaCard from "./card/card";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
height: fit-content;
background-color: rgba(255,93,0,0.85);
width: fit-content;
display: flex;
flex-direction: column;
align-items: center;
}
`;

const CardsContainer = (props) => {
   //Temp fix maybe?
  if (!Object.keys(props)[0]) return null;

  return (
    <Container>{Object.values(props)[0].map((item)=>{
      return(<ActionAreaCard item={item} ></ActionAreaCard>)
    })}
    </Container>
  );
};

export default CardsContainer;
