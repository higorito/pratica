import { HStack, Heading, VStack, useTheme} from "native-base";
import { useNavigation, useRoute } from "@react-navigation/native";
import Cabecalho from "../components/Cabecalho";
import { LivroProps } from "../components/Livro";
import DetalhesLivros from "../components/DetalhesLivros";
import { CircleWavyQuestion, CircleWavyWarning, CirclesThreePlus } from "phosphor-react-native";

type RouteParams = {
    id: string;
}

type DetalhesLivros = LivroProps & {  //ja tava definido no LivroProps, em Livro.tsx
    id: string;
    descricao: string;
    dtTerminou: string;
}

export default function Detalhes() {
    const navigation = useNavigation();
    const route = useRoute();

    const { id } = route.params as RouteParams;   //desestruturação de objeto para pegar o id

    const colors = useTheme();


    
    return(
        <VStack flex={1} bg="quaseBranco.800">
            <Cabecalho titulo={"Detalhes " + id} />
            

            <DetalhesLivros titulo="nome livro" descricao="bbbaaaaaab" 
                icon={CircleWavyWarning}

            />
        </VStack>
    );
}