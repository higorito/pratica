import { HStack, Heading, VStack, useTheme} from "native-base";
import { useNavigation, useRoute } from "@react-navigation/native";
import Cabecalho from "../components/Cabecalho";
import { LivroProps } from "../components/Livro";
import DetalhesLivros from "../components/DetalhesLivros";
import {   CircleWavyWarning, Clipboard, ClipboardText } from "phosphor-react-native";
import Botao from "../components/Botao";

type RouteParams = {
    id: string;
}

type DetalhesLivros = LivroProps & {  //ja tava definido no LivroProps, em Livro.tsx
    id: string;
    descricao: string;
    dtTerminou: string;
}

function MarcarLido() {
    console.log("marcar lido");
}


export default function Detalhes() {
    const navigation = useNavigation();
    const route = useRoute();

    const { id } = route.params as RouteParams;   //desestruturação de objeto para pegar o id

    const colors = useTheme();


    
    return(
        <VStack flex={1} bg="quaseBranco.800" >
            <Cabecalho titulo={"Detalhes " + id} />
            

            <DetalhesLivros titulo="nome livro" descricao="cormen algoritmos" 
                icon={CircleWavyWarning} color="quaseBranco.800"
            />
            <DetalhesLivros titulo="Descrição" descricao="recomendo pra TP Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat accusantium eveniet quidem quo dol" 
                icon={Clipboard}
            />
         
            <Botao titulo="Marcar Com Lido" onPress={ MarcarLido } mx={4} mt={8}/>
            
        </VStack>
    );
}