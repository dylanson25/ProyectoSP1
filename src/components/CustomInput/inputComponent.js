import React, {useState} from 'react';
import {Conteiner, Input, TxtInfo, TxtCont} from './styled';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TextInput, TouchableOpacity} from 'react-native';
import {Controller} from 'react-hook-form';

const CustumInput = props => {
  const [hidePswrd, setHidePswrd] = useState(
    props.icon == 'lock' ? true : false,
  );

  return (
    <Controller
      control={props.control}
      name={props.name}
      rules={props.rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <Conteiner width={props.width}>
            <TxtCont fd={props.fd}>
              <TxtInfo>{props.title} </TxtInfo>
              {error && (
                <TxtInfo color="red">{error.message || 'Error'}</TxtInfo>
              )}
            </TxtCont>
            <Input>
              <Icon name={props.icon} size={20} color={'black'} />
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry={hidePswrd}
                placeholder={props.placeholder}
                placeholderTextColor={props.black && 'black'}
              />
              {props.icon === 'lock' && (
                <TouchableOpacity
                  style={{position: 'absolute', right: 0, paddingRight: 10}}
                  onPress={() => setHidePswrd(!hidePswrd)}>
                  <Icon
                    name={hidePswrd ? 'eye' : 'eye-slash'}
                    size={20}
                    color={'black'}
                  />
                </TouchableOpacity>
              )}
            </Input>
          </Conteiner>
        </>
      )}
    />
  );
};
export default CustumInput;
