import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';

export const firbaseMethods = {
  signInWithNameEmailAndPassword: (navigation, data) => {
    return new Promise((resolve, reject) => {
      auth()
        .createUserWithEmailAndPassword(data.email, data.pswrd)
        .then(({user}) => {
          user
            .updateProfile({displayName: data.userName})
            .then(
              () => resolve('User created & signed in'),
              createAditionalData(data),
              verifyUser(navigation),
            )
        }).catch(error => {
          
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('El correo ya esta en uso');
            reject('That email address is already in use!');
          } else if (error.code === 'auth/invalid-email') {
            Alert.alert('El correo no es valido');
            reject('That email address is invalid!');
          }
        });
    });
  },
  logInWithEmailAndPassword: (email, pswrd, navigation) => {
    return new Promise((resolve, reject) => {
      auth()
        .signInWithEmailAndPassword(email, pswrd)
        .then(({user: {emailVerified}}) => {
          if (emailVerified) {
            resolve('User signed in!');
          } else {
            resolve('Email user is not verify!');
            verifyUser(navigation);
          }
        })
        .catch(error => {
          if (error.code === 'auth/wrong-password') {
            Alert.alert('La contraseña y el correo no coinciden');
            reject('Wrong email/password');
          } else if (error.code === 'auth/invalid-email') {
            Alert.alert('El correo no es valido');
            reject('That email address is invalid!');
          } else if (error.code === 'auth/user-not-found') {
            Alert.alert('El correo no esta registrado');
            reject('User not found');
          }
        });
    });
  },
  LogOut: navigation => {
    auth().signOut().then(navigation.push('Login'));
  },
  getProfile: async () => {
    return await firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          return documentSnapshot.data();
        }
      })
      .catch(console.log);
  },
  getType: async uid => {
    return await firestore()
      .collection('users')
      .doc(uid)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          return documentSnapshot.data().type;
        }
      })
      .catch(console.log);
  },
  resetPasword: () => {
    const user = auth().currentUser;
    auth()
      .sendPasswordResetEmail(user.email)
      .then(response => {
        //send mail
      })
      .catch(err => {
        console.log('reser pasword ' + err);
      });
  },
  resetEmail: (navigation, newEmail) => {
    const user = auth().currentUser;
    user
      .updateEmail(newEmail)
      .then(() => {
        verifyUser(navigation);
      })
      .catch(err => console.log(`Cambio fallido ${err}`));
  },
};

const verifyUser = navigation => {
  const user = auth().currentUser;
  user
    .sendEmailVerification()
    .then(() => {
      navigation.push('Verify');
    })
    .catch(error => {
      console.log(error);
    });
};

const getDataCedulas = data =>
  Object.keys(data)
    .filter(val => val.match(/Cedula_/))
    .map(item => data[item]);

const informationData = (doc, data) => {
  const {email, userName, firstName, secondName} = data;
  if (doc === 'CommonUser') {
    return {
      type: false,
      Nombres: userName || auth().currentUser.displayName,
      Email: email || auth().currentUser.email,
      PrimerApellido: firstName,
      SegundoApellido: secondName,
    };
  } else {
    return {
      type: true,
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
