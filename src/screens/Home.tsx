import { useNavigation } from "@react-navigation/native";
import { Heading, VStack } from "native-base";

import { StackTypes } from "../routes/RotasApps";
import Botao from "../components/Botao";


export function Home() {

    const navigation = useNavigation<StackTypes>();

    return(
        <VStack flex={1} bg="quaseBranco.700" alignItems="center" px={8} py={24}>
            <Heading color="roxo.700" fontSize="gigante" mt={12} mb={6}>TELA Home</Heading>    
            <Botao titulo="Login" w="full" onPress={() => {

                navigation.navigate("Logar");
            }} />   
        </VStack>
    );
}