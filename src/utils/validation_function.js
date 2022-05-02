import {cedulaNumber} from './get_cedula';
const PSWRD_KUP_REGEX = /^(?=.*?[A-Z])/;
const PSWRD_KDOW_REGEX = /(?=.*?[a-z])/;
const PSWRD_DIGIT_REGEX = /(?=.*?[0-9])/;
const PSWRD_SPECIAL_REGEX = /(?=.*?[#?!@$%^&*-])/;
const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const pswrd_rules = {
  required: 'Falta ingresar la contraseña',
  minLength: {
    value: 8,
    message: 'La contraseña debe contener al menos 8 caracteres',
  },
  validate: {
    letterMayus: value =>
      PSWRD_KUP_REGEX.test(value) ||
      'La contraseña debe de tener al menos una letra mayuscula',
    letterDown: value =>
      PSWRD_KDOW_REGEX.test(value) ||
      'La contraseña debe de tener al menos una letra minuscula',
    minOneDigit: value =>
      PSWRD_DIGIT_REGEX.test(value) ||
      'La contraseña debe de tener al menos un digito',
    characterSpecial: value =>
      PSWRD_SPECIAL_REGEX.test(value) ||
      'La contraseña debe de tener al menos un caracter especial',
  },
};
//   "idCedula": "0023456"
//   "Maria Elena Cardenas Ruiz
const verifyCedula = async (cedula, nombreForm) => {
  console.log(!!nombreForm[0])
  if (!!nombreForm[0] && !!nombreForm[1]) {
    let data = await cedulaNumber(cedula);
    const [nombre, paterno, materno] = nombreForm.map(value => value ? removeAcents(value).toUpperCase() : false);
    return (materno) ? ((nombre == data.nombre && paterno == data.paterno && materno == data.materno) ? true : 'Los datos de la cedula no coinciden')
                     : ((nombre == data.nombre && paterno == data.paterno) ? true : 'Los datos de la cedula no coinciden');
  } else {
    return 'Falta llenar datos';
  }
};

const removeAcents = str => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export {
  removeAcents, 
  EMAIL_REGEX, 
  pswrd_rules, 
  verifyCedula
}

