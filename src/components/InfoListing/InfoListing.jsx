import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import { baseURL, urls } from "../../utils/endpoints";

import './InfoListing.css';

type Props = {
  listType: "string",
};

export default function InfoListing({ listType }: Props) {
  const [listData, setListData] = useState({
    loading: true,
    data: null,
    error: false,
  });
  let resultKey = "",
    resultTitle = "";

  if (listType === "category") {
    resultKey = "strCategory";
    resultTitle = "Categories";
  } else if (listType === "ingredient") {
    resultKey = "strIngredient1";
    resultTitle = "Ingredients";
  }

  useEffect(() => {
    if (!listData.data && listData.loading) {
      axios
        .get(urls.lists[listType])
        .then((response) => {
          if (response && response.data && response.data.drinks) {
            setListData({
              loading: false,
              data: response.data.drinks,
              error: false,
            });
          } else {
            setListData({
              loading: false,
              data: null,
              error: true,
            });
          }
        })
        .catch(() => {
          setListData({
            loading: false,
            data: null,
            error: true,
          });
        });
    }
  }, [listData, listType]);

  return (
    <>
      {listData.loading && (
        <div className="cocktail-app_loader">
          <div className="cocktail-app_loader-content">
            <CircularProgress />
          </div>
        </div>
      )}
      {listData.data && !listData.loading && (
        <div className="cocktail-app_component">
          <Typography component="h4" variant="h4">
            {resultTitle}
          </Typography>
          <ul className="cocktail-app_display-list">
            {listData.data.map((item) => {
              return (
                <li
                  className="cocktail-app_display-list-item"
                  key={parseInt((10000 * Math.random()).toString(), 10)}
                >
                  <Link
                    to={`${baseURL}/${listType}/${encodeURIComponent(
                      item[resultKey]
                    )}`}
                  >
                    {item[resultKey]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
