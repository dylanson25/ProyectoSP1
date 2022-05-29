import React from 'react';
import {ContMLine, TextInput, TxtInfo} from './styled';

const InputMultiline = (onChange, value, error) => {
  return (
    <ContMLine>
      {error && <TxtInfo  fz='15px' color="red">{error.message || 'Error'}</TxtInfo>}
      <TextInput
        multiline
        value={value}
        onChangeText={onChange}
        placeholderTextColor={'black'}
        placeholder="Descripción..."
      />
    </ContMLine>
  );
};

export default InputMultiline;
