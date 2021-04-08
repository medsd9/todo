import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  todoAdded,
  todoDeleted,
  todoToggled,
  todoUpdate,
} from "../redux/todosReducer";

function Todo() {
  const dispatch = useDispatch();
  const toDoList = useSelector((state) => state.todos);
   const [toDoData, settoDoData] = useState({
    description: "",
    titre: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (toDoData.titre && toDoData.description)
      if (toDoData.id) {
        dispatch(todoUpdate(toDoData));
      } else {
        dispatch(todoAdded(toDoData));
      }
    settoDoData({});
  };

  const deleteTodo = (id) => {
    if (id) dispatch(todoDeleted(id));
    settoDoData({});
  };

  const editTodo = (toDo) => {
    settoDoData(toDo);
  };

  const toggleTodo = (id) => {
     if (id) dispatch(todoToggled(id));
  };

  return (
    <Container>
      <Container>
        {" "}
        <h1>Liste des taches</h1>
        <DisplayToDoList
          onEdit={editTodo}
          onDelete={deleteTodo}
          onToggle={toggleTodo}
          toDoList={toDoList}
        />
      </Container>
      <AddToDo
        toDo={toDoData}
        setToDo={settoDoData}
        onClickSubmit={handleSubmit}
      />
    </Container>
  );
}

export default Todo;

const AddToDo = ({ toDo, setToDo, onClickSubmit }) => {
  const handleChange = (type) => (value) => {
    setToDo((v) => ({ ...v, [type]: value.target.value }));
  };
  return (
    <Container>
      <h1>ajouter des taches</h1>
      <Form>
        <Row>
          <Col lg={4}>
            <Form.Group controlId="titre">
              <Form.Label>titre de la Taches</Form.Label>
              <Form.Control
                onChange={handleChange("titre")}
                type="text"
                value={toDo.titre || ""}
                placeholder="Entrer titre"
              />
            </Form.Group>
          </Col>
          <Col lg={6}>
            <Form.Group controlId="description">
              <Form.Label>Description de la tache</Form.Label>
              <Form.Control
                onChange={handleChange("description")}
                type="text"
                value={toDo.description || ""}
                placeholder="Entrer description"
              />
            </Form.Group>
          </Col>
          <Col className="mt-auto">
            <Form.Group controlId="formBasicEmail">
              <Button onClick={onClickSubmit} variant="primary" type="submit">
                {!toDo.id ? "Ajouter" : "Editer"}
              </Button>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

const DisplayToDoList = ({ toDoList, onToggle, onDelete, onEdit }) => {
  return (
    <Container>
      {toDoList.map(({ id, titre, description, completed }) => {
        return (
          <Row className="align-items-center border p-3 rounded mb-2" key={id}>
            <Col lg="auto" className="title">
              {titre}
            </Col>
            <Col lg="auto" className="desciption">
              {description}
            </Col>
            <Button onClick={() => onDelete(id)} variant="link">
              supprimer
            </Button>
            <Button
              onClick={() => onEdit({ id, titre, description })}
              variant="link"
            >
              editer
            </Button>
            {completed ? (
              <Button
                className="ml-auto"
                onClick={() => onToggle(id)}
                variant="success"
              >
                completé
              </Button>
            ) : (
              <Button
                onClick={() => onToggle(id)}
                variant="danger"
                className="ml-auto"
              >
                pas completé
              </Button>
            )}
          </Row>
        );
      })}
    </Container>
  );
};
