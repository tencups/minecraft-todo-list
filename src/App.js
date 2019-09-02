import React from "react"
import Header from "./components/Header"
import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"
import uuid from "uuid"
import "./App.css"

class App extends React.Component {
  render() {
    const {
      handleChange,
      onFormSubmit,
      item,
      items,
      handleRemove,
      handleFinish,
      isCompleted
    } = this.props
    return (
      <>
        <Header />
        <TodoInput
          handleChange={handleChange}
          onFormSubmit={onFormSubmit}
          item={item}
        />
        <TodoList
          handleFinish={handleFinish}
          handleRemove={handleRemove}
          items={items}
          isCompleted={isCompleted}
        />
      </>
    )
  }
}

export default App
