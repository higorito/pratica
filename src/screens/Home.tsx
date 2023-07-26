import { useNavigation } from "@react-navigation/native";
import { HStack, Heading, VStack, Icon, useTheme, IconButton, FlatList, Center, Text } from "native-base";

import { useState } from "react";

import { StackTypes } from "../routes/RotasApps";
import Botao from "../components/Botao";

import { BookBookmark, ChatTeardropDots, SignOut } from "phosphor-react-native";
import { Filtro } from "../components/Filtro";
import { Livro, LivroProps } from "../components/Livro";
import Carregando from "../components/Carregando";

export function Home() {
    const  {colors}  = useTheme();
    const navigation = useNavigation<StackTypes>();

    const [carregando, setCarregando] = useState(false); 

    const [statusSelecionado, setStatusSelecionado] = useState<'lendo' | 'lido'>('lendo');
                                          //se nao especificar o tipo aqui ele vai reclamar, criamos o tipo la no Livro.tsx          
    const [livros, setLivros] = useState<LivroProps[]>([  
        {   id: '12',
            titulo: 'cormen algoritmos',
            descricao: 'recomendo pra TP',
            estado: 'lido',
            data: '10/01/2022'
        },
        {   id: '13',
            titulo: 'clean code',
            descricao: '',
            estado: 'lendo',
            data: ''
        },
        {   id: '1',
            titulo: 'RNA a teoria e pratica',
            descricao: 'mt bom rede neural',
            estado: 'lido',
            data: '20/05/2023'
        },
        {   id: '2',
            titulo: 'livro da vaquinha',
            descricao: 'livro do indiano',
            estado: 'lendo',
            data: ''
        },
                      
    ]);

    function NovoLivro() {
        navigation.navigate("Registro");
    }

    function AbrirDetalhes(id: string) {
        navigation.navigate("Detalhes", { id });
    }

    return(
        <VStack flex={1} bg="quaseBranco.700" pt={12} pl={5} pb={3} pr={5}>

            <HStack w="full" justifyContent="space-between" alignItems="center" h={16} bg="quaseBranco.700" pb={5}  >

                <Icon as = { <BookBookmark color={colors.violet[900]} size={50}  />}  />
                <Heading color="white" fontSize="gigante" mt={2} mb={2} m={6} >Minha Biblioteca</Heading>
                <IconButton icon={<SignOut color={colors.violet[900]} size={30}  />} onPress={() => {
                }} />
                
            </HStack>

            {/* FILTRO}     */}
            <HStack space={3} mb={5} mt={2}>
                <Filtro
                    titulo="Lendo"
                    type="lendo"
                    ativo={statusSelecionado === 'lendo'}
                    onPress={ () => setStatusSelecionado('lendo')}
                />
                
               <Filtro
                    titulo="Lido"
                    type="lido"
                    onPress={ () => setStatusSelecionado('lido')}
                    ativo={statusSelecionado === 'lido'}
                />
               

            </HStack>
            


            {/* LISTA DE LIVROS */}

            {carregando ? (<Carregando />) : (


                <FlatList
                    data={livros}
                    keyExtractor={item => item.id}
                    renderItem={ 
                        ( {item} ) => <Livro dados={item}   onPress={() => AbrirDetalhes(item.id)}/> 
                    }
                    contentContainerStyle={{ paddingBottom: 80  }}
                    ListEmptyComponent={ ()=> (
                        <Center flex={1} pt={20}> 
                            <ChatTeardropDots color="#2c698d" size={56}/> 
                            <Text color="#2c698d" fontSize="grande" mt={5} textAlign="center">
                                {statusSelecionado === 'lendo' ? 'Adicione um livro para ler!' : 'Nenhum livro lido!'} 
                            </Text>
                        </Center>
                    ) }
                /> 
            )}

            {/* BOTAO ADICIONAR LIVRO */}

            <Botao titulo="Adicionar Livro" w="full" mt={3} mb={2}
                onPress={ NovoLivro}
            />

            {/* <Heading color="roxo.700" fontSize="gigante" mt={12} mb={6}>TELA Home</Heading>    
            <Botao titulo="Login" w="full" onPress={() => {

                navigation.navigate("Logar");
            }} />    */}
        </VStack>
    );
}