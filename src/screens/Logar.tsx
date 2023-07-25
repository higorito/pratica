import { Heading, Icon, VStack, useTheme , Image} from "native-base";
import { useState } from "react";

import Entrada from "../components/Entrada";
import Botao from "../components/Botao";


import { Key, Envelope } from "phosphor-react-native";

import logoH from "../assets/logoH.png";

import { useNavigation } from "@react-navigation/native";


export default function Logar() {
    const { colors } = useTheme();
    const [carregando, setCarregando] = useState(false);

    const navigation = useNavigation();

    function clickBotaoLogar() {
       // setCarregando(true);
        
       navigation.navigate('Home');
    }

    return(
        <VStack flex={1} bg="quaseBranco.700" alignItems="center" px={8} py={24}>
            <Image source={logoH} resizeMode="contain" size={32} alt="logo" />
            <Heading color="roxo.700" fontSize="gigante" mt={12} mb={6}>
                Entre com sua conta    
            </Heading>

            <Entrada placeholder="E-mail" keyboardType="email-address" autoCapitalize="none"
                    mb={6} autoCorrect={false} 
                    InputLeftElement={<Icon as = { <Envelope color={colors.gray[100]} />} ml={4} />}
            />

            <Entrada placeholder="Senha" 
                    secureTextEntry={true}
                    autoCapitalize="none"
                    mb={6} 
                    autoCorrect={false} 
                    InputLeftElement={<Icon as = { <Key color={colors.gray[100]} />} ml={4} />}
            />

            <Botao titulo="Entrar" w="full"  isLoading={carregando} onPress={clickBotaoLogar}  />

        </VStack>
    );
}