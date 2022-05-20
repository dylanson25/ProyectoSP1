import {useEffect} from 'react';
import auth from '@react-native-firebase/auth';

export const useAuthChecker = navigation => {
  const onAuthStateChanged = (user) =>
    user && navigation.navigate('Profile');

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
};

export const useAuthVerify = navigation => {
  const onAuthStateChanged = ({emailVerified}) => {
    console.log(emailVerified)
    emailVerified && navigation.navigate('Profile');
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
};
