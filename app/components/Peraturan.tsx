'use client'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
  Heading
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

export default function Peraturan() {
  return (
    <Flex
      align={'center'}
      justify={'center'}
      flexDirection={'column'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Container maxW={'lg'} p={8} mb={12}>
        <Heading textAlign={'center'} fontSize={'4xl'}>Peraturan</Heading>
      </Container>
      <Container
        maxW={'6xl'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'lg'}
        rounded={'lg'}
        p={6}
        mb={12}
      >
        <Accordion allowMultiple width="100%" rounded="lg">
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">Cek ruangan sebelum meminjam</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Pastikan ruangan yang akan dipinjam dalam kondisi baik dan siap
                digunakan. Jika terdapat kerusakan atau kekurangan, segera laporkan ke
                pihak terkait.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">
                Batasi waktu peminjaman
              </Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Batasi waktu peminjaman sesuai dengan kebutuhan. Jangan lupa untuk
                mengembalikan ruangan sesuai dengan waktu yang telah disepakati.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">
                Jaga kebersihan ruangan
              </Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Jaga kebersihan ruangan selama digunakan. Pastikan tidak ada sampah
                yang berserakan dan bersihkan ruangan sebelum meninggalkan ruangan.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">
                Batasi jumlah orang
              </Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Batasi jumlah orang yang hadir sesuai dengan kapasitas ruangan.
                Pastikan tidak ada kerumunan dan jaga jarak antar peserta.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Flex>
  )
}