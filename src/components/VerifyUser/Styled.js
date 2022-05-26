import styled from 'styled-components/native';

export const Conteiner = styled.View`
  align-items: center;
  justify-content: center;
  width: 90%;
  height: ${props => props.hg || '90%'};
`;
export const RealoadBtn = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 25%;
  height: 15%;
  border-radius: 20px;
  margin-top: 20px;
  elevation: 6;
  `;

export const TextInfo = styled.Text`
    text-align: justify;
    font-size: 25px;
    margin: 15px;
    color: ${props => props.color || 'black'};
`

