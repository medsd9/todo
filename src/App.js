import { Route } from "react-router-dom";
import NavBar from "./components/navbar";
import React from "react";
import Connexion from "./components/connexion";
import Todo from "./components/todo";
import PrivateRoute from "./protected-route";
import "./App.css";
function App() {
  return (
    <>
      {/* nav bar */}
      <NavBar />
      {/* proteger notre router  */}
      <PrivateRoute exact path="/" component={Todo}></PrivateRoute>
      {/* route de connexion */}
      <Route path="/connexion" component={Connexion} />
    </>
  );
}

export default App;
