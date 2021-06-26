import { Flex } from '@chakra-ui/react'

import Image from 'next/image'
import Logo from '../../public/images/Logo.png'


export function Header() {
  return (
    <Flex
      w="100%"
      maxWidth='1480px'
      alignSelf='center'
      justifyContent='center'
    >
      <Image src={Logo} alt="Logo" />
    </Flex>
  )
}