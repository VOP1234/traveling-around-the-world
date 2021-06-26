
import { Box, Flex, Text } from '@chakra-ui/react'

import { Swiper, SwiperSlide } from "swiper/react";

import Europa from '../../public/images/Europa.png'
import Image from "next/image";

// import Swiper core and required modules
import SwiperCore, {
  Navigation, Pagination, Mousewheel, Keyboard
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export default function Carousel() {
  return (
    <Box
      w='100%'
    >
      <Swiper cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} className="mySwiper">
        <SwiperSlide>
          <Flex
            position='absolute'
            flexDir='column'
          >

            <Text
              fontWeight='500'
              fontSize='48px'
              lineHeight='72px'
              textAlign='center'
              color='#F5F8FA'
              zIndex='100'
            >
              Europa
            </Text>
            <Text
              fontWeight='500'
              fontSize='24px'
              lineHeight='36px'
              textAlign='center'
              color='#DADADA'
              zIndex='100'
            >

              O continente mais antigo.
            </Text>
          </Flex>

          <Image src={Europa} alt="Europa" />
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            position='absolute'
            flexDir='column'
          >

            <Text
              fontWeight='500'
              fontSize='48px'
              lineHeight='72px'
              textAlign='center'
              color='#F5F8FA'
              zIndex='100'
            >
              Europa
            </Text>
            <Text
              fontWeight='500'
              fontSize='24px'
              lineHeight='36px'
              textAlign='center'
              color='#DADADA'
              zIndex='100'
            >

              O continente mais antigo.
            </Text>
          </Flex>

          <Image src={Europa} alt="Europa" />
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            position='absolute'
            flexDir='column'
          >

            <Text
              fontWeight='500'
              fontSize='48px'
              lineHeight='72px'
              textAlign='center'
              color='#F5F8FA'
              zIndex='100'
            >
              Europa
            </Text>
            <Text
              fontWeight='500'
              fontSize='24px'
              lineHeight='36px'
              textAlign='center'
              color='#DADADA'
              zIndex='100'
            >

              O continente mais antigo.
            </Text>
          </Flex>

          <Image src={Europa} alt="Europa" />
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            position='absolute'
            flexDir='column'
          >

            <Text
              fontWeight='500'
              fontSize='48px'
              lineHeight='72px'
              textAlign='center'
              color='#F5F8FA'
              zIndex='100'
            >
              Europa
            </Text>
            <Text
              fontWeight='500'
              fontSize='24px'
              lineHeight='36px'
              textAlign='center'
              color='#DADADA'
              zIndex='100'
            >

              O continente mais antigo.
            </Text>
          </Flex>

          <Image src={Europa} alt="Europa" />
        </SwiperSlide>

      </Swiper>
    </Box >
  )
}