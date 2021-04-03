import React from 'react';
import Button from './Button';


let options = ['All', 'Completed', 'Pending'];

const Buttons = ({handleFilter, filterBy}) => 
    options.map( (value,index)=>
        <Button value={value} key={index} handleFilter={handleFilter} filterBy={filterBy} />
    );
;

export default Buttons