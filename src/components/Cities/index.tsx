import { Grid, Heading } from "@chakra-ui/react";
import City from "./City";

export default function Cities() {
  return (
    <>
      <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10">Cidades +100</Heading>
      <Grid templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={['20px', '45px']} alignItems="center" justifyContent="center" px={["30px", "0"]}>

        <City
          name='Berlim'
          country='Alemanhã'
          flag='./reinoUnido.png'
          image='/Londres.png'
        />

        <City
          name='Paris'
          country='França'
          flag='./França.png'
          image='/Paris.png'
        />

        <City
          name='Roma'
          country='Italia'
          flag='./Italia.png'
          image='/Roma.png'
        />

      </Grid>
    </>
  )
}