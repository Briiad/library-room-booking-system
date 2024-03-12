import React from 'react'
import Navbar from '../components/Navbar';
import { ChakraProvider } from '@chakra-ui/react';

export default async function Layout({children}: {children: React.ReactNode}) {
  return (
    <ChakraProvider>
      <Navbar />
      {children}
    </ChakraProvider>
  )
}