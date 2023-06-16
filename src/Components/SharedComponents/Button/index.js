import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const variantStyles = {
  primary: {
    background: '#fdcb6e',
    borderColor: '#fdcb6e',
    backgroundDisabled: '#ffffff',
    colorDisabled: '#fdcb6e',
    backgroundHover: '#ffeaa7',
    backgroundColorHover: '#fdcb6e',
    color: '#ffffff',
  },
  secondary: {
    background: '#ffffff',
    borderColor: '#6c5ce7',
    backgroundDisabled: '#9B9B9B',
    backgroundHover: '#a29bfe',
    color: '#6c5ce7',
    backgroundColorHover:'#ffffff',
    colorDisabled: '#ffffff',
  },
};

const ButtonStyle = styled.button`
  background-color: ${(props) => variantStyles[props.variant].background};
  border-radius: 0.5rem;
  border: 2px solid ${(props) => variantStyles[props.variant].borderColor};
  cursor: ${(props) => props.disabled ? 'default' : 'pointer'};
  color: ${(props) => variantStyles[props.variant].color};
  padding: ${(props) => props.size === 'big' ? '1.5rem 2.2rem' : props.size === 'medium' ?  '1.5rem 1.5rem' : '1rem 1.2rem'};
  font-size: ${(props) => props.textSizee === 'big' ? '2.3rem' : props.textSize === 'medium' ?  '1.8rem' : '1.6rem'};
  border-radius: 0.5rem;
  font-weight: bold;
  transition: background-color 0.25s ease-out;
  &:active {
    background-color: ${(props) => variantStyles[props.variant].backgroundHover};
    color: ${(props) => variantStyles[props.variant].backgroundColorHover};
  }
  &:hover {
    background-color: ${(props) => variantStyles[props.variant].backgroundHover};
    color: ${(props) => variantStyles[props.variant].backgroundColorHover};
  }
  &:disabled {
    background-color: ${(props) => variantStyles[props.variant].backgroundDisabled};
    color: ${(props) => variantStyles[props.variant].colorDisabled};
  }
`;

const Button = ({ text, variant, disabled, onClick ,size,textSize}) => {
  return (
    <ButtonStyle
      type="button"
      onClick={onClick}
      disabled={disabled}
      size ={size}
      textSize={textSize}
      variant={variant}
    >
      {text}
    </ButtonStyle>
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