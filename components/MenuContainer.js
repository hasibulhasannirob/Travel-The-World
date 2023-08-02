import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const MenuContainer = ({ title, imageSrc, type, setType }) => {

    const handlePress = () => {
        setType(title.toLowerCase())
    }

    return (
        <TouchableOpacity className="items-center justify-center space-y-2 shadow-3xl"
            onPress={handlePress}
        >
            <View className={`w-14 h-14 p-1 items-center justify-center ${type === title.toLowerCase() ? "bg-gray-300" : ""}`}>
                <Image
                    source={imageSrc}
                    className="w-full h-full object-cotain"
                />
            </View>
            <Text className="text-[#00BCC9] text-sm font-semibold">
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default MenuContainer

