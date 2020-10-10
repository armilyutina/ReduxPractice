import React from 'react';

const Title = ({ title, className, ...attrs }) => <h1 className = {className} {...attrs}>{title}</h1>



export default Title;
