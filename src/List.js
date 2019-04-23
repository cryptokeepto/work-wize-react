import React from "react";
import { ListItem } from "./ListItem";

export class List extends React.Component {

    render() {
        const { list, handleChangeToggle, handleChangeTitle, handleDelete } = this.props
        return (
            <ul style={{ listStyleType: "none" }}>
                {
                    <ListItem 
                        listItem={list} 
                        handleChangeToggle={handleChangeToggle} 
                        handleChangeTitle={handleChangeTitle} 
                        handleDelete={handleDelete}
                    />
                }
            </ul>
        )
    }
}
