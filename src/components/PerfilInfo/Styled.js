import styled from 'styled-components/native';

export const Conteiner = styled.View`
  width: 90%;
  align-items: center;
  justify-content: center;
  margin: 3%;
`;
export const EmailCont = styled.View`
  width: 80%;
  margin: 3%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Texto = styled.Text`
  font-size: ${props => props.size || '30px'};
  margin: 3px;
  color: ${props => props.color || 'black'};
  font-weight: 500;
  text-align: center;
`;
export const Type = styled.View`
  margin-top: 6%;
  align-items: center;
  justify-content: center;
  background-color: #f1b5b5;
  padding: 1px 12px 1px 12px;
  border-radius: 30px;
`;
