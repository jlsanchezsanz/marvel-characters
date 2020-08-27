import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

export default function Header() {
  return (
    <nav className='navbar header'>
      <Link to='/'>
        <img
          src={require('../../assets/marvel_logo.svg')}
          alt='Marvel'
          height='40'
          width='100'
        />
      </Link>
    </nav>
  );
}
