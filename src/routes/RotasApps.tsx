import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";   //tudo documentado no react navigation
import { Home } from "../screens/Home";

import Logar  from "../screens/Logar";

import Registro from "../screens/Registro";
import Detalhes from "../screens/Detalhes";

import { NavigationContainer } from "@react-navigation/native";


const Stack = createNativeStackNavigator();  //instancia o objeto Navigator e Screen

type StackNavigation = {  //estou criando tipo aqui e na pasta @types(msm coisa)
    Home: undefined;
    Logar: undefined;
    Registro: undefined;
    Detalhes: {id: string};

};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default function RotasApps() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home"  component={Home} />
                <Stack.Screen name="Logar" component={Logar} />
                <Stack.Screen name="Registro" component={Registro} />
                <Stack.Screen name="Detalhes" component={Detalhes} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}