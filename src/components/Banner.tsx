
import { Flex } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from "swiper/react";

import Background from '../../public/images/Background.png'
import Image from "next/image";

export function Banner() {
  return (
    <Flex
      w='100%'
      h='335px'
    >
      <Image src={Background} alt="Background Image" />
    </Flex>
  )
}