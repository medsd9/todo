import { Redirect, Route } from "react-router";
import React from "react";
import { useSelector } from "react-redux";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const connected = useSelector((state) => state.auth.connected);

  return (
    <Route
      {...rest}
      render={(props) =>
        connected ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/connexion",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;
