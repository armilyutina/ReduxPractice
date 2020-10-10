import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const GroupButton = ({ className, vertical, children, ...attrs }) => {

  const classes = classNames(
    className,
    { vertical }
  );

  return(
    <div className = {classes}>
        {children}
    </div>
  )
}



GroupButton.propTypes = {
  vertical: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};


GroupButton.defaultProps = {
  className: '',
  children: null,
  vertical: false,
};


export default GroupButton;
