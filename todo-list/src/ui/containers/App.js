import React, {Component} from 'react';
import Header from "../components/Header/Header";
import TodoInput from "../components/TodoInput/TodoInput";
import TodoList from "../components/TodoList/TodoList";
import "bootstrap/dist/css/bootstrap.min.css"
import {v4 as uuid} from 'uuid';
import CircularIndeterminate from "../components/Circular/Circular";

export default class App extends Component {
    state = {
        items: [],
        id: uuid(),
        item: '',
        editItem: false,
        complete: false,
        show: true
    }
    componentDidMount() {
        this.timer = setTimeout(this.toggle,2000)
    }
    toggle=()=>{
        this.setState({
            show :false
        })
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
            complete: false,
            priority: false,

        }
        const updatedItems = [...this.state.items, newItem];
        this.setState({
            items: updatedItems,
            item: '',
            id: uuid(),
            editItem: false,
            priority: false,
        })
    }
    clearList = () => {
        this.setState({
            items: []
        })
    };
    handleDelete = id => {
        const filteredItems = this.state.items.filter(item => item.id !== id);
        this.setState({
            items: filteredItems
        });
    };

    handleEdit = id => {
        const filteredItems = this.state.items.filter(item => item.id !== id);
        const selectedItem = this.state.items.find(item => item.id === id)
        this.setState({
            items: filteredItems,
            item: selectedItem.title,
            editItem: true,
            id: id
        });

    }

    handleCheck = id => {
        const {items} = this.state
        const index = this.state.items.map(item => item.id).indexOf(id);
        if (items[index].complete === true) {
            this.setState(state => {
                let {items} = this.state;
                items[index].complete = false;
                return items
            });
        } else this.setState(state => {
            let {items} = this.state;
            items[index].complete = true;
            return items
        });
    }

    handlePriority = id => {
        const {items} = this.state
        const index = this.state.items.map(item => item.id).indexOf(id);
        if (items[index].priority === true) {
            this.setState(state => {
                let {items} = this.state;
                items[index].priority = false;
                return items
            });
        } else this.setState(state => {
            let {items} = this.state;
            items[index].priority = true;
            return items
        });
    }

    render() {
        const {editItem, item, items,show} = this.state;
        console.log(show)
        return show
        ?<CircularIndeterminate />
        :<>
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
                handleCheck={this.handleCheck}
                handlePriority={this.handlePriority}
            />
        </>
    }
}

