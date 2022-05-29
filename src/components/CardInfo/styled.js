import styled from 'styled-components/native';
import {colors} from '../../assets/colors';

export const Conteiner = styled.View`
  justify-content: center;
  align-items: center;
  width: 95%;
  height: auto;
  max-height: 700px;
  min-height: 500px;
  margin-top: 20px;
  margin-bottom: 10px;
  border: solid black 2px;
  background-color: white;
  elevation: 6;
`;
export const ContInfo = styled.View`
  width: 90%;
  align-items: center;
  flex-direction: row;
`;
export const TextInfo = styled.Text`
  color: black;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;
export const TextName = styled.Text`
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  color: ${colors.fondo_usuario};
  margin-bottom: 10px;
`;
export const Imagen = styled.Image`
  width: 70%;
  height: 45%;
  margin: 10px;
`;
