import { SplashScreen, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import Welcome from "../components/Welcome";

export default function Page() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 1000);
  }, []);

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

