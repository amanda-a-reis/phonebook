import styled from 'styled-components'

const CardText = styled.p<any>`
  margin-bottom: ${(props) => props.mb || '10px'};
  margin-top: ${(props) => props.mt || '10px'};
  margin-left: ${(props) => props.ml || '0'};
  margin-right: ${(props) => props.mr || '0'};
  color: ${(props) => props.color || 'black'};
  font-weight: ${(props) => props.weigth || 'normal'};
  font-size: ${(props) => props.size || '16px'};
`

const FormErrorMsg = styled.p`
  font-weight: 500;
  margin-top: 20px;
  color: #c20a00;
`

export { CardText, FormErrorMsg }
