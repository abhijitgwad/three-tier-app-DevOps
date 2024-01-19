import logo from "./logo.svg";
import "./App.css";
import { Checkbox } from "antd";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
// import dotenv from "dotenv";
import {
  Form,
  Container,
  Row,
  Col,
  Button,
  Card,
  FormGroup,
} from "react-bootstrap";

function App() {
  const [categories, setcategories] = useState([]);
  const [checked, setchecked] = useState([]);
  const [task, settask] = useState("");

  const BASE_URL = process.env.REACT_APP_BASE_URL;
  // const BASE_URL = 'http://todobackend2:8080/'

  const categorie = [
    { name: "abgij", marked: true },
    { name: "anuj", marked: false },
  ];

  const getAllTask = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8080/user/alltask`);
      setcategories(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  getAllTask();

  const handleAdd = async () => {
    try {
      const { data } = await axios.post(`http://localhost:8080/user/addtask`, {
        name: task,
      });
      console.log(task);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (marked, id) => {
    console.log(`update encountered ${id} and ${marked}`);
    const { data } = await axios.put(
      `http://localhost:8080/user/updatetask/${id}`,
      {
        marked,
      }
    );
    if (data?.success) {
      toast.success("Product create successfully!!!");
    } else {
      toast.error(data?.message);
    }
  };

  const handledelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/user/deletetask/${id}`
      );
      console.log("dfgf");
    } catch (error) {
      bu;
      console.log(error);
    }
  };

  useEffect(() => {}, categories);

  return (
    <div style={{ backgroundColor: "#f0f0f0", textAlign: "center" }}>
      <h1 className="heading">My To-Do List</h1>
      <div className="c1">
        <Form className="d-flex" onSubmit={handleAdd}>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e) => settask(e.target.value)}
          />
          <Button variant="danger" type="submit">
            Add Task
          </Button>
        </Form>
      </div>
      <div>
        <Container>
          <Row>
            <Col>
              <h3>List of Tasks</h3>

              {categories?.map((c) => (
                <Form className="tasks">
                  <Checkbox
                    className="text "
                    checked={c.marked}
                    onChange={(e) => handleUpdate(e.target.checked, c._id)}
                  >
                    {c.marked ? (
                      <span style={{ textDecoration: "line-through" }}>
                        {c.name}
                      </span>
                    ) : (
                      c.name
                    )}
                  </Checkbox>
                  <Button
                    className="delete"
                    variant="danger"
                    type="submit"
                    onClick={() => handledelete(c._id)}
                  >
                    x
                  </Button>
                  <hr />
                </Form>
              ))}
              <hr />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
