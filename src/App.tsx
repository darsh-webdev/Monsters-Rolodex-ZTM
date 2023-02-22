// eslint-disable-next-line

import React, { useState, useEffect, ChangeEvent } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { getData } from "./utils/data.utils";
import "./App.css";

export type Monster = {
  name: string;
  email: string;
  id: string;
};

const App = () => {
  const [searchItem, setSearchItem] = useState("");
  const [monsters, setMonsters] = useState<Monster[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };

    fetchUsers();
  }, []);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchField = event.target.value.toLowerCase();
    setSearchItem(searchField);
  };

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchItem);
  });

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
