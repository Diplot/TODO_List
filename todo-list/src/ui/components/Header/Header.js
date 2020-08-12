import React, {Component} from "react";
import "normalize.css/normalize.css";
export default class Header extends Component{
    render() {
        return <header className={"header d-flex align-items-center justify-content-center text-"}>
            <h1 className={"header__h1"}>TODO List</h1>
            {/*<form className={"header__form"}>*/}
            {/*    <input type="search" placeholder={"Search"}/>*/}
            {/*</form>*/}
            </header>
    }
}