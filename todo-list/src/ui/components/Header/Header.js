import React, {Component} from "react";
import "../../../../node_modules/normalize.css/normalize.css";
import './Header.scss'
export default class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return <header className={"header"}>
            <h1 className={"header__h1"}>TODO List</h1>
            <form className={"header__form"}>
                <input type="search" placeholder={"Search"}/>
            </form>
            </header>
    }
}