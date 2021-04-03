import React from 'react';
import { Container } from 'react-bootstrap';


import EntryForm from '../components/to-do-app/EntryForm';
import List from '../components/to-do-app/List';
import NoData from '../components/to-do-app/NoData';
import Footer from '../components/to-do-app/Footer';

export default class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.checkAllLists = false;

        this.state = ({
            filterBy: 'All',
            checkedCount: 0,
            lists: [],
            checkAllClick: false
        });

        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteClick = this.deleteClick.bind(this);
        this.isTaskComplete = this.isTaskComplete.bind(this);
        this.filter = this.filter.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.clearCompleted = this.clearCompleted.bind(this);
        this.checkAllTask = this.checkAllTask.bind(this);
    }
    


    handleSubmit( text ){
        var newItem = {
            id: Math.random().toFixed(3) * 1000,
            text,
            isComplete: false,
            isDeleted: false
        };

        this.setState( prevState=> ({ lists: [...prevState.lists, newItem ]}))
    }


    deleteClick( e, id ){
        this.setState( prevState=>({
            lists : prevState.lists.filter( list=> list.id !== id ),
        }))
    }


    isTaskComplete(e, id){
        this.setState( prevState => ({
            lists : prevState.lists.map( list=> list.id === id ? {...list, isComplete: !list.isComplete }: list )
        }))
    }


    filter(){
        switch( this.state.filterBy ){
            case 'Pending':
                return this.state.lists.filter( data => !data.isComplete );
            case 'Completed':
                return this.state.lists.filter( data => data.isComplete );
            default:
                return( this.state.lists)
        }
    }


    handleFilter( e ){
        var name =  e.target.getAttribute('name');
        this.setState({ filterBy : name })
    }
    

    clearCompleted(){
        this.setState( prevState=>({
            lists : prevState.lists.filter( list=> !list.isComplete ),
        }))
    }


    checkAllTask(){
        this.setState( prevState=> ({
            lists: prevState.lists.map( list=>({...list, isComplete: !this.checkAllLists}))
        }), ()=>{ this.checkAllLists = !this.checkAllLists; })
    }


    render(){
        let lists = this.filter();
        return(
            <Container className="d-flex justify-content-center">
                <div className="app-wrapper mt-5">

                    <EntryForm
                        handleSubmit = { this.handleSubmit }
                        handleChange = { this.handleChange }
                        currentValue = { this.state.item }
                        checkAllTask = { this.checkAllTask }
                    />

                    { this.state.lists.length
                    ?
                        <div className="list-wrapper text-white pb-0 tab-content" ref="list">
                            <List  lists={lists} deleteClick={this.deleteClick}  isTaskComplete={this.isTaskComplete} isChecked={this.isChecked}  />
                        </div>

                        : <NoData />
                    }

                    { this.state.lists.length
                        ?
                        <div className="todoapp-footer clearfix bg-light px-2">
                            <div className="float-left item-left mr-3">
                                LEFT <strong>: {this.state.lists.filter( list=> !list.isComplete).length}</strong>
                            </div>

                            <div>
                                <Footer 
                                    filterBy = {this.state.filterBy}
                                    handleFilter={this.handleFilter}
                                    clearCompleted={this.clearCompleted}
                                    checkedCount = { this.state.lists.filter( list=> list.isComplete=== true).length }
                                />
                            </div>

                        </div>

                        : <NoData />
                    }

                </div>

            </Container>
        );
    }
}




