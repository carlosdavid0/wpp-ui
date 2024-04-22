import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Conversa } from "screens/conversas/conversa";
import { TabRoutes } from "./tab.routes";

export type RootStackParamList = {
    Home: any
    Conversa: any
    profile: any
};


export function StackRoutes() {
    const Stack = createNativeStackNavigator<RootStackParamList>();
    return (

        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen
                name="Home"
                component={TabRoutes}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Group>
                <Stack.Screen name="Conversa" component={Conversa} />
                <Stack.Screen name="profile" component={Conversa} />
            </Stack.Group>
        </Stack.Navigator>


    )
}