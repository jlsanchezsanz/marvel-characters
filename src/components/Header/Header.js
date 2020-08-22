import React from 'react';

import './Header.scss';

export default function Header() {
  return (
    <nav class='navbar navbar-light bg-light header'>
      <a class='navbar-brand' href='#'>
        <img
          src={require('../../assets/marvel_logo.svg')}
          alt='Marvel'
          height='40'
        />
      </a>
    </nav>
  );
}
