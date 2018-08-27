import React from 'react';

import Modal from './modal';

import './header.css';

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="clearfix">
          <li>
            <a className="what" href="#">What ?</a>
          </li>
          <li>
            <a className="new" href="#">+ New Game</a>
          </li>
        </ul>
      </nav>
      <Modal />
      <h1>HOT or COLD</h1>
    </header>
  );
}
