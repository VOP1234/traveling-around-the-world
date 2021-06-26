import { Flex, Box, Heading, Text } from '@chakra-ui/react'

import { Header } from "../components/Header"
import { Banner } from "../components/Banner"
import Carousel from "../components/Carousel"
import Features from "../components/Features"


export default function Home() {
  return (
    <Flex flexDir='column'>
      <Header />

      <Banner />

      <Features />

      <Box w={["60px", "90px"]} mx="auto" h="2px" bg="gray.700" my={["9", "20"]} />

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg",
          "3xl",
          "4xl"]}
      >
        Vamos nessa?<br />Então escolha seu continente
      </Heading>

      <Carousel />


    </Flex>
  )
}
