import React from 'react';
import PropTypes from 'prop-types';

function PageItem({ active, disabled, activeLabel, children, onClick }) {
  return (
    <li
      className={`page-item${disabled ? ' disabled' : ''}${
        active ? ' active' : ''
      }`}
    >
      <button className='page-link' disabled={disabled} onClick={onClick}>
        {children}
        {active && activeLabel && (
          <span className='sr-only'>{activeLabel}</span>
        )}
      </button>
    </li>
  );
}

PageItem.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  activeLabel: PropTypes.string,
  onClick: PropTypes.func
};

PageItem.defaultProps = {
  active: false,
  disabled: false,
  activeLabel: '(current)'
};

function createButton(name, defaultValue, label = name) {
  function Button({ children, ...props }) {
    return (
      <PageItem {...props}>
        <span aria-hidden='true'>{children || defaultValue}</span>
        <span className='sr-only'>{label}</span>
      </PageItem>
    );
  }

  Button.displayName = name;

  return Button;
}

export default PageItem;
export const First = createButton('First', '«');
export const Prev = createButton('Prev', '‹', 'Previous');
export const Ellipsis = createButton('Ellipsis', '…', 'More');
export const Next = createButton('Next', '›');
export const Last = createButton('Last', '»');
