import styled from 'styled-components'

const Button = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 4px;
  width: 5vw;
  margin-left: 4px;
  margin-bottom: 10px;
  cursor: pointer;
`

const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const TextInput = styled.input`
  background-color: gray;
  border: none;
  width: 75vw;
  height: 50px;
  cursor: pointer;
  margin-bottom: 10px;
  margin-top: 10px;
`

const BoxCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 130px;
  width: 80%;
  background-color: #ddf4ff;
  border-radius: 2px;
  margin: 0;
  margin-top: 10px;
`

const BoxColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2px;
`

const BoxRow = styled.div`
  display: flex;
  margin-right: 4px;
`

const Header = styled.div`
    width: 100vw;
    height: 100px;
    background-color: black;
    margin-bottom: 5px;
`

export { Button, Container, TextInput, BoxCard, BoxColumn, BoxRow, GlobalContainer, Header }
