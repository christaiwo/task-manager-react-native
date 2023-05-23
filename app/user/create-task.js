import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Stack, useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';


const HeaderLeft = () => {
    const router = useRouter();
    return (
        <TouchableOpacity onPress={() => router.back()} >
            <Ionicons name="chevron-back-outline" size={30} color="black" />
        </TouchableOpacity>
    )
}

const CreateTask = () => {
    return (
    <SafeAreaView>
        <Stack.Screen options={{  
            headerTitle: "Create Task",
            headerLeft: () => (<HeaderLeft/>),
        }} />

        <ScrollView className="px-2">
            <View className="flex flex-col">
                <Text className="text-lg">Email</Text>
                <TextInput 
                    className="w-full h-12 bg-gray-200 rounded-lg text-2xl px-2"
                    // value={email}
                    // onChangeText={(text) => setEmail(text)}
                    keyboardType='email-address'
                    secureTextEntry={false}
                />
            </View>

            <View className="flex flex-col mt-5">
                <Text className="text-lg">Date</Text>
                <TextInput 
                    className="w-full h-12 bg-gray-200 rounded-lg text-2xl px-2"
                    // value={email}
                    // onChangeText={(text) => setEmail(text)}
                    keyboardType='email-address'
                    secureTextEntry={false}
                />
            </View>

        </ScrollView>
    </SafeAreaView>
  )
}

export default CreateTask