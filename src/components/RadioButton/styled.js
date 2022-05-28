import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../assets/colors';

export const Conteiner = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
`;

export const styles = StyleSheet.create({
  option: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  circle: {
    margin: 6,
    padding: 10,
    borderRadius: 10,
  },
  textSelect: {
    textDecorationLine: 'underline',
  },
  unselected: {
    backgroundColor: 'red',
  },
  selected: {
    backgroundColor: 'blue',
  },
});
