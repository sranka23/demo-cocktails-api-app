import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import FindByName from "./pages/FindByName";
import FindByAlphabet from "./pages/FindByAlphabet";
import FindByCategory from "./pages/FindByCategory";
import FilterByType from "./pages/FilterByType";
import DrinkDetails from "./pages/DrinkDetails";
import FilterByIngredient from './pages/FilterByIngredient'
import Home from "./pages/Home";

import "./App.css";

function App() {
  const baseURL = process.env.PUBLIC_URL || "";

  return (
    <Router>
      <Container maxWidth="md">
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Paper style={{ padding: 8 }}>
              <header>
                <Typography
                  component="h1"
                  variant="p"
                  align='center'
                >
                  #TheCocktailApp
              </Typography>
              </header>
              <nav>
                <Typography
                  component="h6"
                  variant="h6"
                  style={{ textAlign: "center" }}
                >
                  <NavLink
                    to="/cocktail"
                    className="cocktail-app_result-navigation MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/cocktail/search/"
                    className="cocktail-app_result-navigation MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary"
                  >
                    Search
                  </NavLink>
                </Typography>
              </nav>
              <main>
                <Switch>
                  <Route
                    exact
                    path={`${baseURL}/search/:term?`}
                    component={FindByName}
                  />
                  <Route
                    exact
                    path={`${baseURL}/category/:category`}
                    component={FindByCategory}
                  />
                  <Route
                    exact
                    path={`${baseURL}/alphabet/:alphabet`}
                    component={FindByAlphabet}
                  />
                  <Route
                    exact
                    path={`${baseURL}/drink/:id`}
                    component={DrinkDetails}
                  />
                  <Route
                    exact
                    path={`${baseURL}/type/:type`}
                    component={FilterByType}
                  />
                  <Route
                    exact
                    path={`${baseURL}/ingredient/:ingredient`}
                    component={FilterByIngredient}
                  />
                  <Route path={`${baseURL}`} component={Home} />
                </Switch>
              </main>

              <footer>
                &copy; 2021 - Shourya Ranka
              </footer>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Router>
  );
}

export default App;
