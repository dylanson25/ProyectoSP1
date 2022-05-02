import React from 'react';
import {Input, TxtInfo, CedulaConteiner} from '../CustomInput/styled';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TextInput, TouchableOpacity} from 'react-native';
import {Controller} from 'react-hook-form';

const RenderCedula = ({name, control, rules, trash, setCedulas, reset}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <CedulaConteiner>
          {error && <TxtInfo color="red">{error.message || 'Error'}</TxtInfo>}
          <Input>
            <Icon name={'address-card'} size={20} color={'black'} />
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={`Cedula`}
              keyboardType="numeric"
              maxLength={7}
            />
            {trash && (
              <TouchableOpacity
                style={{position: 'absolute', right: 0, paddingRight: 10}}
                onPress={() => {
                  setCedulas(currentCedulas =>
                    currentCedulas.filter(element => element.name != name),
                  );
                  // reset({}, {keepValues: true});
                }}>
                <Icon name={'backspace'} size={20} color={'black'} />
              </TouchableOpacity>
            )}
          </Input>
        </CedulaConteiner>
      )}
    />
  );
};

export default RenderCedula;
