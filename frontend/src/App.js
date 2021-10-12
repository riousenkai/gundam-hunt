import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer"
import Home from "./components/Home"
import UserProfile from "./components/UserProfile";
import Settings from "./components/Settings/Settings";
import Gundam from "./components/Gundam";
import SubmitGundam from "./components/SubmitGundam";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
    <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile/:id">
            <UserProfile />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/gundams/:id">
            <Gundam />
          </Route>
          <Route path="/submit">
            <SubmitGundam />
          </Route>
          <Route>
            <h2>Page Not Found</h2>
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
