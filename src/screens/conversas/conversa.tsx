import { Feather } from "@expo/vector-icons";
import clsx from "clsx";
import { HeaderTalk } from "components/HeaderTalk";
import React from "react";
import { Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

export function Conversa() {
    return (


        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

            <HeaderTalk />
            <SafeAreaView style={{ flex: 1 }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView style={{ padding: 4 }} className="px-2">
                        {Array.from({ length: 20 }).map((_, index) => (
                            <View key={index}
                                className={clsx(
                                    'flex flex-row items-end justify-between',
                                    (index + 1) % 2 === 0 ? 'flex-row-reverse' : 'flex-row',
                                )}
                            >
                                <View className={clsx(
                                    'my-2 rounded-lg  px-4  py-3',
                                    (index + 1) % 2 === 0 ? 'bg-green-200' : 'bg-white',
                                )}>
                                    <TouchableOpacity role="button" >
                                        <View className="flex flex-row items-end justify-between">
                                            <Text className="text-md w-[80%]">
                                                Hello World ${(index + 1) * 2}
                                                Hello World ${(index + 1) * 4}
                                                Hello World ${(index + 1) * 6}
                                                Hello World ${(index + 1) * 8}
                                                Hello World ${(index + 1) * 10}
                                                Hello World ${(index + 1) * 12}
                                            </Text>
                                            <Text className="text-xs ">
                                                {new Date().getHours() + ":" + new Date().getMinutes()}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </TouchableWithoutFeedback>
            </SafeAreaView>

            <View className="py-5" style={{ flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between", paddingHorizontal: 10, gap: 20, paddingBottom: 30 }}>
                <View style={{ flexDirection: "row", alignItems: "flex-end", flex: 1, gap: 5 }}>
                    <Feather name="plus" size={24} color="black" />
                    <TextInput style={{ minHeight: 30, backgroundColor: "#ccc", borderRadius: 10, paddingHorizontal: 10, flex: 1, maxHeight: 100 }}
                        multiline={true}

                    />
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                    <TouchableOpacity>
                        <Feather name="camera" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name="mic" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

        </KeyboardAvoidingView>






    );
}
