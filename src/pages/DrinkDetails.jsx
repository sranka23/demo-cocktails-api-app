import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import ResultCard from "../components/ResultCard/ResultCard";
import { urls } from "../utils/endpoints";

export default function DrinkDetails() {
  let { id } = useParams();
  const [drinkInfo, setDrinkInfo] = useState();
  useEffect(() => {
    setDrinkInfo(null);
    axios
      .get(`${urls.getDrinkDetail}${id}`)
      .then((response) => {
        if (response && response.data && response.data.drinks) {
          setDrinkInfo(response.data.drinks[0]);
        } else {
          setDrinkInfo(null);
        }
      })
      .catch(() => {
        setDrinkInfo(null);
      });
  }, [id]);
  return <>{drinkInfo && <ResultCard resultItem={drinkInfo} detailView />}</>;
}
