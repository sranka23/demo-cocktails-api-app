import React, { useState } from "react";
import { useParams } from "react-router-dom";

import SearchBar from "../components/SearchBar/SearchBar.jsx";
import SearchListContainer from "../components/SearchListContainer/SearchListContainer.jsx";

export default function FindByName() {
  let { term } = useParams();
  const [searchTerm, setSearchTerm] = useState(term || "");
  return (
    <>
      <SearchBar searchTerm={searchTerm} termSetter={setSearchTerm} />
      <SearchListContainer
        searchRequest={{
          keyword: searchTerm,
          searchType: "name",
        }}
      />
    </>
  );
}
