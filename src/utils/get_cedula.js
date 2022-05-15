import axios from 'axios';
import { removeAcents } from './validation_function';

const baseURL = 'https://cedulaprofesional.sep.gob.mx/cedula/buscaCedulaJson.action?';
const cedulaNumber = async cedula => {
  try {
    const {
      data: { items: [ { anioreg, desins, idCedula, materno, nombre, paterno, sexo, tipo, titulo, }]},
    } = await axios({
      method: 'GET',
      url: `${baseURL}json={"maxResult":"10","nombre":"","paterno":"","materno":"","idCedula":"${cedula}"}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      },
    });
    return { anioreg, desins, idCedula, materno: removeAcents(materno), nombre: removeAcents(nombre), paterno: removeAcents(paterno), Genero: sexo == 1 ? 'Masculino' : 'Femenino', tipo, titulo, };
  } catch (e) {
    return false;
  }
};
const cedulaPrueba = async (cedula, nivel) => {
  try {
    const {
      data: { items },
    } = await axios({
      method: 'GET',
      url: `${baseURL}json={"maxResult":"10","nombre":"","paterno":"","materno":"","idCedula":"${cedula}"}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      },
    });

    return (nivel == items[0].tipo ? items[0] : items[1]) 
  } catch (e) {
    return false;
  }
};
export {cedulaNumber, cedulaPrueba};
