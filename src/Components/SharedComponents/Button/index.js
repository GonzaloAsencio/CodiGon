import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const variantStyles = {
  primary: {
    background: '#fdcb6e',
    backgroundDisabled: '#9B9B9B',
    backgroundHover: '#ffeaa7;',
    color: '#ffffff',
    colorDisabled: '#ffeaa7;',
  },
  secondary: {
    background: '#5FC23A',
    backgroundDisabled: '#9B9B9B',
    backgroundHover: '#418628',
    color: '#ffffff',
    colorDisabled: '#ffffff',
    focus: '#5FC23A',
  },
};

const Button = ({ text, variant, isDisabled, onClick }) => {
  
  const variantStyle = variantStyles[variant];

  const ButtonStyle =css`
    background-color: ${variantStyle.background};
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: ${isDisabled ? 'default' : null};
    color: #ffffff;
    padding: 1rem 1.2rem;
    border-radius: 0.5rem;
    transition: background-color 0.25s ease-out;
    &:hover {
      background-color: ${variantStyle.backgroundHover};
    }
    &:focus {
      box-shadow: 0 0 10px 2px ${variantStyle.focus}90;
      outline: dashed 2px ${variantStyle.focus}30;
    }
    &:disabled {
      background-color: ${variantStyle.backgroundDisabled};
      color: ${variantStyle.colorDisabled};
    }
  `;

  return (
    <button
      type="button"
      css={ButtonStyle}
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  /** Text for button */
  text: PropTypes.string.isRequired,
  /** Set the button variant */
  variant: PropTypes.oneOf(['primary', 'secondary']),
  /** Indicates that is disabled */
  isDisabled: PropTypes.bool,
  /** Callback onClick */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
  isDisabled: false,
  variant: 'primary',
};

export default Button;