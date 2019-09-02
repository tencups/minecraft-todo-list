import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
`
const Input = styled.input`
  width: 40%;
  margin-top: 5vh;
  padding: 10px 5px;
  box-sizing: border-box;
  font-family: minecraft;
  border-style: solid;
  margin-bottom: 5%;
`

export default class extends React.Component {
  render() {
    const { onFormSubmit, handleChange, item } = this.props
    return (
      <>
        <form onSubmit={onFormSubmit}>
          <Container>
            <Input
              placeholder="new task..."
              onChange={handleChange}
              value={item}
              required
            />
          </Container>
        </form>
      </>
    )
  }
}
