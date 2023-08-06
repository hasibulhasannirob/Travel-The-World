import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native";
import { Avatar } from '../assets';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const ProfileScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);


    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="items-center mt-16">
                <Text className="text-[#ffffff] text-[15px] font-semibold">Profile</Text>
            </View>

            <View className="flex-row mt-11 ml-6 space-x-3">
                <View className="w-16 h-16 border-gray-400 rounded-md items-center justify-center">
                    <Image
                        source={Avatar}
                        className="w-full h-full rounded-full object-cover"
                    />
                </View>
                <View>
                    <Text className="text-[#ffffff] text-[20px] font-semibold">User</Text>
                    <Text className="text-[#c9c9c9] text-[12px] ">Joined in 2023</Text>
                    <Text className="text-[#c9c9c9] text-[12px] ">0 Contributions</Text>
                </View>
            </View>

            <View className="mt-9 px-6">
                <Text className="text-[#949292] text-[15px] ">Share a little about yourself so other travelers can get to know you.</Text>
            </View>

            <View className="mt-8 space-y-2 ml-5">
                <View className="flex-row items-center space-x-2">
                    <Ionicons name="location-outline" size={18} color="white" />
                    <Text className="text-[#ffffff] text-[14px]">Dhaka, Bangladesh</Text>
                </View>
                <View className="flex-row items-center space-x-2">
                    <AntDesign name="link" size={18} color="white" />
                    <Text className="text-[#ffffff] text-[14px]">No website added</Text>
                </View>
            </View>

            <View className="mt-5 px-10">
                <Text className="text-[#636262]">----------------------------------------------------------------------</Text>
            </View>

            <View className="mt-6">
                <View className="ml-7">
                    <Text className="text-[#ffffff] text-[22px] font-bold">0 Photos</Text>
                </View>
                <View className="ml-24 mt-16 mb-16">
                    <Text className="text-[#919090] text-[14px]"> You have no photos yet</Text>
                </View>
                <TouchableOpacity className="items-center justify-center">
                    <Text className="text-[#ffffff] text-[16px] font-semibold">Upload a photo</Text>
                </TouchableOpacity>
            </View>

            <View className="mt-5 px-10">
                <Text className="text-[#636262]">----------------------------------------------------------------------</Text>
            </View>

            <TouchableOpacity
                onPress={() => { navigation.navigate("Login") }}
                className=" mt-5 items-center justify-center">
                <Text className="text-[#f34343] text-[16px] font-semibold">Logout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default ProfileScreen

