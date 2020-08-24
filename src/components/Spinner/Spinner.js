import React from 'react';

import './Spinner.scss';

export default function Spinner() {
  return (
    <div className='spinner__wrapper'>
      <div className='spinner-border' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  );
}
