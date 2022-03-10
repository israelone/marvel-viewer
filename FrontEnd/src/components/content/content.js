import React, { useState } from "react";
import styled from "styled-components";
import CardsContainer from "../card-container/cards-container";
import axios from "axios";
import { useEffect } from "react";
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
  const [creators, setCreators] = useState([]);
  const [events, setEvents] = useState([]);
  const [series, setSeries] = useState([]);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/comics`).then((res) => {
      // console.log(res);
      setComics([...res.data.data.results]);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3001/characters`).then((res) => {
      console.log(res);
      setCharacters([...res.data.data.results]);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3001/creators`).then((res) => {
      // console.log(res, creators);
      setCreators([...res.data.data.results]);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3001/events`).then((res) => {
      // console.log(res);
      setEvents([...res.data.data.results]);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3001/series`).then((res) => {
      // console.log(res);
      setSeries([...res.data.data.results]);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3001/stories`).then((res) => {
      // console.log(res);
      setStories([...res.data.data.results]);
    });
  }, []);

  return (
    <>
      <Container>
        <CardsContainer comics={comics}></CardsContainer>
        <CardsContainer characters={characters}></CardsContainer>
        <CardsContainer events={events}></CardsContainer>
        <CardsContainer series={series}></CardsContainer>
      </Container>
    </>
  );
};

export default Content;
