import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Settings from "./components/Settings/Settings";
import Gundam from "./components/Gundam";
import SubmitGundam from "./components/SubmitGundam";
import Search from "./components/Search";
import AllGundams from "./components/AllGundams";
import About from "./components/About/About";
import UserGundams from "./components/UserGundams";

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
            <Footer />
          </Route>
          <Route exact path="/profile/:id">
            <UserProfile />
            <Footer />
          </Route>
          <Route path="/settings">
            <Settings />
            <Footer />
          </Route>
          <Route path="/gundams/:id">
            <Gundam />
            <Footer />
          </Route>
          <Route path="/submit">
            <SubmitGundam />
            <Footer />
          </Route>
          <Route path="/search">
            <Search />
            <Footer />
          </Route>
          <Route exact path="/gundams">
            <AllGundams />
            <Footer />
          </Route>
          <Route path="/about">
            <About />
           </Route>
          <Route path="/profile/:id/gundams">
            <UserGundams />
          </Route>
          <Route>
            <h2>Page Not Found</h2>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
