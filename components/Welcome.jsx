import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';

const Welcome = () => {
    const router = useRouter();
    return (
      <>
        <View>
          <ScrollView
            horizontal={true}
            scrollEventThrottle={16}
            pagingEnabled={true}
          >
            <View className="w-screen px-2" >
               <View className="flex flex-col h-full justify-evenly items-center">
                    <Image source={require('../assets/images/onboarding/1.png')}  />
                    <View className="flex flex-col gap-5">
                        <Text className="text-4xl text-center">Enjoy Your Time</Text>
                        <Text className="text-2xl text-neutral-300 text-center">when you are confused about managing your task come to us</Text>
                        <View className="flex flex-row gap-4 items-center justify-center">
                            <View className="bg-black h-4 w-4 rounded-full"></View>
                            <View className="bg-black h-3 w-3 rounded-full"></View>
                            <View className="bg-black h-2 w-2 rounded-full"></View>
                        </View>
                    </View>
               </View>
            </View>
            <View className="w-screen px-2" >
               <View className="flex flex-col h-full justify-evenly items-center">
                    <Image source={require('../assets/images/onboarding/2.png')} resizeMode='cover' className="w-full"  />
                    <View className="flex flex-col gap-5">
                        <Text className="text-4xl text-center ">Manage your task and ideas quickly</Text>
                        <View className="flex flex-row gap-4 items-center justify-center">
                            <View className="bg-black h-2 w-2 rounded-full"></View>
                            <View className="bg-black h-4 w-4 rounded-full"></View>
                            <View className="bg-black h-2 w-2 rounded-full"></View>
                        </View>
                    </View>
               </View>
            </View>
            <View className="w-screen px-2" >
               <View className="flex flex-col h-full justify-evenly items-center">
                    <Image source={require('../assets/images/onboarding/3.png')} resizeMode='cover' className="w-full rounded-t-md"  />
                    <View className="flex flex-col gap-5 ">
                        <Text className="text-4xl text-center ">Manage your task and ideas quickly</Text>
                        <View className="flex flex-row gap-4 items-center justify-center">
                            <View className="bg-black h-2 w-2 rounded-full"></View>
                            <View className="bg-black h-3 w-3 rounded-full"></View>
                            <View className="bg-black h-4 w-4 rounded-full"></View>
                        </View>
                        <TouchableOpacity className="bg-blue-500 py-3 rounded-lg" onPress={() => router.push('/auth')}>
                            <Text className="mx-auto text-white font-bold text-xl">Get Stated</Text>
                        </TouchableOpacity>
                    </View>
               </View>
            </View>
          </ScrollView>
        </View>
      </>
    );
}

export default Welcome