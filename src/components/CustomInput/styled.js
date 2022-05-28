import styled from 'styled-components/native';

export const Conteiner = styled.View`
  width: ${props => props.width || '90%'};
  margin-bottom: 2%;
  margin-top: 1%;
`;

export const ContMLine = styled.View`
  width: ${props => props.width || '90%'};
  margin-bottom: 2%;
  margin-top: 1%;
`;
export const TextInput = styled.TextInput`
  border: solid 1px black;
  border-radius: 10px;
  padding-left: 2%;
  height: 70px;
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
  font-size: ${props => props.fz || '15px'};
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
  flex-direction: row;
  align-items: center;
  margin-top: 3px;
  margin-bottom: 6px;
  width: 100%;
`
export const InputView = styled.View`
  width: 75%;
  margin-left: 5px;
`

