import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";   //tudo documentado no react navigation
import { Home } from "../screens/Home";

import Logar  from "../screens/Logar";

import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();  //instancia o objeto Navigator e Screen

type StackNavigation = {
    Home: undefined;
    Logar: undefined;

};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default function RotasApps() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Logar" component={Logar} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}