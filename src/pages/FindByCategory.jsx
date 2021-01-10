import React from "react";
import { useParams } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

import SearchListContainer from "../components/SearchListContainer/SearchListContainer.jsx";

export default function FindByCategory() {
  let { category } = useParams();
  return (
    <>
      <Typography component="h3" variant="h3">
        {decodeURIComponent(category)}
      </Typography>
      {category && (
        <SearchListContainer
          searchRequest={{
            keyword: category,
            searchType: "category",
          }}
        />
      )}
    </>
  );
}
