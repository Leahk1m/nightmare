import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import SpotFormPage from "./components/SpotFormPage";
import HomePage from "./components/HomePage";
import SpotShow from "./components/SpotShow";
import SpotDetails from "./components/SpotDetails";
import FavoritesShow from "./components/FavoritesShow";
import MySpots from "./components/MySpots";
import MissingPage from "./components/MissingPage";

import * as sessionActions from "./store/session";
import * as spotActions from "./store/spot";
import * as favActions from "./store/favorite";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const spotsData = useSelector(state => state.spot.allSpots)
  const favData = useSelector(state => state.favorites.allFavorites)

  useEffect(() => {
    dispatch(spotActions.getSpots())
    dispatch(favActions.getFavorites())
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/add-spot">
            <SpotFormPage />
          </Route>
          <Route exact path="/spots">
            <SpotShow spotsData={spotsData}/>
          </Route>
          <Route path="/spots/:spotId">
            <SpotDetails />
          </Route>
          <Route path="/favorites">
            <FavoritesShow favData={favData}/>
          </Route>
          <Route path="/myspots">
            <MySpots spotsData={spotsData}/>
          </Route>
          <Route path="/">
            <MissingPage/>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
