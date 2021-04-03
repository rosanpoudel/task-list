import React from 'react';
import {  Form, FormGroup, FormControl } from 'react-bootstrap';

const EntryForm = ({handleSubmit, checkAllTask}) => (
    <Form className="task-form" onSubmit={ e => {
            e.preventDefault();
            handleSubmit( e.target.elements[0].value );
            e.target.elements[0].value = '';
        }}>
        <FormGroup className="mb-0">
            <i className="fas fa-angle-down check-all" onClick={ checkAllTask } />
            <FormControl className="input-feild" type="text" name="item"  placeholder="What Needs To Be Done?" required/>
        </FormGroup>
    </Form>
);

export default EntryForm;