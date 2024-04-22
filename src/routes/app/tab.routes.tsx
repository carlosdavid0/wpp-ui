import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Atualizacoes } from "../../screens/atualizacoes";
import { Configuracoes } from "../../screens/configuracoes";
import { Conversas } from "../../screens/conversas";
import { Ligacoes } from "../../screens/ligacoes";

export type RootTabParamList = {
    atualizacoes:  any
    ligacoes: any
    conversas: any
    configuracoes: any
  };

export function TabRoutes() {
    const Tab = createBottomTabNavigator<RootTabParamList>();


    return (
            <Tab.Navigator screenOptions={{
                headerShown: false
            }}>
                <Tab.Screen name="atualizacoes" component={Atualizacoes} />
                <Tab.Screen name="ligacoes" component={Ligacoes} />
                <Tab.Screen name="conversas" component={Conversas} />
                <Tab.Screen name="configuracoes" component={Configuracoes} />
            </Tab.Navigator>
       
    );
}