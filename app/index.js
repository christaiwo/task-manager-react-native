import { SplashScreen, Stack, useFocusEffect, useRouter } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import Welcome from "../components/Welcome";
import {onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from '../firebaseConfig';


export default function Page() {
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();
  const auth = FIREBASE_AUTH;

  const checkAuthState = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/dashboard');
      }
    });
  };


  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 1000);
  }, []);

  
  useFocusEffect(
    useCallback(() => {
      checkAuthState();

      // Clean up the listener when the component unmounts
      return () => {};
    }, [])
  );

  return (
    <SafeAreaView className="bg-blend-normal">
      {isReady ? (
        <>
          <Stack.Screen options={{  
            headerShown:false
          }}/>
          <Welcome />
        </>
      ): (
        <SplashScreen />
      )
      }
    </SafeAreaView>
  );
}

