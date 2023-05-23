import { Image, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';


export const HeaderLeft = () => {
    return (  
        <TouchableOpacity>
            <Ionicons name="menu" size={35} color='gray' />
        </TouchableOpacity>
    );
}

export const HeaderRight = () => {
    return (  
        <TouchableOpacity>
            <Image source={require('../../assets/images/icons/avatar.png')} className="w-10 h-10 rounded-full" />
        </TouchableOpacity>
    );
}
