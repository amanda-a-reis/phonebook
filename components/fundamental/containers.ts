import styled from 'styled-components'

const Container = styled.div<any>`
  display: flex;
  width: ${(props) => props.w || 'auto'};
  height:  ${(props) => props.h || 'auto'};
  flex-wrap: ${(props) => props.wrap || 'no-wrap'};
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justify || ''};
  align-items: ${(props) => props.align || ''};
  margin-top: ${(props) => props.mt || '0'};
  margin-bottom: ${(props) => props.mb || '0'};
  margin-left: ${(props) => props.ml || '0'};
  margin-right: ${(props) => props.mr || '0'};
`
export { Container }
