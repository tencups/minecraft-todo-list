import React from "react"
import App from "./App"
import CompletedTodos from "./CompletedTodos"
import { BrowserRouter, Route } from "react-router-dom"
import uuid from "uuid"
export default class extends React.Component {
  state = {
    item: "",
    items: [],
    id: uuid,
    isCompleted: false
  }
  onFormSubmit = e => {
    e.preventDefault()
    const newItem = {
      title: this.state.item,
      id: this.state.id
    }

    const updateditems = [...this.state.items, newItem]

    this.setState({
      items: updateditems,
      id: uuid(),
      item: "",
      isCompleted: false
    })
  }

  handleChange = e => {
    this.setState({
      item: e.target.value
    })
  }
  handleRemove = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id)
    this.setState({
      items: filteredItems
    })
  }
  handleFinish = id => {
    this.setState(({ items }) => ({
      items: items.map(item =>
        item.id === id ? { ...item, isCompleted: true } : item
      )
    }))
  }
  render() {
    return (
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={props => {
            return (
              <App
                handleRemove={this.handleRemove}
                handleChange={this.handleChange}
                handleFinish={this.handleFinish}
                onFormSubmit={this.onFormSubmit}
                item={this.state.item}
                items={this.state.items}
                id={this.state.id}
                isCompleted={this.state.isCompleted}
              />
            )
          }}
        />
        <Route
          exact
          path="/completed-todos"
          render={props => {
            return (
              <CompletedTodos
                handleRemove={this.handleRemove}
                handleChange={this.handleChange}
                handleFinish={this.handleFinish}
                onFormSubmit={this.onFormSubmit}
                item={this.state.item}
                items={this.state.items}
                id={this.state.id}
                isCompleted={this.state.isCompleted}
              />
            )
          }}
        />
      </BrowserRouter>
    )
  }
}
