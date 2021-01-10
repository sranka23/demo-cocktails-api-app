import React from "react";
import { useParams } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

import SearchListContainer from "../components/SearchListContainer/SearchListContainer.jsx";

export default function FilterByType() {
  let { type } = useParams();

  return (
    <>
      <Typography component="h3" variant="h3">
        {type}
      </Typography>
      <SearchListContainer
        searchRequest={{
          keyword: type,
          searchType: "type",
        }}
      />
    </>
  );
}
