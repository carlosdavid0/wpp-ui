import clsx from "clsx";
import { Platform, StatusBar, Text, View } from "react-native";

type HeaderProps = {
    title: string;
    CustomHeaderOptions?: () => JSX.Element
}



export function Header({ title, CustomHeaderOptions }: HeaderProps) {
    return (
        <View className={
            clsx(' px-4 space-y-7',
                Platform.OS === 'android' && StatusBar.currentHeight && `pt-[${(StatusBar.currentHeight)}px]`,
            )
        }>
            <View className="h-4 my-2">
                {CustomHeaderOptions && CustomHeaderOptions()}
            </View>

            <Text className="text-black text-4xl font-semibold">
                {title}
            </Text>
        </View>
    )
}