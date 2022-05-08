import { useState } from "react";
import CreateTodo from "./CreateTodo";
import EditTodo from "./EditTodo";
import Impressum from "./Impressum";
import "./TodoTableView.css";

const head = ["Index", "Titel", "Deadline", "Fortschritt"];
const body = [
  { title: "A", deadline: "13.10.2022", progress: "100%" },
  { title: "B", deadline: "16.01.2025", progress: "50%" },
  { title: "C", deadline: "01.11.2028", progress: "27%" },
];

const TodoTableView = () => {
  const [visible, setVisible] = useState(true);
  const [showEdit, setShowEdit] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [showImpressum, setShowImpressum] = useState(false);

  const onRowClick = () => {
    setVisible(false);
    setShowEdit(true);
  };

  const onCreateClick = () => {
    setVisible(false);
    setShowCreate(true);
  };

  const onImpressumClick = (e) => {
    e.preventDefault();
    setVisible(false);
    setShowEdit(false);
    setShowCreate(false);
    setShowImpressum(true);
  };

  const onReset = (e) => {
    e.preventDefault();
    setShowEdit(false);
    setShowCreate(false);
    setShowImpressum(false);
    setVisible(true);
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href={{}} onClick={onReset}>
            TODO Manager
          </a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href={{}}
                  onClick={onReset}
                >
                  Übersicht
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href={{}} onClick={onImpressumClick}>
                  Impressum
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        {visible && (
          <>
            <table className="table table-hover">
              <thead>
                <tr>
                  {head.map((value, index) => {
                    return (
                      <th key={index} scope="col">
                        {value}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {body.map((value, index) => {
                  return (
                    <tr onClick={onRowClick} key={index}>
                      <th scope="row">{++index}</th>
                      <td>{value.title}</td>
                      <td>{value.deadline}</td>
                      <td>{value.progress}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <button className="btn btn-outline-primary" onClick={onCreateClick}>
              + TODO erstellen
            </button>
          </>
        )}
        {showEdit && <EditTodo />}
        {showCreate && (
          <CreateTodo setReset={onReset} />
        )}
        {showImpressum && <Impressum />}
      </div>
    </>
  );
};
export default TodoTableView;
