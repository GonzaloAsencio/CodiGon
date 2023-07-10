import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const InputStyle = styled.input`
    width: 100%;
    height: 1.4rem;
    margin: 0;
    font-family: 'Questrial', sans-serif;
    padding: 16.5px 14px;
    border-radius: 2px;
    border-style: none;
    outline:${(props) => props.error === '' ? 'solid 1.2px #6c5ce7' : 'solid 1.2px #ff7675'};
    &::placeholder{
      color:#b2bec3 ;
    }
    &:focus {
    outline: solid 2px #6c5ce7 ;
    }
`;

function InputField({ name, placeholder, label, value, onChange,text, error = '', isRequired , onFocus }) {
  return (
    <div>
      {label && <label>{label}</label>}
      <InputStyle text={text} name={name} placeholder={placeholder} value={value} onChange={onChange} error={error} required={isRequired} />
      {error && <p style={{ color: "#ff7675",margin:'2px', width:'100%'}}>{error}</p>}
    </div>
  );
}

  InputField.propTypes = {
  /** Text for button */
  text: PropTypes.string.isRequired,
};

InputField.defaultProps = {
    onClick: () => {},
    isDisabled: false,
    variant: 'primary',
  };


export default InputField;