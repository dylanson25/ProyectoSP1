import React, {useState} from 'react';
import {Text, Pressable} from 'react-native';
import {styles, Conteiner} from './styled';
import Icon from 'react-native-vector-icons/FontAwesome5';
export const RadioButton = ({data, onSelect}) => {
  const [userOption, setUserOption] = useState(null);
  const selectHandler = value => {
    onSelect(value);
    setUserOption(value);
  };
  return (
    <Conteiner>
      {data.map((item, key) => {
        return (
          <Conteiner key={key}>
            <Pressable
              
              onPress={() => selectHandler(item.value)}>

                <Icon name={item.value === userOption ? 'certificate' : 'circle'}  size={15} color={'black'} />
              </Pressable>
            <Text
              style={[
                styles.option,
                item.value === userOption && styles.textSelect,
              ]}>
              {item.value}
            </Text>
          </Conteiner>
        );
      })}
    </Conteiner>
  );
};
