// eslint-disable-next-line
import { useState, useEffect } from "react";
import React from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [searchItem, setSearchItem] = useState("");
  const [monsters, setMonsters] = useState([]);

  const handleSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    setSearchItem(searchField);
  };

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchItem);
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  return (
    <div className="App">
      <h1 className="heading">MONSTER'S ROLODEX</h1>
      <SearchBox
        className="search-box"
        onChangeHandler={handleSearchChange}
        placeholder="Search Monsters"
      />
      <CardList monstersList={filteredMonsters} />
    </div>
  );
};

export default App;
