import { Button as ButtonNativeBase, IButtonProps, Heading } from "native-base";

type PropsTipos = IButtonProps & { //criando uma propriedade titulo 
    titulo: string;
}


export default function Botao({titulo, ...rest}: PropsTipos) {

    return(
        <ButtonNativeBase bg="azulVar.100" h={14} fontSize="pequena" 
                rounded="8" _pressed={{bg: 'azulVar.400'}} 
                {...rest}
                >

            <Heading color="white" fontSize="grande" > {titulo} </Heading>
        </ButtonNativeBase>
    );

}