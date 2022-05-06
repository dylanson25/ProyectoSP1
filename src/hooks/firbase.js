import { useEffect } from "react";
import auth from '@react-native-firebase/auth';

export const useAuthChecker = navigation => {
    const onAuthStateChanged = user => {
      if (user) {
        navigation.navigate('Profile');
      }
    };
  
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber;
    }, []);
  };