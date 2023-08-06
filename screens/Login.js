import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const Login = () => {
    const navigation = useNavigation();
    return (
        <View className='flex-1 justify-center items-center bg-blue-500'>
            <View className='w-4/5 p-8 bg-white rounded-lg'>
                <View className="items-center">

                    <Text className="font-bold text-[40px] mb-10">Login</Text>
                </View>
                <View className='flex-row mb-6 border border-gray-400 rounded-md py-2'>
                    <View className="flex-row ml-2 space-x-2  items-center">

                        <Ionicons name="person" size={24} color="black" />
                        <TextInput

                            placeholder="Username"
                        />
                    </View>
                </View>
                <View className=" flex-row mb-6 border border-gray-400 rounded-md py-2">
                    <View className=" flex-row ml-2 space-x-2  items-center">

                        <FontAwesome name="lock" size={24} color="black" />

                        <TextInput

                            placeholder="Password"
                            secureTextEntry
                        />
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => { navigation.navigate("Discover") }}
                    className="bg-blue-500 rounded-lg py-2 items-center justify-center"
                >
                    <Text className='text-white font-semibold text-lg'>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity className="mt-2 items-center">
                    <Text className="font-bold text-[#386ec3]">Create an account</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({})