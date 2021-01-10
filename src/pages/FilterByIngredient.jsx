import React from "react";
import { useParams } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

import SearchListContainer from "../components/SearchListContainer/SearchListContainer.jsx";

export default function FilterByIngredient() {
  let { ingredient } = useParams();

  return (
    <>
      <Typography component="h3" variant="h3">
        {ingredient}
      </Typography>
      <SearchListContainer
        searchRequest={{
          keyword: ingredient,
          searchType: "ingredient",
        }}
      />
    </>
  );
}
