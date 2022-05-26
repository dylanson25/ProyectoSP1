import React from 'react';
import {CustomBtn, TxtBtn} from './styled';
const CustomButton = ({onPress, title, bg}) => {
  return (
    <CustomBtn bg={bg} onPress={onPress} title={title}>
      <TxtBtn>{title}</TxtBtn>
    </CustomBtn>
  );
};
export default CustomButton;