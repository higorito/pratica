import { Input as NativeBaseInput, IInputProps } from "native-base";

export default function Entrada({ ...rest }: IInputProps ) {   //...rest sao todas props, recebendo as props do native base input
    return(
        <NativeBaseInput
            bg="roxo.700"
            height={16}
            size="media"
            fontFamily="body"
            color="white"
            placeholderTextColor="quaseBranco.700" 
            _focus={{ borderWidth:2.5, borderColor:"azul.700", bg:"roxo.700" }}

            {...rest}  //passando todas as props para o input //dai aparece la na outra tela q chama o componente Entrada

        >

        </NativeBaseInput>
    );
}