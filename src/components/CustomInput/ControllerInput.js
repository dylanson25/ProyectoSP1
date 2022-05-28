import React from 'react';
import {Controller} from 'react-hook-form';
import {InputCardPro, InputMultiline, CustumInput} from '.';

// inputCards
// inputForms
// inputMultiline

const ControllerInput = ({control, name, rules, ...props}) => {
  const {inputCards, inputForms, inputMult} = props;
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          {!!inputForms
            ? CustumInput(props, onBlur, onChange, value, error)
            : !!inputCards
            ? InputCardPro(props, onBlur, onChange, value, error)
            : !!inputMult &&
              InputMultiline(onChange, value, error)}
        </>
      )}
    />
  );
};

export default ControllerInput;
