import React from 'react';

const Item = ({name, id, isComplete, deleteClick, isTaskComplete}) =>
    <li id={id} name={name}>
        <input type="checkbox"  data-reactid="checkbox"   className="mr-3"  onChange={ e => isTaskComplete(e, id, name) } checked={ isComplete ? true : false }  />
        <label className="mb-0" data-reactid="checkbox">
            {name}
        </label>
        
        <button className="cross-icon" onClick={ e => deleteClick(e, id)  }>
            <i className="fas fa-times text-danger"></i>
        </button>
    </li>
    ;
    
export default Item;


