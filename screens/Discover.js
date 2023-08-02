import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from "@react-navigation/native";
import { Attractions, Avatar, Hotels, Restaurants } from '../assets';
import MenuContainer from '../components/MenuContainer';
import { Entypo } from '@expo/vector-icons';
import ItemCard from '../components/ItemCard';


const Discover = () => {

    const navigation = useNavigation();
    const [type, setType] = useState("restaurants");

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView className="flex-1 relative">
            {/* First View */}
            <View className="flex-row items-center justify-between px-8 mt-10">
                <View>
                    <Text className="text-[40px] text-[#0B646B] font-bold">Explore</Text>
                    <Text className="text-[31px] text-[#527283]">Everything from today</Text>
                </View>

                <View className="w-14 h-14 border-gray-400 rounded-md items-center justify-center shadow-2xl">
                    <Image
                        source={Avatar}
                        className="w-full h-full rounded-md object-cover"
                    />
                </View>
            </View>
            {/* Search Area */}

            <View className="flex-row items-center bg-white mt-3 mx-4 rounded-xl py-0 px-4 shadow-2xl">
                <GooglePlacesAutocomplete
                    GooglePlacesDetailsQuery={{ fields: "geometry" }}
                    placeholder="Search"
                    fetchDetails={true}
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(details?.geometry?.viewport);
                    }}
                    query={{
                        key: "AIzaSyD1iz7AxIQoSXORO41hB2JH-JR_9_qFKg0",
                        language: "en",
                    }}
                />
            </View>

            {/* Menu Container */}
            <ScrollView>
                <View className="flex-row items-center justify-between px-8 mt-8">
                    <MenuContainer
                        key={"hotel"}
                        title="Hotels"
                        imageSrc={Hotels}
                        type={type}
                        setType={setType}
                    />
                    <MenuContainer
                        key={"attractions"}
                        title="Attractions"
                        imageSrc={Attractions}
                        type={type}
                        setType={setType}
                    />
                    <MenuContainer
                        key={"restaurants"}
                        title="Restaurants"
                        imageSrc={Restaurants}
                        type={type}
                        setType={setType}
                    />
                </View>

                <View>
                    <View className="flex-row items-center justify-between px-6 mt-8">
                        <Text className="text-[#2C7379] text-[24px] font-bold ">Top Tips</Text>
                        <TouchableOpacity className="flex-row items-center justify-center space-x-1">
                            <Text className="text-[#76aaaf] text-[17px] font-bold">Explore more</Text>
                            <Entypo name="arrow-right" size={25} color="#76aaaf" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View className="px-4 mt-4 flex-row items-center justify-evenly flex-wrap">
                    <ItemCard
                        key={"101"}
                        imageSrc={"https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80"}
                        title="The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France."
                        location="Eiffel Tower, Paris, France"
                    />
                    <ItemCard
                        key={"102"}
                        imageSrc={"https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"}
                        title="Tower Bridge is a Grade I listed combined bascule and suspension bridge in London."
                        location="Tower Bridge, London"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Discover

