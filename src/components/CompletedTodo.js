import React from "react"
import styled from "styled-components"

const Title = styled.h6`
  border: solid;
  margin: 10px 0px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  word-break: break-all;
`
const Container = styled.li`
  width: 80%;
  align-items: center;
  padding: 0;
  font-size: 4vh;
  margin: 0;
  font-size: 4vh;
`

export default class extends React.Component {
  render() {
    const { title, handleRemove, handleFinish } = this.props
    const craftingbench = ["make", "create", "craft", "build", "form"]
    const sword = ["fight", "kill", "slay", "slash"]
    const boots = ["travel", "find", "go"]
    const pickaxe = [
      "mine",
      "gold",
      "iron",
      "coal",
      "diamond",
      "emerald",
      "redstone",
      "lapis"
    ]

    return (
      <Container>
        <Title>{title}</Title>
      </Container>
    )
  }
}
