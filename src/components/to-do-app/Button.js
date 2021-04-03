import React from 'react';
import classNames from 'classnames';



const Button = ({value, index, handleFilter, filterBy}) =>(
        <button
            key={index}
            name={value}
            className= { classNames( 'app-btn', {'active border': value === filterBy } )}
            onClick={ e =>handleFilter(e)}>

            {value}
        </button>
);

export default Button;