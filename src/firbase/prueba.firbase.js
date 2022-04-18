import firestore from '@react-native-firebase/firestore'

export const saveName = () => {
    firestore().collection('users').get().then((response)=>{
        console.log(response.docs[0].data())
    }).catch(e => console.log(e))
}



