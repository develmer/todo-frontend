import axios from "axios";
import { useEffect, useState } from "react";
import { TodoListModel } from "../models/TodoList.Model";
import { DutyUpdate } from "./DutyUpdate";
import { DutyInput } from "./DutyInput";
import { DutyDelete } from "./DutyDelete";

export const DutyList = () => {
  const [todos, setTodos] = useState<TodoListModel[] | null>();

  const getAllData = async () => {
    const url = "http://localhost:5000/api/v1/duties";
    await axios
      .get(url)
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllData();
  });

  return (
    <>
      <DutyInput />
      <table className="table table-striped w-75 mx-auto">
        <thead className="table-dark">
          <tr>
            <th scope="col">Duties</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos &&
            todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.name}</td>
                <td>
                  <DutyUpdate id={todo.id} name={todo.name} />
                  <DutyDelete id={todo.id} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};
