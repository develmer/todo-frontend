import axios from "axios";
import { Button } from "react-bootstrap";

export const DutyDelete = (props: any) => {
  const handleDelete = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = `http://localhost:5000/api/v1/duties/${props.id}`;
    await axios
      .delete(url)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleDelete}>
      <button className="btn btn-link">
        <i className="bi bi-trash p-1"></i>
      </button>
    </form>
  );
};
