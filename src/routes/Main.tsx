import {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Logar from '../screens/Logar';
import Carregando from '../components/Carregando';

import  RotasApps  from './RotasApps';
import { Heading, VStack } from 'native-base';


export default function Rotas() {
    const [carregando, setCarregando] = useState(true);
    const [logado, setLogado] = useState(false);

    return(
        <NavigationContainer>
            {logado ? ( <RotasApps /> ) : ( <Logar /> )}
        </NavigationContainer>
    )

}