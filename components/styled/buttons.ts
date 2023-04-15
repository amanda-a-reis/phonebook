import styled from 'styled-components'

const Button = styled.button<any>`
  width: ${(props) => props.w || '200px'};
  height: ${(props) => props.h || '40px'};
  cursor: pointer;
  border: none;
  background-color: ${(props) => props.bg || '#6418c3'};
  color: ${(props) => props.color || 'white'};;
  border-radius: 8px;
  font-weight: 700;
  transition: ease-in 0.1s;
  margin-top: ${(props) => props.mt || '0'};
  margin-bottom: ${(props) => props.mb || '0'};
  margin-left: ${(props) => props.ml || '0'};
  margin-right: ${(props) => props.mr || '0'};


  &:hover {
    background-color: ${(props) => props.bgHover || '#8b56cc'};
  }
`

const DeleteButton = styled.button`
  height: 40px;
  cursor: pointer;
  border: none;
  background-color: #c20a00;
  color: white;
  border-radius: 8px;
  font-weight: 700;
  transition: ease-in 0.1s;
  width: 200px;
  margin-top: 20px;

  &:hover {
    background-color: #cc443d;
  }
`

const IconButton = styled.button`
  height: 40px;
  cursor: pointer;
  border: none;
  background-color: white;
  color: white;
  border-radius: 8px;
  font-weight: 700;
  transition: ease-in 0.1s;
  width: 50px;
  background: url('/back.png') no-repeat;
  background-size: 25px;
  background-position-x: center;
  background-position-y: center;

  &:hover {
    background-color: #F0F0F0;
  }
`

export { Button, DeleteButton, IconButton }
