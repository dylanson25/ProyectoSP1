import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const firbaseMethods = {
  signInWithNameEmailAndPassword: (navigation, data) => {
    return new Promise((resolve, reject) => {
      auth()
        .createUserWithEmailAndPassword(data.email, data.pswrd)
        .then(({user}) => {
          user
            .updateProfile({displayName: 'name'}) //revisar
            .then(
              () => resolve('User created & signed in'),
              createAditionalData(data),
            )
            .catch(error => {
              if (error.code === 'auth/email-already-in-use') {
                reject('That email address is already in use!');
              }
            });
        });
    });
  },
  logInWithEmailAndPassword: (email, password, navigation) => {
    return new Promise((resolve, reject) => {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          resolve('User signed in!');
          navigation.navigate('Home');
        })
        .catch(error => {
          if (error.code === 'auth/wrong-password') {
            reject('Wrong email/password');
          } else if (error.code === 'auth/invalid-email') {
            reject('That email address is invalid!');
          } else if (error.code === 'auth/user-not-found') {
            reject('User not found');
          }
        });
    });
  },
};

const getDataCedulas = data =>
  Object.keys(data)
    .filter(val => val.match(/Cedula_/))
    .map(item => data[item]);
    
const informationData = (doc, data) => {
  const {email, userName, firstName, secondName} = data;
  if (doc === 'CommonUser') {
    return {
      Nombres: userName || auth().currentUser.displayName,
      Email: email || auth().currentUser.email,
      PrimerApellido: firstName,
      SegundoApellido: secondName,
    };
  } else {
    return {
      Nombres: userName || auth().currentUser.displayName,
      Email: email || auth().currentUser.email,
      PrimerApellido: firstName,
      SegundoApellido: secondName,
      Cedulas: getDataCedulas(data),
    };
  }
};

const createAditionalData = data => {
  const document = data.Cedula_1 ? 'ProfessionalUser' : 'CommonUser';
  firestore()
    .collection(document)
    .doc(auth().currentUser.uid)
    .get()
    .then(response => {
      if (!response.exists) {
        firestore()
          .collection(document)
          .doc(auth().currentUser.uid)
          .set(informationData(document, data));
      }
    });
};
