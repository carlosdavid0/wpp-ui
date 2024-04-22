import { Entypo, Feather } from "@expo/vector-icons";
import { Header } from "components/HeaderPrincipal";
import { List } from "components/List";
import { FlatList, Keyboard, SafeAreaView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

export function Conversas() {
    return (
        <TouchableWithoutFeedback className="flex-1" onPress={Keyboard.dismiss}>
            <SafeAreaView className="flex-1">
                <Header title="Conversas" CustomHeaderOptions={() => {
                    return (
                        <View className="flex flex-row items-center justify-between">
                            <View className="flex flex-row items-center">
                                <TouchableOpacity className="h-10 w-10 rounded-full bg-black/5 flex items-center justify-center">
                                    <Text>
                                        ...
                                    </Text>
                                </TouchableOpacity>

                            </View>
                            <View className="flex flex-row items-center gap-2">
                                <TouchableOpacity className="h-10 w-10 rounded-full bg-black/5 flex items-center justify-center">
                                    <Entypo name="camera" size={18} color="black" />
                                </TouchableOpacity>
                                <TouchableOpacity className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center">
                                    <Text className="text-xl text-white">
                                        +
                                    </Text>
                                </TouchableOpacity>

                            </View>

                        </View>
                    )
                }} />

                <FlatList
                    className="px-4 my-5"
                    data={[1, 1, 1, 1, 1, 1, 1, 1, 1]}
                    stickyHeaderHiddenOnScroll={true}
                    ListHeaderComponent={() => {
                        return (
                            <View className="flex flex-row flex-1 justify-between items-center mb-5 gap-4">
                                <View className="flex-1">
                                    <TextInput
                                        placeholder="Pesquisar"
                                        className="focus:outline-none w-full h-10 px-4 rounded-full bg-black/5"
                                    />
                                </View>
                                <TouchableOpacity>
                                    <Feather name="filter" size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                    keyExtractor={(item, index) => String(index)}
                    ItemSeparatorComponent={() => {
                        return (
                            <View className="h-[1px] bg-black/5 my-2" />
                        )

                    }}
                    renderItem={() => (
                        <List />
                    )}

                />
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}