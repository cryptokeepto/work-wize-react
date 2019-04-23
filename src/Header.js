import React, { Component } from "react";

export class Header extends Component {

    render() {
        const { handleAdd } = this.props
        return (
            <div className="row mt-5">
                <div className="col-md-11">
                    <h3>New List</h3>
                </div>
                <div className="col-md-1">
                    <button className="btn btn-info" onClick={handleAdd}>
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        )
    }
}