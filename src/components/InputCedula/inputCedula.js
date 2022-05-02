import React, {useState} from 'react';
import {Conteiner, TxtInfo, TitleCont} from '../CustomInput/styled';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native';
import RenderCedula from './renderInput';

const InputCedula = ({rules, control, reset}) => {
  const [cedulas, setCedulas] = useState([{name: 'Cedula_1'}]);

  return (
    <Conteiner>
      <TitleCont style={{justifyContent: 'space-between'}} direct="row">
        <TxtInfo>Cedula </TxtInfo>
        <TouchableOpacity
          onPress={() => {
            setCedulas(currentCedula => [
              ...currentCedula,
              {name: `Cedulas_${cedulas.length + 1}`},
            ]);
          }}>
          <Icon name={'plus-circle'} size={20} color={'black'} />
        </TouchableOpacity>
      </TitleCont>
      {cedulas.map(({name}, key) => {
        const trash = key == 0 ? false : true;
        return (
          <RenderCedula
            key={key}
            name={name}
            control={control}
            rules={rules}
            reset={reset}
            setCedulas={setCedulas}
            cedulas={cedulas}
            trash={trash}
          />
        );
      })}
    </Conteiner>
  );
};
export default InputCedula;
