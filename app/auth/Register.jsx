import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { FIREBASE_AUTH } from '../../firebaseConfig';
import {createUserWithEmailAndPassword } from "firebase/auth";
import Toast from 'react-native-root-toast';
import { useRouter } from 'expo-router';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const auth = FIREBASE_AUTH;

    const handleSubmit = () =>{
        if(!email || !password){
            return Toast.show('All field is required', {
                position:Toast.positions.CENTER,
                animation:true,
                duration: Toast.durations.LONG,
            });
        }
        else if(password.length < 6){
            return Toast.show('Password is too short', {
                position:Toast.positions.CENTER,
                animation:true,
                duration: Toast.durations.LONG,
            });
        }

        // authenticate
        createUserWithEmailAndPassword(auth, email, password).then(userCredential => {
            Toast.show('Login success', {
                position:Toast.positions.CENTER,
                animation:true,
                duration: Toast.durations.LONG,
            });

            router.push('/dashboard');
        }).catch(error => {
            let errorMessage = '';

            // Customize error messages for specific Firebase errors
            switch (error.code) {
                case 'auth/invalid-email':
                    errorMessage = 'Invalid email address';
                    break;
                case 'auth/user-disabled':
                    errorMessage = 'Your account has been disabled';
                    break;
                case 'auth/user-not-found':
                    errorMessage = 'Invalid credentials';
                    break;
                case 'auth/wrong-password':
                    errorMessage = 'Incorrect password';
                    break;
                case 'auth/email-already-in-use':
                    errorMessage = 'Email already in use';
                    break;
                default:
                    errorMessage = 'An error occurred. Please try again later.';
                    break;
            }

            Toast.show(errorMessage, {
                position:Toast.positions.CENTER,
                animation:true,
                duration: Toast.durations.LONG,
            });
        })
    }

  return (
    <View className="px-2 flex flex-col">
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
                <Text className="mx-auto text-white font-bold text-xl">REGISTER</Text>
            </TouchableOpacity>
        </View>
        
      
    </View>
    
  )
}

export default Register