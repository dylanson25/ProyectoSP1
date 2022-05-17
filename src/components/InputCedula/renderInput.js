import React,{useState} from 'react';
import {Input, TxtInfo, CedulaConteiner, InputView} from '../CustomInput/styled';
import {RadioButton} from '../index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {Controller} from 'react-hook-form';
const nivel = [{value: 'A1'}, {value: 'C1'}];

const RenderCedula = ({name, control, rules, trash, setCedulas}) => {
  const [option, setOption] = useState(null);
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <CedulaConteiner>
          <RadioButton data={nivel} onSelect={value => setOption(value)} />
          <InputView>
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
          </InputView>
        </CedulaConteiner>
      )}
    />
  );
};

export default RenderCedula;
