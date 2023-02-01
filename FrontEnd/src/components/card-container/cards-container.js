import SeriesCard from "./card/seriesCard";
import CharactersCard from "./card/charactersCard";
import EventsCard from "./card/eventsCard";
import StoriesCard from "./card/storiesCard";
import ComicsCard from "./card/comicsCard";
import { React, useRef, useEffect } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import ReactDOM from "react-dom";

//TODO Fix wheel scroll for each of the containers

const CardsContainer = (props) => {
  //   let container = React.createRef();
  // useEffect(() => {
  //   ReactDOM.findDOMNode(this.container.current).scrollTo(0, 300);
  // }, []);
  let container = useRef();
  useEffect(() => {
    ReactDOM.findDOMNode(container.current).scrollTo(0, 300);
  }, []);
  //Temp fix maybe?
  if (!Object.keys(props)[0]) return null;

  return (
    <ScrollContainer
      className="container"
      ref={container}
      id={"scroll"}
      style={{ overflowY: "scroll" }}
      horizontal={false}
    >
      {Object.values(props)[0].map((item) => {
        if (item != null) {
          return props.name === "characters" ? (
            <CharactersCard item={item}></CharactersCard>
          ) : props.name === "series" ? (
            <SeriesCard item={item}></SeriesCard>
          ) : props.name === "events" ? (
            <EventsCard item={item}></EventsCard>
          ) : props.name === "comics" ? (
            <ComicsCard item={item}></ComicsCard>
          ) : (
            <StoriesCard item={item}></StoriesCard>
          );
        }
      })}
    </ScrollContainer>
  );
};

export default CardsContainer;
