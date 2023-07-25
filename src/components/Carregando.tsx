import { Center, Spinner } from "native-base";

export default function Carregando() {
    return (      //veja q buscou o tema la do Tema.ts
        <Center flex={1} bg="secondary.700">
            <Spinner size="lg" color=" primaria2.700 " />
        </Center>
    )
}