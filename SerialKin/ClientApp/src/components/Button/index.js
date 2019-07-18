import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

function Button(props) {
  const { children, green, className, onClick } = props;
  return (
    <button
      className={classnames(
        'button',
        green ? 'button-green' : '',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  green: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  children: null,
  green: false,
  className: ''
}

export default Button;
