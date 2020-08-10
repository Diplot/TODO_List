import React, {Component} from 'react';
import Header from "../components/Header/Header";
import TodoInput from "../components/TodoInput/TodoInput";
import TodoList from "../components/TodoList/TodoList";
import "bootstrap/dist/css/bootstrap.min.css"
import {v4 as uuid} from 'uuid';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            id: uuid(),
            item: '',
            editItem: false,
            complete: false
        }
    }

    handleChange = (e) => {
        this.setState({
            item: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: this.state.id,
            title: this.state.item,
            complete:  this.state.completed
        }
        console.log(newItem)
        const updatedItems = [...this.state.items, newItem];
        this.setState({
            items: updatedItems,
            item: '',
            id: uuid(),
            editItem: false,
            completed: false,
        })
    }
    clearList = () =>{
            this.setState({
                items:[]
            })
    };
    handleDelete = id =>{
            const filteredItems  = this.state.items.filter(item=> item.id !== id);
            this.setState({
                items:filteredItems
            });
    };
    handleEdit = id =>{
        const filteredItems  = this.state.items.filter(item=> item.id !== id);
        const selectedItem = this.state.items.find( item => item.id === id)
        this.setState({
            items:filteredItems,
            item: selectedItem.title,
            editItem: true,
            id:id
        });
    }
    render() {
        const {editItem, item, items} =this.state
        return <>
            <Header/>
            <TodoInput
                item={item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={editItem}
            />
            <TodoList
                items={items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
            />
        </>
    }
}

