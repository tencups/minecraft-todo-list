import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
const Nav = styled.nav`
  display: flex;
  font-family: minecraft;
  padding: 1.5vw 2vw;
  justify-content: space-between;
  align-content: center;
  text-decoration: none;
`
const Container = styled.div`
  display: flex;
`

export default () => {
  return (
    <Nav>
      <Link
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "120%",
          fontWeight: "500"
        }}
        to="/"
      >
        minecraft to-do list
      </Link>
      <Container>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/completed-todos"
        >
          completed todos
        </Link>
        <a
          style={{ textDecoration: "none", paddingLeft: "3vw", color: "black" }}
          href="https://github.com/tencups/minecraft-todo-list"
        >
          source
        </a>
      </Container>
    </Nav>
  )
}
