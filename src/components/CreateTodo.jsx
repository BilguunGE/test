import "./CreateTodo.css";

const CreateTodo = (props) => {
  const { setReset } = props;

  return (
    <form>
      <div className="mb-3">
        <label className="form-label">Titel</label>
        <input type="text" className="form-control" />
        <div className="form-text">Weniger als 160 Zeichen</div>
      </div>
      <div className="mb-3">
        <label className="form-label">Deadline</label>
        <input type="date" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Fortschritt (in %)</label>
        <input type="text" className="form-control" />
      </div>
      <div className="button-container">
        <button
          type="submit"
          className="btn btn-outline-primary left"
          onClick={setReset}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
          Zurück
        </button>
        <button
          type="submit"
          className="btn btn-primary right"
          onClick={setReset}
        >
          + TODO erstellen
        </button>
      </div>
    </form>
  );
};

export default CreateTodo;
