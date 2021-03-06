import Head from "next/head";
import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { ContinentInfo } from "../../components/ContinentInfo";
import { CityCard } from "../../components/CityCard";
import { api } from "../../api";
import { useRouter } from "next/router";

type CityProps = {
  name: string;
  cityImageUrl: string;
  country: string;
  countryFlagUrl: string;
}

type ContinentProps = {
  id: string;
  name: string;
  title: string;
  text: string;
  bannerUrl: string;
  countries: number;
  langagues: number;
  mostVisitedCities: CityProps[];
}

export default function Continent() {
  const [continentContent, setContinentContent] = useState<ContinentProps>({} as ContinentProps);
  const [isLoaded, setIsLoaded] = useState(false)
  
  const router = useRouter()
  const { continent } = router.query

  const getContinent = async () => {
    try {
      const response = await api.get(`/continents/${continent}`);
  
      const data = await response.data.continent
  
      setContinentContent(data)
      setIsLoaded(!isLoaded)
      
    } catch (error) {
      alert(`Error to handle Continent load\n${error}`)
    }
  }

  useEffect(() => {
    getContinent()
  }, [])

  return (
    <>
      <Head>
        <title>WorldTrip | {continentContent.name}</title>
      </Head>

      <Header goHomeLink={true} />
      
      {isLoaded ? (
        <Box as='main' mb={8}>
          <Banner name={continentContent.name} image={continentContent.bannerUrl} />

          <Box as='section' maxWidth={1190} px={15} mx='auto' my={['32px', '80px']}>
            <Flex flexDirection={['column', 'row']}>
              <Box flex='1'>
                <Text maxW={600} mr='auto' fontSize={['sm', '2xl']} fontWeight='400' color='#47585B' textAlign='justify'>
                  {continentContent.text}
                </Text>
              </Box>

              <Box flex='1' w="100%" maxW={490} margin={['16px auto 0', '0 auto']}>
                <Flex justifyContent='space-between' alignItems={['center']} height='100%'>

                  <ContinentInfo title="pa??ses" quantity={continentContent.countries} />
                  <ContinentInfo title="l??nguas" quantity={continentContent.langagues} />
                  <ContinentInfo
                    title="cidades +100"
                    quantity={continentContent.mostVisitedCities.length}
                    label={`Pussui ${continentContent.mostVisitedCities.length} das 100 cidades mais visitadas do mundo!` }
                  />

                </Flex>
              </Box>
            </Flex>
          </Box>

          <Box as='section' maxWidth={1190} px={15} mx='auto'>
            <Heading as='h2' fontSize={['2xl', '3xl']} fontWeight='500' color='#47585B' mb={['20px', '40px']}>Cidades +100</Heading>
            
            <SimpleGrid columns={[1, 2, 3, 4]} spacing={10}>

              {continentContent.mostVisitedCities.map(city => (

                <CityCard
                  key={city.name}
                  name={city.name}
                  cityImageUrl={city.cityImageUrl}
                  country={city.country}
                  countryFlagUrl={city.countryFlagUrl}
                />

              ))}

            </SimpleGrid>
          </Box>
        </Box>
      ) : (
        <Text maxWidth={1190} px={15} mx='auto'>Carregando dados do continente...</Text>
      )}
  
    </>
  )
}
