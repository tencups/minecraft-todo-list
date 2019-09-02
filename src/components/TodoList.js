import React from "react"
import styled from "styled-components"
import TodoItem from "./TodoItem"
const Container = styled.ul`
  display: flex;
  align-items: center;
  font-family: minecraft;
  border: solid;
  list-style: none;
  margin: 0px 25%;
  padding: 0;
  flex-direction: column;
  min-height: 50vh;
  margin-bottom: 5%;
  padding: 10px 0px;
`
const Title = styled.h2`
  text-decoration: underline;
  font-family: minecraft;
  display: flex;
  justify-content: center;
`
export default class extends React.Component {
  render() {
    const { items, handleRemove, handleFinish, isCompleted } = this.props
    return (
      <>
        <Title>todo-list</Title>
        <Container>
          {items
            .filter(item => !item.isCompleted)
            .map(item => (
              <TodoItem
                handleFinish={() => handleFinish(item.id)}
                handleRemove={() => handleRemove(item.id)}
                key={item.id}
                title={item.title}
              />
            ))}
          {console.log(items)}
          {items.length === 0 && <h1>Empty :(</h1>}
        </Container>
      </>
    )
  }
}
