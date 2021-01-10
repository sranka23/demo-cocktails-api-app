import React, { useRef } from "react";
import { useParams, useHistory } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

import { baseURL } from "../../utils/endpoints";

type Props = {
  searchTerm: string,
  termSetter: Function,
};
export default function SearchBar({ searchTerm, termSetter }: Props) {
  const textRef = useRef();
  const history = useHistory();
  let { term } = useParams();
  return (
    <>
      <form
        noValidate
        autoComplete="off"
        style={{ textAlign: "center" }}
        onSubmit={(e) => {
          e.preventDefault();
          termSetter(textRef.current.value);
          history.push(`${baseURL}/search/${textRef.current.value}`);
        }}
      >
        <TextField
          id="searchTextField"
          label="Search for drinks"
          placeholder="Know the name ? Look for the drinks of your choice !! "
          fullWidth
          margin="normal"
          variant="outlined"
          type="search"
          defaultValue={term}
          inputRef={textRef}
        />
        <Button variant="contained" color="primary" type="submit">
          <SearchIcon fontSize="small" /> Search
        </Button>
      </form>
    </>
  );
}
