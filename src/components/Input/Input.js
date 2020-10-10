import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Input.css';

const Input = ({ className, value, onKeyPress, onChange, type, placeholder, ...attrs }) => {

  const classes = classNames(
    'input',
    className
  );


  return(
    <input type = {type}
           className = {classes}
           value = {value}
           placeholder = {placeholder}
           onKeyPress = {onKeyPress}
           onChange = {onChange}
           />
  );
}


Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onKeyPress: PropTypes.func,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  type: 'text',
  className: '',
  value: '',
  placeholder: 'Tapping to ...',
  onKeyPress: ()=>{},
  onChange: ()=>{},
};


export default Input;
