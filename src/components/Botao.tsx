import { Button as ButtonNativeBase, IButtonProps, Heading } from "native-base";

type PropsTipos = IButtonProps & { //criando uma propriedade titulo 
    titulo: string;
}


export default function Botao({titulo, ...rest}: PropsTipos) {

    return(
        <ButtonNativeBase bg="roxo.700" h={14} fontSize="pequena" 
                rounded="8" _pressed={{bg: 'roxo.800'}} 
                {...rest}
                >

            <Heading color="white" fontSize="grande" > {titulo} </Heading>
        </ButtonNativeBase>
    );

}