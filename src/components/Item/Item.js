import React from 'react';
import './Item.css';

const Item = ({id,  singer, single }) =>
    <li className = "list-item" key = {id}> <span className = "list-span">{singer}</span>{single}</li>



export default Item;
