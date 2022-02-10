import { Box, Divider, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import Head from "next/head";
import { Carousel } from "../components/Carousel";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>WorldTrip</title>
      </Head>

      <Header />

      <Box as="main" mb="10">
        <Box as="section" mb={20}>
          <Image src="/images/banner.png" alt="Avião voando" width="100%" height="auto" />
        </Box>

        <SimpleGrid as="section" columns={5} alignItems="center" justifyContent="space-between" maxWidth={1270} px={15} mx="auto">
          <Box as="article" maxWidth="max-content" textAlign="center" mx="auto">
            <Image src="/images/cocktail.svg" alt="Coquetel" width={85} height={85} mx="auto" />
            <Heading fontWeight={600} color="#47585B" mt="6" fontSize="2xl">vida noturna</Heading>
          </Box>

          <Box as="article" maxWidth="max-content" textAlign="center" mx="auto">
            <Image src="/images/surf.svg" alt="Praia" width={85} height={85} mx="auto" />
            <Heading fontWeight={600} color="#47585B" mt="6" fontSize="2xl">praia</Heading>
          </Box>

          <Box as="article" maxWidth="max-content" textAlign="center" mx="auto">
            <Image src="/images/building.svg" alt="Prédio" width={85} height={85} mx="auto" />
            <Heading fontWeight={600} color="#47585B" mt="6" fontSize="2xl">moderno</Heading>
          </Box>

          <Box as="article" maxWidth="max-content" textAlign="center" mx="auto">
            <Image src="/images/museum.svg" alt="Museu" width={85} height={85} mx="auto" />
            <Heading fontWeight={600} color="#47585B" mt="6" fontSize="2xl">clássico</Heading>
          </Box>

          <Box as="article" maxWidth="max-content" textAlign="center" mx="auto">
            <Image src="/images/earth.svg" alt="Globo terrestre" width={85} height={85} mx="auto" />
            <Heading fontWeight={600} color="#47585B" mt="6" fontSize="2xl">e mais...</Heading>
          </Box>
        </SimpleGrid>

        <Divider width={90} height="0.5" bg="#47585B" mx="auto" mt={20} mb={12} />

        <Box as="section" maxWidth={1270} px={15} mx="auto">
          <Heading as="h1" fontWeight={500} lineHeight="54px" maxW={840} mx="auto" textAlign="center" mb={12} color="#47585B">
            Vamos nessa?<br/>Então escolha seu continente
          </Heading>

          <Box as="article">
            <Carousel />
          </Box>
        </Box>
      </Box>

    </>
  )
}
