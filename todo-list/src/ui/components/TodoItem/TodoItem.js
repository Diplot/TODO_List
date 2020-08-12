import React, {Component} from 'react';

class TodoItem extends Component {
    render() {
        const {title , handleDelete ,handleEdit , handleCheck, handlePriority,priority} = this.props;

        return (
                <li className={"list-group-item d-flex justify-content-between"}>
                    <h6 className={"item__text item__blocks"}>{title}</h6>
                    <div className={"todo-icon"}>
                            <span onClick={handlePriority}><i className={priority?"fas fa-star mr-2 text-warning" :"fas fa-star mr-2"}></i></span>
                            <input className="mr-2" type="checkbox"  onChange={handleCheck}/>
                            <span onClick={handleEdit}><i className="far fa-edit mr-2"></i></span>
                            <span onClick={handleDelete}><i className="far fa-trash-alt mr-2" ></i></span>
                    </div>
                </li>
        );
    }
}

export default TodoItem;