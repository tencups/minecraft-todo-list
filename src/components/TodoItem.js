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
const Remove = styled.h6`
  cursor: pointer;
  :hover {
    color: red;
  }
`
const Finish = styled.h6`
  cursor: pointer;
  font-size: 80%;
  :hover {
    color: green;
  }
`
const ContainerTwo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
        <Title>
          {title}
          <ContainerTwo>
            <Finish
              onClick={handleFinish}
              style={{
                padding: "0",
                margin: "0",
                paddingRight: "10px",
                paddingBottom: "3px"
              }}
            >
              ✓
            </Finish>
            <Remove
              onClick={handleRemove}
              style={{ padding: "0", margin: "0" }}
            >
              X
            </Remove>
          </ContainerTwo>
        </Title>
      </Container>
    )
  }
}
