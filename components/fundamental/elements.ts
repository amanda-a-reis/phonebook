import styled from 'styled-components'

// Info-cards

const ContainerCard = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
`
const BoxCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 280px;
  width: 280px;
  border-radius: 14px;
  margin: 24px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
`
const CardIcon = styled.div`
  display: flex;
  background-color: #f6eeff;
  padding: 5px;
  border-radius: 8px;
`

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CardPhone = styled.div<any>`
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: ${(props) => props.direction || 'row'};
  margin-bottom: ${(props) => props.mb || '0'};
`
const CardButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const CardButton = styled.button`
  width: 200px;
  height: 35px;
  margin: 10px;
  cursor: pointer;
  border: none;
  background-color: #6418c3;
  color: white;
  border-radius: 8px;
  font-weight: 700;
  transition: ease-in 0.1s;

  &:hover {
    background-color: #8b56cc;
  }
`

const CardText = styled.p<any>`
  margin-bottom: ${(props) => props.mb || '10px'};
  margin-top: ${(props) => props.mt || '10px'};
  margin-left: ${(props) => props.ml || '0'};
  margin-right: ${(props) => props.mr || '0'};
  color: ${(props) => props.color || 'black'};
  font-weight: ${(props) => props.weigth || 'normal'};
  font-size: ${(props) => props.size || '16px'};
`

// HomePage

const ContainerHome = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
`
const CreateContacButton = styled.button`
  height: 50px;
  cursor: pointer;
  border: none;
  background-color: #6418c3;
  color: white;
  border-radius: 8px;
  font-weight: 700;
  transition: ease-in 0.1s;
  width: 100px;
  margin-left: 15px;

  &:hover {
    background-color: #8b56cc;
  }
`
const SearchInput = styled.input`
  background-color: 'white';
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
  margin-top: 10px;
  height: 50px;
  width: 80%;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  padding-left: 80px;
  background: url('/search.png') no-repeat;
  background-size: 20px;
  background-position-x: 2rem;
  background-position-y: center;

  &:focus {
    outline: none;
    border: 2px solid #6418c3;
  }
`
// more info

const ContainerInfo = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
`
const BoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 480px;
  width: 380px;
  border-radius: 14px;
  margin: 24px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
`
// form

const ContainerCreate = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ContainerForm = styled.div`
  height: 400px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const FormInput = styled.input`
  background-color: 'white';
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
  margin-top: 10px;
  height: 50px;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  padding-left: 20px;

  &:focus {
    outline: none;
    border: 2px solid #6418c3;
  }
`

const FormBox = styled.div<any>`
  display: flex;
  width: inherit;
  flex-direction: ${(props) => props.direction || 'column'};
  align-items: ${(props) => props.alignItems || ''};
  justify-content: ${(props) => props.align || ''};
  margin-bottom: ${(props) => props.mb || '0'};
  margin-top: ${(props) => props.mt || '0'};
`
const FormErrorMsg = styled.p`
  font-weight: 500;
  margin-top: 20px;
  color: #c20a00;
`

const Button = styled.button<any>`
  height: 40px;
  cursor: pointer;
  border: none;
  background-color: ${(props) => props.bg || '#6418c3'};
  color: white;
  border-radius: 8px;
  font-weight: 700;
  transition: ease-in 0.1s;
  width: ${(props) => props.w || '200px'};
  margin-top: ${(props) => props.mt || '0'};
  background-position-y: center;

  &:hover {
    background-color: ${(props) => props.bgHover || '#8b56cc'};
  }
`
const ButtonBack = styled.button`
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
const ContainerEdit = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const GlobalContainer = styled.div`
  width: 100vw;
  margin: 0;
  padding: 0;
`
const HomeContainer = styled.div`
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
  width: 100%;
  height: 100px;
  background-color: black;
  margin-bottom: 5px;
`

export {
  Button,
  Container,
  TextInput,
  BoxCard,
  BoxColumn,
  BoxRow,
  GlobalContainer,
  Header,
  ContainerCard,
  HomeContainer,
  CardInfo,
  CardPhone,
  CardButton,
  CardButtonContainer,
  CardText,
  CardIcon,
  ContainerHome,
  CreateContacButton,
  SearchInput,
  ContainerInfo,
  BoxInfo,
  ContainerForm,
  ContainerCreate,
  FormInput,
  FormBox,
  FormErrorMsg,
  DeleteButton,
  ContainerEdit,
  ButtonBack
}
