import React, { useState } from "react";
import styled from "styled-components";
import CardsContainer from "../card-container/cards-container";
import axios from "axios";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { CommuteRounded } from "@mui/icons-material";

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
      console.log(res.data.data);
      setComics([...res.data.data]);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3001/characters`).then((res) => {
      console.log(res.data.data);
      setCharacters([...res.data.data]);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3001/events`).then((res) => {
      console.log(res.data.data);
      setEvents([...res.data.data]);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3001/series`).then((res) => {
      console.log(res.data.data);
      setSeries([...res.data.data]);
    });
  }, []);

  // useEffect(() => {
  //   axios.get(`http://localhost:3001/stories`).then((res) => {
  //     console.log(res.data.data);
  //     setStories([...res.data.data]);
  //   });
  // }, []);

  return (
    <>
      <Container>
        {comics.length === 0 ||
        series.length === 0 ||
        events.length === 0 ||
        characters.length === 0 ? (
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
        )}
      </Container>
    </>
  );
};

export default Content;
