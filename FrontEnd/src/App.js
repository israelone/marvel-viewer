import logo from "./logo.svg";
import "./App.css";
import SearchAppBar from "./components/navbar/navbar";
import ActionAreaCard from "./components/card-container/card/card";
import CardsContainer from "./components/card-container/cards-container";
import Content from "./components/content/content";

function App() {
  return (
    <>
      <SearchAppBar />
      <Content />
    </>
  );
}

export default App;
