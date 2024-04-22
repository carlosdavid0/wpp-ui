import { Entypo, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import clsx from "clsx";
import { Dimensions, Image, Platform, Text, TouchableOpacity, View } from "react-native";
import { getStatusBarHeight, } from 'react-native-status-bar-height';

export function HeaderTalk() {
    const { canGoBack, goBack } = useNavigation()
    return (

        <View
            style={{
                paddingTop: Platform.OS === 'android' ? getStatusBarHeight() + 10 : Dimensions.get('window').height * 0.07,
            }}
            className={clsx(
                `w-full items-start  px-2  py-4 justify-center bg-white`,

            )}>
            <View className="flex flex-row items-center justify-between w-full">
                <View className="flex flex-row items-center gap-5">
                    <TouchableOpacity className="flex items-center flex-row" onPress={() => canGoBack() && goBack()}>
                        <Entypo name="chevron-left" size={28} color="black" />
                        <Text className="text-lg">
                            10
                        </Text>
                    </TouchableOpacity>

                    <View className="flex items-center justify-between flex-row">
                        <View className="flex items-center flex-row">
                            <Image
                                src="http://github.com/carlosdavid0.png"
                                className="h-9 w-9 rounded-full"
                            />
                            <View className="flex flex-col pl-3">
                                <Text className="text-black font-semibold text-lg">
                                    Carlos David
                                </Text>

                            </View>
                        </View>
                    </View>
                </View>
                <View className="flex items-center flex-row gap-5">
                    <TouchableOpacity>
                        <Feather name="video" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name="phone" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>



        </View>
    )
}