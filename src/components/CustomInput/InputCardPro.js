import React from 'react';
import {Conteiner, Input, TxtInfo} from './styled';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TextInput} from 'react-native';
import {Controller} from 'react-hook-form';

const InputCardPro = props => {
  return (
    <Controller
      control={props.control}
      name={props.name}
      rules={props.rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <Conteiner width={props.width}>
            {error && <TxtInfo color="red">{error.message || 'Error'}</TxtInfo>}
            <Input style={{backgroundColor: 'white'}}>
              <Icon name={props.icon} size={20} color={'black'} />
              <TextInput
                style={{width: 330}}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder={props.placeholder}
                placeholderTextColor={'black'}
              />
            </Input>
          </Conteiner>
        </>
      )}
    />
  );
};
export default InputCardPro;
