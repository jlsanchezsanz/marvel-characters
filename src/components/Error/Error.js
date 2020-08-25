import React from 'react';
import PropTypes from 'prop-types';

import './Error.scss';

export default function Error({ message }) {
  return (
    <div className='error'>
      <div className='alert alert-danger' role='alert'>
        {message}
      </div>
    </div>
  );
}

Error.propTypes = {
  message: PropTypes.string.isRequired
};
