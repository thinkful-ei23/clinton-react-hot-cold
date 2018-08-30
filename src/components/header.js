import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default function Header(props) {
  return (
    <header className="header">
      <TopNav resetGame={props.resetGame} toggleModal={props.toggleModal}/>
      <InfoModal showInfo={props.showInfo} toggleModal={props.toggleModal} />
      <h1>HOT or COLD</h1>
    </header>
  );
}
