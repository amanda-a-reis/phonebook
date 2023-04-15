import styled from 'styled-components'

const Card = styled.div<any>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: ${(props) => props.w || 'auto'};
  height:  ${(props) => props.h || 'auto'};
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

export { Card, CardIcon }
