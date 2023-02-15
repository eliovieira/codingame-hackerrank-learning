import "./App.css";
import { useState } from "react";
import { Fragment } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 0, name: "Eat" },
    { id: 1, name: "Sleep" },
    { id: 2, name: "Play videogames" },
  ]);
  const [id, setId] = useState(3);
  const [todoEditItem, setTodoEditItem] = useState(null);
  const [task, setTask] = useState("");

  function handleAdd(e) {
    e.preventDefault();
    task && setTodos([...todos, { id: id, name: task }]);
    setId(id + 1);
    console.log(JSON.stringify(todos));
  }

  function handleDelete(id) {
    console.log("DELETE || ID: " + id);
    const newArr = todos.filter((e) => e.id !== id);
    setTodos(newArr);
  }

  function handleEdit(todo) {
    setTodoEditItem({ ...todo });
  }

  function handleDoneEdit() {
    setTodos((todos) => {
      return todos.map((todo) => {
        if (todo.id === todoEditItem?.id) {
          return todoEditItem;
        }
        return todo;
      });
    });
    setTodoEditItem(null);
  }

  function onTodoEditItemNameChange(e) {
    const newName = e.target.value;
    setTodoEditItem({ ...todoEditItem, name: newName });
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => {
          const isEditing = todoEditItem?.id === todo.id;

          return (
            <li key={todo.id}>
              {!isEditing ? (
                <Fragment>{todo.name}</Fragment>
              ) : (
                <Fragment>
                  <input
                    value={todoEditItem.name}
                    onChange={onTodoEditItemNameChange}
                  />
                </Fragment>
              )}

              <button value={todo.id} onClick={() => handleDelete(todo.id)}>
                {" "}
                x
              </button>
              {!isEditing && (
                <button onClick={() => handleEdit(todo)}> Edit</button>
              )}

              {isEditing && (
                <button onClick={() => handleDoneEdit()}> Done</button>
              )}
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          onChange={(e) => {
            setTask(e.target.value);
          }}
        ></input>
        <button>Add to do</button>
      </form>
    </div>
  );
}

export default App;
