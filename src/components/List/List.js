import React from 'react';

import './List.css';

import Item from '../Item/Item';

const List = ({ initialState }) => {
  return(
      <ul className = "list-list">
        {
          initialState.map(({...item }, index) => <Item {...item} key = {index} /> )
        }
      </ul>
  )
}


export default List;
