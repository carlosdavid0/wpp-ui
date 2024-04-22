import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList, StackRoutes } from "./app/stack.routes";
import { RootTabParamList } from "./app/tab.routes";

declare global {
    namespace ReactNavigation {

       type types = RootStackParamList & RootTabParamList; 
      interface RootParamList extends types {}
    }
  }
  
  

export function Routes() {
    return (
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    )
}