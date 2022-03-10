import ActionAreaCard from "./card/card";
import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";

const CardsContainer = (props) => {
  //Temp fix maybe?
  if (!Object.keys(props)[0]) return null;

  return (
    <ScrollContainer id={"scroll"} horizontal={false}>
      {Object.values(props)[0].map((item) => {
        return <ActionAreaCard item={item}></ActionAreaCard>;
      })}
    </ScrollContainer>
  );
};

export default CardsContainer;
