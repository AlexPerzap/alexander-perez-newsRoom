import React from "react";

const SearchMenu = ({ defaultUser, onGet, onClear }) => {
  let input;

  return (
    <div className="container">
      <h5>Obteniendo los repositorios por username:</h5>
      <div className="row">
        <div className="col">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => onGet(input.value)}>
                Buscar
              </button>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="input Git username"
              aria-label=""
              aria-describedby="basic-addon1"
              defaultValue={defaultUser}
              ref={(node) => (input = node)}
            />
          </div>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onClear()}>
            Limpiar lista
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchMenu;
