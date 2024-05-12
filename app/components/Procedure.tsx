'use client';

import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, useColorModeValue } from '@chakra-ui/react';
import { FaWpforms } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";
import { MdRoomPreferences } from "react-icons/md";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function Procedure() {
  return (
    <Box p={12}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FaWpforms} w={10} h={10} color={'orange.400'} />}
          title={'Prosedur #1'}
          text={
            'Mengisi formulir permohonan bantuan dengan lengkap dan benar, setelah itu mengirimkan formulir tersebut melalui form yang telah disediakan di website ini.'
          }
        />
        <Feature
          icon={<Icon as={FaAddressCard} w={10} h={10} color={'orange.400'} />}
          title={'Prosedur #2'}
          text={
            'Menyiapkan KTM beserta bukti sudah pengajuan diterima dan dikonfirmasi oleh pihak terkait, setelah itu menunggu proses selanjutnya.'
          }
        />
        <Feature
          icon={<Icon as={MdRoomPreferences} w={10} h={10} color={'orange.400'} />}
          title={'Prosedur #3'}
          text={
            'Ruangan dan fasilitas yang disediakan digunakan oleh pengguna dengan mengikuti peraturan dan prosedur yang berlaku, serta menjaga kebersihan dan keamanan ruangan yang digunakan.'
          }
        />
      </SimpleGrid>
    </Box>
  );
}