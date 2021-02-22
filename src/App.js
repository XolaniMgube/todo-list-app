/** @format */

import "./App.css";
import { TextField, Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import { db } from "./firebase_config";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    getTodos();
  }, []);

  let getTodos = () => {
    db.collection("todos").onSnapshot((querySnapshot) => {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress,
        }))
      );
    });
  };

  let addTodo = (e) => {
    e.preventDefault();

    db.collection("todos").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });

    setTodoInput("");
  };



  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <form>
        <TextField
          variant="outlined"
          label="write a todo"
          placeholder="Skip Xolani"
          size="small"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          size="medium"
          onClick={addTodo}
        >
          Add
        </Button>
      </form>

      {todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.todo}</p>
          <Button
            color="secondary"
            varient="contained"
          >Delete</Button>
        </div>
      ))}
    </div>
  );
}

export default App;
