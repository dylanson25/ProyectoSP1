import {useEffect} from 'react';
import auth from '@react-native-firebase/auth';

export const useAuthChecker = navigation => {
  const onAuthStateChanged = user => user &&  navigation.navigate(user.emailVerified ? 'Profile' : 'Verify')  ;

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
};