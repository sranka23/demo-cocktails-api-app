import React, { useState, useEffect } from "react";
import axios from "axios";

import CircularProgress from "@material-ui/core/CircularProgress";

import ResultCard from "../ResultCard/ResultCard";
import { getUrl } from "../../utils/endpoints";

import "./SearchListContainer.css";

type Props = {
  searchRequest?: Object,
};

export default function SearchListContainer({ searchRequest }: Props) {
  const [resultData, setResultData] = useState({
    loading: true,
    data: null,
    error: false,
  });

  useEffect(() => {
    setResultData({
      loading: true,
      data: null,
      error: false,
    });
  }, [searchRequest]);

  useEffect(() => {
    if (resultData.loading && !resultData.data) {
      axios
        .get(getUrl(searchRequest.searchType, searchRequest.keyword))
        .then((response) => {
          if (response && response.data && response.data.drinks) {
            setResultData({
              loading: false,
              data: response.data.drinks,
              error: false,
            });
          } else {
            setResultData({
              loading: false,
              data: null,
              error: true,
            });
          }
        })
        .catch((err) => {
          setResultData({
            loading: false,
            data: null,
            error: true,
          });
        });
    }
  }, [searchRequest, resultData]);
  return (
    <>
      {resultData.loading && (
        <div className="cocktail-app_loader">
          <div className="cocktail-app_loader-content">
            <CircularProgress />
          </div>
        </div>
      )}
      {!resultData.loading && resultData.data && (
        <ul className="cocktail-app_result">
          {resultData.data.map((item) => {
            return (
              <li className="MuiPaper-elevation1 cocktail-app_result_list">
                <ResultCard resultItem={item} />
              </li>
            );
          })}
        </ul>
      )}
      {resultData.error && <h2>No results found</h2>}
    </>
  );
}

SearchListContainer.defaultProps = {
  searchRequest: {
    keyword: "",
    searchType: "name",
  },
};
