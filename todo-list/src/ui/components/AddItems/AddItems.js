import React, {Component} from "react";
import Item from "../Item/Item";

export default class AddItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            subValue:[]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        const{value,subValue} = this.state;
        subValue.push(value)
        this.setState({
            value:''
        });
        event.preventDefault();
    }


    render() {
        const {value, subValue} = this.state;
        return <>
            <form className="input-group mb-3" onSubmit={this.handleSubmit}>
                <input type="text" className="form-control" placeholder="Name.."
                       aria-label="Recipient's username" aria-describedby="button-addon"
                       maxLength={50} minLength={1} required value={this.state.value} onChange={this.handleChange}/>
                <div className="input-group-append">
                    <input className={"btn btn-outline-secondary"} type="submit" id="button-addon" value={"Add items"}/>
                </div>
            </form>
            <ul className="list-group list-group-flush">
                <Item text={subValue}/>
            </ul>
        </>
    }
}