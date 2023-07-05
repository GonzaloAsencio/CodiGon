import React from 'react';
import styled from 'styled-components';


const TextAreaStyle = styled.textarea`
    width: 100%;
    line-height: 1.4rem;
    margin: 0;
    font-family: 'Questrial', sans-serif;
    padding: 20px 14px;
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

const TextAreaField = ({ label, name, placeholder, columns, error = '', value, onChange, isRequired}) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <TextAreaStyle
        name={name}
        placeholder={placeholder}
        cols={columns}
        onChange={onChange}
        value={value}
        error={error}
        required={isRequired}
      />
      {error && <p style={{ color: "#ff7675",margin:'2px'}}>{error}</p>}
    </div>
  );
};

export default TextAreaField;
