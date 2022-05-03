import firestore from '@react-native-firebase/firestore'
import {firbaseMethods} from '../methods/firbase.method';

const tryValidate = data => {
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
firbaseMethods.signInWithNameEmailAndPassword('_', infoPrueba)
};

export const saveName = () => {
    firestore().collection('users').get().then((response)=>{
        console.log(response.docs[0].data())
    }).catch(e => console.log(e))
}



