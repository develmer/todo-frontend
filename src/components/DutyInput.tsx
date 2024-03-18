import axios from "axios";
import { useEffect, useState } from "react";
import { TodoAddModel } from "../models/TodoAdd.Model";

export const DutyInput = () => {
  const [name, setName] = useState<TodoAddModel | string | null>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = "http://localhost:5000/api/v1/duties";

    await axios
      .post(url, { name })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form className="row g-3 w-75 mx-auto mb-3" onSubmit={handleSubmit}>
      <div className="d-flex justify-content-end">
        <div className="col-8 p-2">
          <label htmlFor="name" className="visually-hidden">
            Todo
          </label>
          <input
            type="text"
            className="form-control"
            id="todo"
            placeholder="Please type your todo"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="col-2 p-2">
          <button type="submit" className="btn btn-primary mb-3">
            Create Todo
          </button>
        </div>
      </div>
    </form>
  );
};
