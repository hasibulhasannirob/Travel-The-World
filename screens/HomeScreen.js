import {
    SafeAreaView,
    Text,
    View,
    Image,
    TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";
import { HeroImage } from "../assets";

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    return (
        <SafeAreaView className="bg-white flex-1 relative">
            {/* First Section */}
            <View className="flex-row px-7 mt-14 items-center space-x-2">
                <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
                    <Text className="text-[#00BCC9] text-3xl font-semibold">Go</Text>
                </View>
                <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
            </View>

            {/* Second Section */}
            <View className="px-7 mt-6 space-y-3">
                <Text className="text-[#3C6072] text-[37px]">Enjoy the trip with</Text>
                <Text className="text-[#00BCC9] text-[35px] font-bold">
                    Beautiful Moments & Memories !
                </Text>
                <Text className="text-[#3C6072] text-[14px] text-center">
                    Are you eager to embark on your next adventure but overwhelmed by the
                    hassle of planning and booking?
                </Text>
            </View>

            {/* Circle Making */}
            <View className="w-[250px] h-[250px] bg-[#00BCC9] rounded-full absolute bottom-36 left-48"></View>
            <View className="w-[250px] h-[250px] bg-[#E99265] rounded-full absolute -bottom-20 right-48"></View>

            {/* Image */}
            <View className="flex-1 relative items-center justify-center">
                <Animatable.Image
                    animation="fadeIn"
                    easing="ease-in-out"
                    source={HeroImage}
                    className="w-[300px] h-[390px] object-cover mt-5"
                />

                {/* Button */}

                <TouchableOpacity
                    onPress={() => { navigation.navigate("Discover") }}
                    className="absolute bottom-16 w-20 h-20 border-l-4 border-r-4 border-t-4 border-b-4 border-[#00BCC9] rounded-full items-center justify-center">

                    <Animatable.View
                        animation={"pulse"}
                        easing="ease-in-out"
                        iterationCount={"infinite"}
                        className="w-16 h-16 items-center justify-center rounded-full bg-[#00BCC9]">
                        <Text className="text-gray-50 text-[25px] font-semibold">Go</Text>
                    </Animatable.View>

                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
