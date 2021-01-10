import React from "react";
import { useHistory } from "react-router-dom";

import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";

import RandomDrink from "../components/RandomDrink/RandomDrink";
import InfoListing from "../components/InfoListing/InfoListing";

import { baseURL } from "../utils/endpoints";

export default function Home() {
  const history = useHistory();
  return (
    <>
      <RandomDrink />

      <div className="cocktail-app_component">
        <Typography component="h4" variant="h4">
          The dictionary of drinks
        </Typography>
        {"abcdefghijklmnopqrstuvwxyz".split("").map((item) => {
          return (
            <Chip
              label={item}
              clickable
              color="primary"
              className="cocktail-app_dictionary_content_pills"
              onClick={() => {
                history.push(`${baseURL}/alphabet/${item}`);
              }}
            />
          );
        })}
      </div>

      <InfoListing listType="category" />

      <InfoListing listType="ingredient" />
    </>
  );
}
