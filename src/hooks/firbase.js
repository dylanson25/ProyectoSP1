import {useEffect} from 'react';
import auth from '@react-native-firebase/auth';

export const useAuthChecker = navigation => {
  const onAuthStateChanged = (user) => {
    user && user.emailVerified && navigation.navigate('Profile') 
    console.log('Recargado')
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
};


