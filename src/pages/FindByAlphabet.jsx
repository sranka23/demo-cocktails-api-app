import React from "react";
import { useParams } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

import SearchListContainer from "../components/SearchListContainer/SearchListContainer.jsx";

export default function FindByAlphabet() {
  let { alphabet } = useParams();

  return (
    <>
      <Typography component="h3" variant="h3">
        {`Dictionary of drinks > ${alphabet.toUpperCase()}`}
      </Typography>
      <SearchListContainer
        searchRequest={{
          keyword: alphabet,
          searchType: "initial",
        }}
      />
    </>
  );
}
