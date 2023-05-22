import { Text, View } from "react-native";
import { SafeAreaView } from "react-native";

export default function Page() {
  return (
    <SafeAreaView>
      <Text className="text-red-500 text-2xl">Hello</Text>

      <View className="grid grid-cols-2">
        <View className="bg-green-400 h-full w-full">

        </View>
      </View>
    </SafeAreaView>
  );
}

