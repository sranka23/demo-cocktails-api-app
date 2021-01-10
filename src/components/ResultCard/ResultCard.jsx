import React from "react";
import { useHistory } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";

import { baseURL } from "../../utils/endpoints";
import "./ResultCard.css";

type Props = {
  resultItem: Object,
  detailView: boolean,
};

export default function ResultCard({ resultItem, detailView }: Props) {
  const history = useHistory();
  const renderIngredients = (data) => {
    let i = 1,
      arr = [];
    while (data[`strIngredient${i}`]) {
      let ingrdKey = `strIngredient${i}`;
      arr.push(
        <Chip
          label={`Ingredient: ` + data[`strIngredient${i}`]}
          clickable
          className="cocktail-app_result-item_content_pills"
          onClick={() => {
            console.log(baseURL + "/ingredient/" + data[ingrdKey]);
            history.push(baseURL + "/ingredient/" + data[ingrdKey]);
          }}
        />
      );
      i++;
    }
    return arr.map((item) => {
      return item;
    });
  };
  return (
    <div className="cocktail-app_result-item">
      <div className="cocktail-app_result-item_media">
        <img src={resultItem.strDrinkThumb} alt={resultItem.strDrink} />
      </div>
      <div className="cocktail-app_result-item_content">
        {resultItem.strDrink && (
          <Typography component="h5" variant="h5">
            {resultItem.strDrink}
          </Typography>
        )}
        {detailView && resultItem.dateModified && (
          <Typography component="p" variant="caption">
            {new Date(resultItem.dateModified).toString()}
          </Typography>
        )}
        {resultItem.strInstructions && (
          <Typography
            variant="subtitle1"
            color="textSecondary"
            className="cocktail-app_result-item_content_desc"
          >
            {resultItem.strInstructions}
          </Typography>
        )}
        {resultItem.strCategory && (
          <Chip
            label={`Category : ${resultItem.strCategory}`}
            variant="outlined"
            clickable
            className="cocktail-app_result-item_content_pills cocktail-app_result-item_content_pills-category"
            onClick={() => {
              history.push(`${baseURL}/category/${resultItem.strCategory}`);
            }}
          />
        )}
        {resultItem.strAlcoholic && (
          <Chip
            label={`Drink type: ${resultItem.strAlcoholic}`}
            clickable
            className="cocktail-app_result-item_content_pills"
            onClick={() => {
              history.push(`${baseURL}/type/${resultItem.strAlcoholic}`);
            }}
          />
        )}
        {renderIngredients(resultItem)}
        {!detailView && (
          <Button
            onClick={() => {
              history.push(`${baseURL}/drink/${resultItem.idDrink}`);
            }}
            className="cocktail-app_result-item_drink-info"
            style={{ display: "inline-block" }}
          >
            View Details
          </Button>
        )}
      </div>
    </div>
  );
}
