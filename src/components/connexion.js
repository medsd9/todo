import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { connexion } from "../redux/authReducer";

function Connexion({ location }) {
  const [Values, setValues] = useState({ email: "", password: "" });
  const connected = useSelector((state) => state.auth.connected);

  const dispatch = useDispatch();
  const handleChange = (type) => (value) => {
    setValues((v) => ({ ...v, [type]: value.target.value }));
  };

  const handleConnexion = () => {
    if (Values?.email && Values?.password) {
       dispatch(connexion(Values));
    }
  };

  const { from } = location.pathname;

  if (connected) return <Redirect to={from} />;
  return (
    <Container>
      <Form className="mt-4">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={Values.email}
            onChange={handleChange("email")}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Mot de Pass</Form.Label>
          <Form.Control
            onChange={handleChange("password")}
            value={Values.password}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button onClick={handleConnexion} variant="primary" type="submit">
          Connexion
        </Button>
      </Form>
    </Container>
  );
}

export default Connexion;
