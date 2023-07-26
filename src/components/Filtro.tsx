import { useTheme, Button, IButtonProps, Text } from "native-base";


type PropsBtn = IButtonProps &{
    titulo: string;
    ativo?: boolean;
    type: 'lendo' | 'lido' ;
}

export function Filtro({ titulo, ativo=false, type, ...rest}: PropsBtn) {
    const {colors} = useTheme();
    
    const tipoCor = type === 'lendo' ? colors.orange[500] : type === 'lido' ? colors.green[500] : colors.blue[500]; 

    return(
        <Button variant="outline" borderWidth={ativo ? 2 : 0}
                borderColor={tipoCor} bgColor="#2c698d" flex={1} {...rest} size={12}
        >
            <Text color={ativo ? tipoCor : "white"} fontSize={12} textTransform="uppercase"> 
                {titulo}
            </Text>  
        </Button>
    );
}