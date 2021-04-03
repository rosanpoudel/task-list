import React from 'react';
import Buttons from './Buttons';
import classNames from 'classnames';


const Footer = ({handleFilter, filterBy, clearCompleted, checkedCount}) =>
    <div className="footer py-2 d-flex justify-content-between">
        <Buttons handleFilter={handleFilter} filterBy={filterBy} />
        <button
            className= { classNames( 'app-btn bg-danger text-white rounded-0 invisible', {'visible': checkedCount > 0 } )}
            onClick={ e =>clearCompleted()}>
            clear completed
        </button>
    </div>;

    export default Footer;







