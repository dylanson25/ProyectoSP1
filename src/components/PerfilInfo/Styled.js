import styled from 'styled-components/native';

export const Conteiner = styled.View`
  flex: auto;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.bg || '#BEDCE3'};
`;
export const Back = styled.View`
  background-color: #6287A2;
  align-items: center;
  justify-content: center;
  width: ${props => props.wd || '35%'};
  height: ${props => props.hg || '65%'};
  border-radius: 100px;
`;

export const Texto = styled.Text`
  font-size: ${props => props.size || '30px'};
  margin: 3px;
  color: ${props => props.color || 'black'};
  font-weight: 500;
  text-align: center;
`;
