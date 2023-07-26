import { Box, HStack, IPressableProps, Pressable , VStack, useTheme, Text, Circle} from "native-base"
import { Bird, CircleWavyCheck, ClockClockwise, Hourglass, Moon } from "phosphor-react-native";


export type LivroProps = {      //tipou o objeto livro
    id: string;
    titulo: string;
    descricao: string;
    estado: 'lendo' | 'lido';
    data: string;
}

type Props = IPressableProps & {
    dados: LivroProps;
        
}

export function Livro({ dados, ...rest  }: Props  ) {
    const colors = useTheme().colors;
    const statusColor = dados.estado === 'lendo' ? colors.orange[500] : colors.green[500] 
    
    
    return(
        <Pressable {...rest}>
            <HStack 
                bg="roxo.700"  mb={4} alignItems="center" px={4} py={2}
                justifyContent="space-between" rounded={2} overflow="hidden"
                >
                <Box w={2} h="full" bg={statusColor} />

                <VStack flex={1} ml={6} my={6} > 
                    <Text color={"white"} fontSize="grande">{dados.titulo}</Text>
                    <HStack mt={1}>
                        <ClockClockwise color={colors.violet[900]} size={20} /> 
                        <Text color={"white"} fontSize="pequena" ml={1}>{dados.data}</Text>
                    </HStack>
                    {dados.estado === 'lendo' ? <Bird color={colors.violet[900]} size={20} /> : 
                        <Moon color={colors.violet[900]} size={20} />
                    }
                </VStack>

                <Circle bg="roxo.500" h={12} w={12} mr={6}>
                    {
                        dados.estado === 'lido' ? <CircleWavyCheck color={statusColor} size={26} /> :

                        <Hourglass color={statusColor} size={26} />
                    }
                </Circle>
            </HStack>


        </Pressable>
    )

}