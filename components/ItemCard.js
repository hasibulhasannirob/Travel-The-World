import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ItemCard = ({ imageSrc, title, location }) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("ItemScreen")}
            className="rounded-md border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[150px] my-2">
            <Image
                source={{ uri: imageSrc }}
                className="w-full h-36 rounded-md object-cover"
            />


            <Text className="text-[#428288] text-[17px] px-2">
                {title?.length > 16 ? `${title.slice(0, 11)} ...` : title}
            </Text>

            <View className="flex-row items-center space-x-1">
                <Ionicons name="location-sharp" size={18} color="#e64e4e" />
                <Text className="text-[#428288] text-[15px] font-bold">
                    {/* {location?.length > 18 ? `${location.slice(0, 20)}...` : location} */}
                    {location}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default ItemCard

