import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const Button = ({value, onClick, className, text, disabled, active, ...attrs }) => {

  const classes = classNames(
    'b-t-n',
    { active },
    { disabled },
    className,
  );


  const handleSwitcher = e => {
      if(disabled){
        e.preventDefault();
      }
      else{
        return onClick(e)
      }
  }

      return(
        <button className = {classes}
                value = {value}
                disabled = {disabled}
                onClick = {handleSwitcher}
                {...attrs}
                >{text}</button>
      );
}

Button.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
}


Button.defaultProps = {
  value: '',
  onClick: ()=>{},
  className: '',
  text: 'default button',
  active: true,
  disabled: false,
};



export default Button;
