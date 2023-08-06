import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

const ItemScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    })
    return (
        <SafeAreaView className="flex-1 bg-white relative px-4 py-6">

            <View className="relative bg-white shadow-lg">
                <Image
                    source={{ uri: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80" }}
                    className="w-full h-72 rounded-2xl object-cover"
                />

                <View className="absolute flex-row inset-x-0 top-5 justify-between px-5">
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Discover")}
                        className="w-10 h-10 rounded-md items-center justify-center bg-white">
                        <Ionicons name="caret-back-outline" size={30} color="#06B2BE" />
                    </TouchableOpacity>
                    <TouchableOpacity

                        className="w-10 h-10 rounded-md items-center justify-center bg-white">
                        <FontAwesome name="comment" size={25} color="#06B2BE" />
                    </TouchableOpacity>
                </View>
                <View className="absolute flex-row inset-x-0 bottom-5 justify-between px-5">
                    <View className="flex-row items-center">
                        <Text className="font-bold text-[#fbfafa]">Price Range: </Text>
                        <Text className="text-[23px] font-bold text-[#fbfafa]">$20-$99</Text>
                    </View>
                    <View className="px-2 py-1 rounded-md bg-teal-200">
                        <Text className="font-bold text-[#090909]">
                            Open Now
                        </Text>
                    </View>
                </View>
            </View>
            <ScrollView>

                <View className="mt-6">
                    <Text className="text-[#428288] text-[26px] px-2">
                        Résidence Charles Floquet
                    </Text>
                    <View className="ml-3 mt-2 flex-row items-center space-x-1">
                        <Ionicons name="location-sharp" size={18} color="#e64e4e" />
                        <Text className="text-[#428288] text-[17px] font-bold">
                            Paris, France
                        </Text>
                    </View>
                </View>

                <View className=" items-center mt-3">
                    <Text className="text-[#999a9a]">
                        Located in the heart of Paris, Résidence Charles Floquet is 50 metres from the Eiffel Tower and a 20-minute walk from the Army Museum. Set in a renovated, historic building, it offers large, self-catering accommodation with views over the Eiffel Tower.
                    </Text>
                </View>
                <View className="w-100 h-200 bg-[#d0d1d0] rounded-md mt-2">
                    <View className="flex-row mt-3 px-4 space-x-2 items-center">
                        <FontAwesome name="phone" size={25} color="#428288" />
                        <Text className="text-[16px] text-[#428288]">+33 1 44 38 56 10 </Text>
                    </View>
                    <View className="flex-row mt-1 px-4 space-x-2 items-center">
                        <MaterialIcons name="email" size={25} color="#428288" />
                        <Text className="text-[16px] text-[#428288]">h7229@accor.com</Text>
                    </View>
                    <View className="flex-row mt-1 px-4 space-x-2 items-center mr-4 mb-3">
                        <Ionicons name="location" size={25} color="#428288" />
                        <Text className="text-[16px] text-[#428288]"> 18, avenue de Suffren, Entrée au 22 rue Jean Rey
                            75015 PARIS,
                            FRANCE</Text>
                    </View>
                </View>
                <View className="flex-row mt-3 items-center justify-center space-x-3">
                    <TouchableOpacity className="bg-[#e8ab9e] rounded-3xl px-3 py-2 flex-row space-x-1">
                        <Foundation name="web" size={22} color="black" />
                        <Text className="text-[15px]">Website</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-[#e8ab9e] rounded-3xl px-3 py-2 flex-row space-x-1">
                        <FontAwesome name="file-photo-o" size={22} color="black" />
                        <Text className="text-[15px]">Photos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-[#e8ab9e] rounded-3xl px-3 py-2 flex-row space-x-1">
                        <MaterialIcons name="rate-review" size={22} color="black" />
                        <Text className="text-[15px]">Reviews</Text>
                    </TouchableOpacity>
                </View>
                <View className="mt-3">
                    <TouchableOpacity className="w-100 bg-[#48b4be] rounded-lg items-center">
                        <Text className="text-[#ffffff] font-bold mt-5 mb-5 text-[17px]">BOOK NOW</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default ItemScreen

