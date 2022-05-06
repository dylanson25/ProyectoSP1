import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const firbaseMethods = {
  signInWithNameEmailAndPassword: (navigation, data) => {
    return new Promise((resolve, reject) => {
      auth()
        .createUserWithEmailAndPassword(data.email, data.pswrd)
        .then(({user}) => {
          user
            .updateProfile({displayName: data.Nombres}) 
            .then(
              () => resolve('User created & signed in'),
              createAditionalData(data),
              navigation.navigate('Profile'),
            )
            .catch(error => {
              if (error.code === 'auth/email-already-in-use') {
                reject('That email address is already in use!');
              }
            });
        });
    });
  },
  logInWithEmailAndPassword: (email, pswrd, navigation) => {
    return new Promise((resolve, reject) => {
      auth()
        .signInWithEmailAndPassword(email, pswrd)
        .then(() => {
          resolve('User signed in!');
          navigation.navigate('Profile');
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
  LogOut: navigation => {
    auth().signOut().then(navigation.navigate('Login'));
  },
  getProfile: () => {
    return firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          return documentSnapshot.data();
        }
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
      type: 'CommonUser',
      Nombres: userName || auth().currentUser.displayName,
      Email: email || auth().currentUser.email,
      PrimerApellido: firstName,
      SegundoApellido: secondName,
    };
  } else {
    return {
      type: 'ProfessionalUser',
      Nombres: userName || auth().currentUser.displayName,
      Email: email || auth().currentUser.email,
      PrimerApellido: firstName,
      SegundoApellido: secondName,
      Cedulas: getDataCedulas(data),
    };
  }
};

const createAditionalData = data => {
  firestore()
    .collection('users')
    .doc(auth().currentUser.uid)
    .get()
    .then(response => {
      if (!response.exists) {
        firestore()
          .collection('users')
          .doc(auth().currentUser.uid)
          .set(
            informationData(
              data.Cedula_1 ? 'ProfessionalUser' : 'CommonUser',
              data,
            ),
          );
      }
    });
};
