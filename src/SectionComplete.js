import React from "react";
import { List } from "./List";

export class SectionComplete extends React.Component {

    state = {
        showCompleted: false
    }

    onToggle = () => {
        this.setState({
            showCompleted: !this.state.showCompleted
        })
    }

    render() {
        const { list, handleChangeToggle, handleChangeTitle, handleDelete } = this.props
        const { showCompleted } = this.state
        return (
            <div>
                <div className="card-content">
                    <span>{list.length} Completed</span>
                    <button className="btn btn-link" onClick={this.onToggle} style={{ float: "right" }}>
                        {showCompleted ? 'Hide' : 'Show'}
                    </button>
                </div>
                {showCompleted && 
                    <List 
                        list={list} 
                        handleChangeToggle={handleChangeToggle}
                        handleChangeTitle={handleChangeTitle}
                        handleDelete={handleDelete}
                    />}
                <hr />
            </div>
        )
    }
}
