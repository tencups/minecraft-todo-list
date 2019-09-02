import React from "react"
import styled from "styled-components"
import Header from "./components/Header"
import CompletedTodo from "./components/CompletedTodo"
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
  padding: 10px 0px;
  margin-bottom: 5%;
`
const Title = styled.h2`
  text-decoration: underline;
  font-family: minecraft;
  display: flex;
  justify-content: center;
`

export default class extends React.Component {
  render() {
    const { items } = this.props
    return (
      <>
        <Header />
        <Title>completed todos 🥰</Title>

        <Container>
          {items
            .filter(item => item.isCompleted)
            .map(item => (
              <CompletedTodo key={item.id} title={item.title} />
            ))}
          {console.log(items)}
          {items.length === 0 && <h1>Empty :(</h1>}
        </Container>
      </>
    )
  }
}
