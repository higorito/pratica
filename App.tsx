//SEMPRE LEIA A DOCUMENTAÇÃO, PRINCIPALMENTE DO NATIVE BASE

import {  NativeBaseProvider, StatusBar } from 'native-base';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter'
//importanndo temas
import { Tema } from './src/styles/Tema';

//importando componentes e telas
import Carregando from './src/components/Carregando';
import Logar from './src/screens/Logar';
import  RotasApps  from './src/routes/RotasApps';




export default function App() {
  const [fontes] = useFonts({  Inter_400Regular,  Inter_700Bold  })  //armazenando as fontes

  return(
    <NativeBaseProvider theme={Tema}>  
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      {fontes ? (
        <RotasApps />
      )
       : (<Carregando />)}

      
    </NativeBaseProvider>
  )

}