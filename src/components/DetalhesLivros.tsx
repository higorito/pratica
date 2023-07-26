import { Icon, VStack, HStack, Text, useTheme } from "native-base";
import { IconProps } from "phosphor-react-native";
import { ElementType } from "react";


type Props = {
    titulo: string;
    descricao: string;
    icon: ElementType<IconProps>;
    color?: string;
}


export default function DetalhesLivros(  {titulo, descricao, color="quaseBranco.700", icon:Icon } :Props   ) {
    const {colors} = useTheme();
    
    return(
        <VStack  bg={color} mx={8} mt={4} mb={1} rounded={16}>
            <HStack 
                bg="quaseBranco.800" alignItems="center" mb={4} 
            >
            
                <Icon color={colors.violet[900]} size={32} />
                <Text color="white" fontSize="media" textTransform="uppercase" m={2}>{titulo}</Text>
            </HStack>
        

            {!!descricao && (
                <Text color="white" fontSize="media" px={4} mb={4}>
                    {descricao}
                </Text>   
            )}

           
        
        </VStack>
    );
}
