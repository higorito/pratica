import {  VStack } from "native-base";
import { useState } from "react";
import { Alert } from "react-native";

import Cabecalho from "../components/Cabecalho";
import Entrada from "../components/Entrada";
import Botao from "../components/Botao";

export default function Registro() {

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");

    const [carregando, setCarregando] = useState(false);


    function ConfirmaRegistroLivro() {
        if (!titulo || !descricao) {
            return Alert.alert("Registro", "Verifique e preencha os campos!");
        }
       // setCarregando(true);

    } 

    return(
        <VStack flex={1} p={6} bg="quaseBranco.700">
            
            <Cabecalho titulo="Registrar Livro" />

            <Entrada 
                placeholder="Título"
                mt={5}
                onChangeText={setTitulo}
            />

            <Entrada 
                placeholder="Descrição"
                mt={5}
                flex={1}
                multiline
                textAlignVertical="top" 
                onChangeText={setDescricao}
            />

            <Botao 
                titulo="Registrar"
                mt={5}
                isLoading={carregando}
                mb={3}
                onPress={ ConfirmaRegistroLivro }
            />
        </VStack>
    );
}