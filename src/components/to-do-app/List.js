import React from 'react';
import Item from './Item';

const List = ({ lists, deleteClick, isTaskComplete}) => (
        lists.map(  ( list, index ) =>
            (<Item  key={index} name={list.text} id={list.id} isComplete={list.isComplete}  deleteClick={deleteClick} isTaskComplete={isTaskComplete} />))
    );

export default List;