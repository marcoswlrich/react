import React from 'react';
import PropTypes from 'prop-types';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

import './Tarefas.css';

export default function Tarefas({ tarefas, handleEdit, handleDelete }) {
  return (
    <ul className="tarefa">
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <span className="icons">
            <TiEdit onClick={e => handleEdit(e, index)} className="edit-icon" />
            <RiCloseCircleLine
              onClick={e => handleDelete(e, index)}
              className="delete-icon"
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
