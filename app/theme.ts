// theme.ts
import { extendTheme } from '@chakra-ui/react';
import { Abril_Fatface } from '@next/font/google';

const Abril_Fatface = Abril_Fatface({
    weight: ['400'],
    subsets: ['latin'],
});

const theme = extendTheme({
    fonts: {
        body: nextFont.style.fontFamily,
        heading: nextFont.style.fontFamily,
    },
});


export default theme;