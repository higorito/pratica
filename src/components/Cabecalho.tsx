import { HStack, Heading, IconButton, StyledProps, useTheme } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { ArrowFatLeft, CaretCircleLeft } from "phosphor-react-native";

type CabecalhoProps = StyledProps & {
    titulo: string;
}

export default function Cabecalho({ titulo, ...rest }: CabecalhoProps  ) {
    const navigation = useNavigation();
    const colors = useTheme();
    
    function voltar() { //voltar para a tela anterior mantem o historico
        navigation.goBack();
    }
    
    return(
        <HStack w="full" h={32} justifyContent="space-between" alignItems="center"
            bg="quaseBranco.700" pt={12} pb={4} px={1} {...rest} 
            >
            
            <IconButton icon={<CaretCircleLeft size={32} color="white" />}   onPress={voltar} />
            
            <Heading color="white" fontSize="gigante" flex={1} ml={6}  >{titulo}</Heading>
        </HStack>
    );
}