import React, { useState } from "react";
import styled from "styled-components";
import CardsContainer from "../card-container/cards-container";
import axios from "axios";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  background: url(http://majorspoilers.com/wp-content/uploads/2020/05/1024px-Marvel_Comics_1990_logo.svg_.png)
    no-repeat fixed center;
  background-size: 54%;
  opacity: 0.75;
  justify-content: space-around;
`;

const Content = () => {
  const [comics, setComics] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [events, setEvents] = useState([]);
  const [series, setSeries] = useState([]);
  // const [stories, setStories] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/comics`).then((res) => {
      let response = res.data.data;
      setComics(response);
    });
  }, []);

  // useEffect(() => {
  //   console.log(myData);
  //   setComics([...myData.data]);

  //   // setComics(data.data);
  // }, []);

  useEffect(() => {
    axios.get(`http://localhost:3001/characters`).then((res) => {
      let response = res.data.data;
      setCharacters(response);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3001/events`).then((res) => {
      let response = res.data.data;
      setEvents(response);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3001/series`).then((res) => {
      let response = res.data.data;
      setSeries(response);
    });
  }, []);

  // useEffect(() => {
  //   axios.get(`http://localhost:3001/stories`).then((res) => {
  //     let response = res.data.data;
  //     setStories(response);
  //   });
  // }, []);

  return (
    <>
      <Container>
        {
          //    {comics.length === 0 ||

          // series.length === 0 ||
          // events.length === 0 ||
          // characters.length === 0 ?

          comics.length === 0 ? (
            <CircularProgress />
          ) : (
            <>
              <CardsContainer comics={comics} name="comics"></CardsContainer>
              <CardsContainer
                characters={characters}
                name="characters"
              ></CardsContainer>
              <CardsContainer events={events} name="events"></CardsContainer>
              <CardsContainer series={series} name="series"></CardsContainer>
            </>
          )
        }
      </Container>
    </>
  );
};

export default Content;
