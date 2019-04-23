import React, { Component } from 'react';
import { Header } from "./Header";
import { List } from "./List";
import { SectionComplete } from "./SectionComplete";


class App extends Component {

  state = {
    list: [
      {
        title: "Task 1",
        isCompleted: true
      },
      {
        title: "Task 2",
        isCompleted: true
      },
      {
        title: "Task 3",
        isCompleted: false
      },
      {
        title: "Task 4",
        isCompleted: false
      }
    ]
  }

  handleChangeToggle = (event) => {
    const { checked, id } = event.target

    this.state.list[id].isCompleted = checked
    this.setState({
      list: [
        ...this.state.list
      ]
    })
  }

  handleChangeTitle = (event) => {
    const { value, id } = event.target
    this.state.list[id].title = value
    this.setState({
      list: [
        ...this.state.list
      ]
    })
  }

  handleAdd = () => {
    this.setState({
      list: [
        ...this.state.list,
        { title: "", isCompleted: false }
      ]
    })
  }

  handleDelete = (event) => {
    const { id } = event.target // get id
    this.state.list.splice(id, 1) // delete
    this.setState({
      list: [
        ...this.state.list
      ]
    })
  }


  render() {
    const { list } = this.state
    const isCompleted = []
    const isUncompleted = []
    // filter isCompleted and isUncompleted
    list.filter((listItem, index) => listItem.isCompleted ?
      isCompleted.push({ ...listItem, index }) : isUncompleted.push({ ...listItem, index }))

    return (
      <div className="container">
        <Header handleAdd={this.handleAdd} />
        <hr />
        <SectionComplete
          list={isCompleted}
          handleChangeToggle={this.handleChangeToggle}
          handleChangeTitle={this.handleChangeTitle}
          handleDelete={this.handleDelete}
        />
        <h6>
          {
            isUncompleted.length === 0 ?
            <div>Go to sleep <i style={{ color: "green" }} className="fas fa-bed"></i></div> :
            <div>Just do it <i style={{ color: "red" }} className="fas fa-fire-alt"></i></div>
          }
        </h6>
        <List
          list={isUncompleted}
          handleChangeToggle={this.handleChangeToggle}
          handleChangeTitle={this.handleChangeTitle}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
