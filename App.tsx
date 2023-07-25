//SEMPRE LEIA A DOCUMENTAÇÃO, PRINCIPALMENTE DO NATIVE BASE

import { Heading, NativeBaseProvider, StatusBar, VStack } from 'native-base';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter'
//importanndo temas
import { Tema } from './src/styles/Tema';

//importando componentes e telas
import Carregando from './src/components/Carregando';
import Logar from './src/screens/Logar';


export default function App() {
  const [fontes] = useFonts({  Inter_400Regular,  Inter_700Bold  })  //armazenando as fontes

  return(
    <NativeBaseProvider theme={Tema}>  
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      {fontes ? (
        <Logar />
      )
       : (<Carregando />)}


      
    </NativeBaseProvider>
  )

}