import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const firestoreMethods = {
  loadData: (imagen, nombre,data) => {
    const uid = auth().currentUser.uid;
    const {ubicacion, modalidad, precio, telefono, descripcion} = data;
    firestore()
      .collection('CardsPro')
      .doc(uid)
      .get()
      .then(response => {
        if (!response.exists) {
          firestore().collection('CardsPro').doc(uid).set({
            imagen: imagen,
            nombre: nombre,
            descripcion: descripcion,
            ubicacion: ubicacion,
            modalidad: modalidad,
            precio: precio,
            telefono: telefono,
            uid: uid,
          });
        } else {
          firestore().collection('CardsPro').doc(uid).update({
            imagen: imagen,
            nombre: nombre,
            descripcion: descripcion,
            ubicacion: ubicacion,
            modalidad: modalidad,
            precio: precio,
            telefono: telefono,
            uid: uid,
          });
        }
      })
      .catch(err => console.log(`error de carga ${err}`));
  },
};
