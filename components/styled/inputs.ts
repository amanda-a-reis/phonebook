import styled from 'styled-components'

const SearchInput = styled.input`
  background-color: 'white';
  border: none;
  cursor: pointer;
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

export { SearchInput, FormInput }
