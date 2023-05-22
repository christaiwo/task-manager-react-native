import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () =>{
        alert(email)
    }
  return (
    <View className="px-2 flex flex-col">
        <View className="flex flex-col">
            <Text className="text-lg">Email</Text>
            <TextInput 
                className="w-full h-12 border-2 border-neutral-500 placeholder:text-black placeholder:text-lg rounded-lg text-2xl px-2"
                value={email}
                onChangeText={(text) => setEmail(text)}
                keyboardType='email-address'
                secureTextEntry={false}
            />
        </View>

        <View className="flex flex-col mt-5">
            <Text className="text-lg">Password</Text>
            <TextInput 
                className="w-full h-12 border-2 border-neutral-500 placeholder:text-black placeholder:text-lg rounded-lg text-2xl px-2"
                value={password}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
            />
        </View>

        <View className="mt-10">
            <TouchableOpacity className="bg-blue-500 py-3 rounded-lg" onPress={handleSubmit}>
                <Text className="mx-auto text-white font-bold text-xl">LOG IN</Text>
            </TouchableOpacity>
        </View>
        
      
    </View>
    
  )
}

export default Login