import React from 'react';
import {Conteiner, Input, TxtInfo} from './styled';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TextInput} from 'react-native';

const InputCardPro = (props, onBlur, onChange, value, error) => {
  return (
    <Conteiner width={props.width}>
      {error && (
        <TxtInfo fz="15px" color="red">
          {error.message || 'Error'}
        </TxtInfo>
      )}
      <Input style={{backgroundColor: 'white'}}>
        <Icon name={props.icon} size={20} color={'black'} />
        <TextInput
          style={{width: 330}}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          placeholder={props.placeholder}
          placeholderTextColor={'black'}
          keyboardType={props.ktype || 'default'}
          maxLength={props.ktype === 'phone-pad' ? 10 : 50}
        />
      </Input>
    </Conteiner>
  );
};
export default InputCardPro;
