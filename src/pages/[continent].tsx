import Head from "next/head";
import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useState } from "react";

import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { ContinentInfo } from "../components/ContinentInfo";
import { CityCard } from "../components/CityCard";

type CityProps = {
  name: string;
  cityImageUrl: string;
  country: string;
  countryFlagUrl: string;
}

type ContinentProps = {
  name: string;
  title: string;
  text: string;
  bannerUrl: string;
  countries: number;
  langagues: number;
  mostVisitedCities: CityProps[];
}

export default function Continent({ name, title, text, bannerUrl, countries, langagues, mostVisitedCities }: ContinentProps) {
  const [continent, setContinent] = useState<ContinentProps>({} as ContinentProps);

  return (
    <>
      <Head>
        <title>WorldTrip | Continent</title>
      </Head>

      <Header goHomeLink={true} />
      
      <Box as='main' mb={8}>
        <Banner name="Europa" image='/images/banner/europe.png' />

        <Box as='section' maxWidth={1190} px={15} mx='auto' my='80px'>
          <Flex>
            <Box flex='1'>
              <Text maxW={600} mr='auto' fontSize='2xl' fontWeight='400' color='#47585B' textAlign='justify'>
                A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
              </Text>
            </Box>

            <Box flex='1' maxW={490} margin='0 auto'>
              <Flex justifyContent='space-between' alignItems='center' height='100%'>

                <ContinentInfo title="países" quantity={50} />
                <ContinentInfo title="línguas" quantity={60} />
                <ContinentInfo title="cidades +100" quantity={27} label={`Pussui {27} das 100 cidades mais visitadas do mundo!` }/>

              </Flex>
            </Box>
          </Flex>
        </Box>

        <Box as='section' maxWidth={1190} px={15} mx='auto'>
          <Heading as='h2' fontWeight='500' color='#47585B' mb='40px'>Cidades +100</Heading>
          
          <SimpleGrid columns={4} spacing={10}>

            <CityCard name="Londres" cityImageUrl="/images/card/london.png" country="Reino Unido" countryFlagUrl="/images/flag/unitedkingdon.svg" />

          </SimpleGrid>
        </Box>
      </Box>
    </>
  )
}