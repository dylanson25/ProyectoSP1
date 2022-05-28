import React from 'react';
import {ContMLine, TextInput} from './styled';

const InputMiltiline = () => {
  return (
    <ContMLine>
      <TextInput
        multiline
        placeholder="Descripción..."
        placeholderTextColor="black"
      />
    </ContMLine>
  );
};

export default InputMiltiline;
