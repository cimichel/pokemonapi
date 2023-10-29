// app/providers.tsx
'use client'
import { extendTheme } from "@chakra-ui/react"
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import {SessionProvider} from "next-auth/react"


const theme = extendTheme({
  fonts: {
    heading: `'preahvihear', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
})



export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
      <SessionProvider>
        {children}
        </SessionProvider>
      </ChakraProvider>
    </CacheProvider>
  )
}