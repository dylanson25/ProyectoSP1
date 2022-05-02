import styled from 'styled-components/native';

export const Conteiner = styled.View`
  width: ${props => props.width || '90%'};
  margin-bottom: 2%;
  margin-top: 1%;
`;

export const Input = styled.View`
  margin-top: 3px;
  align-items: center;
  flex-direction: row;
  height: 48px;
  background: #ffdedc;
  border: 1px solid;
  border-radius: 10px;
  padding-start: 10px;
`;

export const TxtInfo = styled.Text`
  font-weight: bold;
  color: ${props => props.color || '#444444'};
`;

export const TxtCont = styled.View`
  flex-direction: ${props => props.direct || 'column'};
`;
export const TitleCont = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-end: 10px;
  margin-bottom: 2px;
`;

export const CedulaConteiner = styled.View`
  margin-top: 3px;
  margin-bottom: 3px;
`