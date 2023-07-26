import { extendTheme } from "native-base";

export const Tema = extendTheme({
    colors: {
        roxo: {
            200: '#afadd1',
            300: '#fff',
            500: '#424072',
            700: '#272643',
            800: '#131221'
        },
        quaseBranco: {
            800: '#242E42',
            700: '#2F3B52',
            400: '#e6e6e6'
        },
        azulClaro: {
            700: '#e3f6f5'
        },
        azulMedio: {
            700: '#bae8e8'
        },
        azul: {
            700: '#2c698d'

        },
        azulVar: {
            100: '#255774',
            200: '#255774',
            300: '#183a4e',
            400: '#122c3b',
            500: '#0c1d27',
            600: '#060f14',
        }, 
        amarelo: {
            700: '#ffff00'
        },
        verde: {
            700: '#2cf559'
        },
    }, 
    fonts: {
        heading: 'Inter_700Bold',
        body: 'Inter_400Regular',
    },
    fontSizes: {
        pequena : 12,
        media: 18,
        grande: 22,
        gigante: 28,
        gigantesca: 32,
    },
    sizes: {
        14: 56
    },
});
