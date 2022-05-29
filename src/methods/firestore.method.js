import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const firestoreMethods = {
  loadData: (imagen, nombre, data) => {
    const uid = auth().currentUser.uid;
    const {ubicacion, modalidad, precio, telefono, descripcion} = data;
    firestore()
      .collection('CardsPro')
      .doc(uid)
      .get()
      .then(response => {
        if (!response.exists) {
          firestore().collection('CardsPro').doc(uid).set({
            imagen: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
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
            imagen: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
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
  getProCards: async () => {
    return await firestore()
      .collection('CardsPro')
      .get()
      .then(querySnapshot => {
        let proCardList = [];
        querySnapshot.forEach(documentSnapshot => {
          proCardList.push(documentSnapshot.data());
        });
        return proCardList;
      }).catch(console.log);
  },
};
