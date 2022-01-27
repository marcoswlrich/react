import React, { Component } from 'react';

import { FaPlus } from 'react-icons/fa';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

import './Main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: ['Fazer café', 'Beber aguá', 'Estudar'],
  };

  handleChange = e => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form action="" className="lista-form">
          <input
            onChange={this.handleChange}
            type="text"
            value={novaTarefa}
            className="lista-input"
          />
          <button type="submit" className="lista-button">
            <FaPlus />
          </button>
        </form>
        <ul className="tarefa">
          {tarefas.map(tarefa => (
            <li key={tarefa}>
              {tarefa}
              <div className="icons">
                <RiCloseCircleLine className="delete-icon" />
                <TiEdit className="edit-icon" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
