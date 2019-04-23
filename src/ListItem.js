import React from "react";

export class ListItem extends React.Component {

    render() {
        const { listItem, handleChangeToggle, handleChangeTitle, handleDelete } = this.props

        return (
            <div>
                {
                    listItem.map(({ title, index, isCompleted }) => {
                        return (
                            <li key={index}>
                                <input id={index} checked={isCompleted} type="checkbox" onChange={handleChangeToggle} />
                                <input id={index} type="text" value={title} onChange={handleChangeTitle} placeholder="typing someting" />
                                <button
                                    className="btn fas fa-trash" 
                                    style={{ color: "red" }}
                                    id={index} 
                                    onClick={handleDelete}>
                                </button>
                            </li>
                        )
                    })
                }
            </div>
        )
    }
}
