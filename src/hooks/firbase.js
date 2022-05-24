import {useEffect} from 'react';
import auth from '@react-native-firebase/auth';

export const useAuthChecker = navigation => {
  
  const onAuthStateChanged = user => {
    console.log(user);
    if (user){
      user.emailVerified ?
      navigation.navigate('Main', {screen: 'Profile'}):
      navigation.navigate('Verify')
      ;
    }   
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
};
