import React, {Component} from "react";
export default class TodoInput extends Component {
    render() {
        const {item, handleChange, handleSubmit , editItem} = this.props;
        return <>
            <form className="input-group mb-3" onSubmit={handleSubmit}>
                <input type="text" className="form-control"
                       aria-label="Recipient's username" aria-describedby="button-addon"
                       maxLength={50} minLength={1} required value={item} onChange={handleChange}
                       placeholder={"Name..."}
                />
                <div className="input-group-append">
                    <button className={editItem ?"btn btn-outline-success":"btn btn-outline-secondary"} type="submit" id="button-addon" >
                        {editItem ? "Edit item" : "Add item"}
                    </button>
                </div>
            </form>
        </>
    }
}