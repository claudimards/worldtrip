import { Box, Divider, Heading, Image, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import { api } from "../api";

import { Carousel } from "../components/Carousel";
import { Header } from "../components/Header";
import { Hobby } from "../components/Hobby";

type Continents = {
  id: string;
  name: string;
  title: string;
  link: string;
  carouselUrl: string;
}

export default function Home() {
  const [continents, setContinents] = useState<Continents[]>([]);

  let bannerImg = "/images/banner.png";

  const isMobile = useBreakpointValue({
    base: true,
    md: false
  })

  if (isMobile) {
    bannerImg = "/images/banner-mobile.png"
  }

  const getContinents = async () => {
    try {
      const response = await api.get("/continents")
  
      const data = await response.data.continents
      
      setContinents(data)
      
    } catch (error) {
      alert(`Error to handle request\n${error}`);
    }
  }

  useEffect(() => {
    getContinents()
  }, [])

  return (
    <>
      <Head>
        <title>WorldTrip</title>
      </Head>

      <Header />

      <Box as="main" mb={["6", "10"]}>
        <Box as="section" mb={[8, 20]}>
          <Image src={bannerImg} alt="Avião voando" width="100%" height="auto" />
        </Box>

        <SimpleGrid as="section" columns={[2, 5]} alignItems="center" justifyContent="space-between" maxWidth={1270} px={15} mx="auto">

          <Hobby hobby="vida noturna" image="cocktail" />
          <Hobby hobby="praia" image="surf" />
          <Hobby hobby="moderno" image="building" />
          <Hobby hobby="clássico" image="museum" />
          <Hobby hobby="e mais..." image="earth" />

        </SimpleGrid>

        <Divider width={90} height="0.5" bg="#47585B" mx="auto" mt={[8, 20]} mb={[6, 12]} />

        <Box as="section" maxWidth={1270} px={[0, 15]} mx="auto">
          <Heading as="h1" fontSize={["xl", "4xl"]} fontWeight={500} lineHeight={["30px", "54px"]} maxW={840} mx="auto" textAlign="center" mb={[5, 12]} color="#47585B">
            Vamos nessa?<br/>Então escolha seu continente
          </Heading>

          <Box as="article">
            {continents.length ? (
              <Carousel continents={continents} />
            ) : (
              <Text>Carregando lista de opções...</Text>
            )}
          </Box>
        </Box>
      </Box>

    </>
  )
}