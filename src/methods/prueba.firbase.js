import firestore from '@react-native-firebase/firestore'
import {firbaseMethods} from '../methods/firbase.method';

const tryValidate = data => {
  // firbaseMethods.signInWithNameEmailAndPassword('_', data)
  // console.log(data);
  const infoPrueba = {
    Cedula_1: '0023456',
    Cedula_2: '0023457',
    Cedula_3: '0023459',
    confirmPswrd: 'Katara?123456',
    email: 'x@gmail.com',
    firstName: 'cardenas',
    pswrd: 'Katara?123456',
    secondName: 'ruiz',
    userName: 'Maria elena',
  };
  
  const cedulas = () => Object.keys(infoPrueba).filter(val => val.match(/Cedula_/)).map((item)=> infoPrueba[item]);
  
  console.log(Object.keys(infoPrueba).filter(val => val.match(/Cedula_/)).map((item)=> infoPrueba[item]));
};

export const saveName = () => {
    firestore().collection('users').get().then((response)=>{
        console.log(response.docs[0].data())
    }).catch(e => console.log(e))
}



