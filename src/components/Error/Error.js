import React from 'react';
import PropTypes from 'prop-types';

export default function Error({ message }) {
  return (
    <div className='alert alert-danger' role='alert'>
      {message}
    </div>
  );
}

Error.propTypes = {
  message: PropTypes.string.isRequired
};
