import { SplashScreen } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native";

export default function Page() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 1000);
  }, []);

  return (
    <SafeAreaView>
      {isReady ? (
        <View className="grid grid-cols-2">
          <View className="bg-green-400 h-full w-full">
            <Text>Test here</Text>
          </View>
        </View>
      ): (
        <SplashScreen />
      )
      }


    </SafeAreaView>
  );
}

