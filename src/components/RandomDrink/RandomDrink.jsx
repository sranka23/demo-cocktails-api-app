import React, { useState, useEffect } from "react";
import axios from "axios";

import Typography from "@material-ui/core/Typography";

import ResultCard from "../ResultCard/ResultCard";

export default function RandomDrink() {
  const [randomDrink, setRandomDrink] = useState();

  useEffect(() => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => {
        if (response && response.data && response.data.drinks) {
          setRandomDrink(response.data.drinks[0]);
        } else {
          setRandomDrink(null);
        }
      })
      .catch(() => {
        setRandomDrink(null);
      });
  }, []);
  return (
    <>
      {randomDrink && (
        <div className="cocktail-app_component">
          <Typography component="h4" variant="h4">
            Drink of the moment
          </Typography>
          <ResultCard resultItem={randomDrink} />
        </div>
      )}
    </>
  );
}
