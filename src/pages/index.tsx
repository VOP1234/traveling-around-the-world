import { Flex, Text, Spacer, Box } from '@chakra-ui/react'

import Image from 'next/image'

import { Header } from "../components/Header"
import { Banner } from "../components/Banner"
import Carousel from "../components/Carousel"

import Airplane from '../../public/images/Airplane.png'
import Beach from '../../public/images/Beach.png'
import Modern from '../../public/images/Modern.png'
import Classic from '../../public/images/Classic.png'
import Nightlife from '../../public/images/Nightlife.png'
import More from '../../public/images/More.png'

export default function Home() {
  return (
    <>
      <Header />
      <Flex
        w='100%'
        marginTop='20px'
      >
        <Flex
          marginTop='40px'
        >
          <Banner />
          <Flex
            position='absolute'
            w='100%'
            justifyContent='space-around'
          >
            <Box
              flexDirection='column'
              mt='20'
              ml='35'
              w='100%'
            >
              <Text
                fontWeight='500'
                fontSize='36px'
                lineHeight='54px'
                color=' #F5F8FA'
                w=''
              >
                5 Continentes, <br />infinitas possibilidades.
              </Text>
              <Text
                fontSize='20px'
                lineHeight='30px'
                color='#DADADA'
              >
                Chegou a hora de tirar do papel a viagem que você <br />sempre sonhou.
              </Text>
            </Box>
            <Box
              w='100%'
              mt='76px'
              transform='rotate(3deg)'
            >
              <Image src={Airplane} alt='Avião' width={418} />
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w='80%'
        h='145px'
        mt='80px'
        ml='140px'
        justifyContent='space-between'
        alignSelf='center'
      >
        <Box>
          <Image src={Nightlife} alt='Vida Noturna' />
        </Box>
        <Box w='85'>
          <Image src={Beach} alt='Praia' />
        </Box>
        <Box w='85'>
          <Image src={Modern} alt='Moderno' />
        </Box>
        <Box w='85'>
          <Image src={Classic} alt='Classico' />
        </Box>
        <Box w='85'>
          <Image src={More} alt='E mais...' />
        </Box>
      </Flex>
      <Flex
        mt='80px'
        justifyContent='center'
        mb='52px'
      >
        <Flex
          w='90px'
          border='2px solid #47585B'
        >
        </Flex>
      </Flex>
      <Flex
        justifyContent='center'
      >
        <Text
          h='101px'

          fontWeight='500'
          fontSize='36px'
          lineHeight='54px'
          textAlign='center'
          color='#47585B'
          textShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Text>
      </Flex>
      <Flex
        maxWidth='100%'
        justifyContent='center'
        mt='52px'
        ml='100px'
        mr='100px'
        mb='40px'
      >
        <Carousel />
      </Flex>
    </>
  )
}
