import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
// import { FIREBASE_AUTH } from '../../firebaseConfig';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';

const Register = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth();

    const handleSubmit = () =>{
        auth.createUserWithEmailAndPassword(auth, email, password).then(userCredential => {

        }).catch(error => {
            // alert('he')
        })
        // alert(email)
    }
  return (
    <View className="px-2 flex flex-col">
        <View className="flex flex-col">
            <Text className="text-lg">Name</Text>
            <TextInput 
                className="w-full h-12 border-2 border-neutral-500 placeholder:text-black placeholder:text-lg rounded-lg text-xl px-2"
                value={name}
                onChangeText={(text) => setName(text)}
            />
        </View>

        <View className="flex flex-col mt-2">
            <Text className="text-lg">Email</Text>
            <TextInput 
                className="w-full h-12 border-2 border-neutral-500 placeholder:text-black placeholder:text-lg rounded-lg text-xl px-2"
                value={email}
                onChangeText={(text) => setEmail(text)}
                keyboardType='email-address'
                secureTextEntry={false}
            />
        </View>

        <View className="flex flex-col mt-2">
            <Text className="text-lg">Password</Text>
            <TextInput 
                className="w-full h-12 border-2 border-neutral-500 placeholder:text-black placeholder:text-lg rounded-lg text-xl px-2"
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

export default Register