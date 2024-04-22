import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export function List() {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={()=> navigation.navigate('Conversa')}>
            <View className="flex flex-row items-center justify-between">

                <Image
                    src="https://github.com/carlosdavid0.png"
                    className="h-14 w-14 rounded-full"
                />

                <View className="flex justify-center px-4 py-1  w-[70%]">
                    <Text className="text-black font-semibold text-xl">
                        Carlos David
                    </Text>

                    <Text className="text-black/60 font-normal text-sm" numberOfLines={2}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>
                </View>

                <View className="flex-1 flex items-center justify-center space-y-2">
                    <Text className="text-black text-sm">
                        12:00
                    </Text>
                    <View className="h-6">
                        <View className="bg-green-600 rounded-full w-6 h-6 flex items-center justify-center content-center" >
                            <Text className="text-white text-xs ">
                                10
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

        </TouchableOpacity>
    )
}