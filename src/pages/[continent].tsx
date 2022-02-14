import Head from "next/head";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Avatar, Box, Flex, Heading, Icon, Image, SimpleGrid, Text, Tooltip } from "@chakra-ui/react";

import { Header } from "../components/Header";

export default function City() {
return (
  <>
    <Head>
      <title>WorldTrip | Continent</title>
    </Head>

    <Header goHomeLink={true} />
    
    <Box as='main' mb={8}>
      <Box as='section' position='relative' _before={{
          position: 'absolute',
          content: '""',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          bg: '#1c140159'
        }}>
        <Image src='/images/banner/europe-banner.png' alt='Europa' width="100%" height="auto" />
        <Heading fontSize='5xl' fontWeight='600' color='#F5F8FA' lineHeight='72px' position='absolute' left='140px' bottom='60px'>Europa</Heading>
      </Box>

      <Box as='section' maxWidth={1190} px={15} mx='auto' my='80px'>
        <Flex>
          <Box flex='1'>
            <Text maxW={600} mr='auto' fontSize='2xl' fontWeight='400' color='#47585B' textAlign='justify'>
              A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
            </Text>
          </Box>

          <Box flex='1' maxW={490} margin='0 auto'>
            <Flex justifyContent='space-between' alignItems='center' height='100%'>
              <Flex flexDirection='column' textAlign='center'>
                <Text fontSize='5xl' fontWeight='600' lineHeight='72px' color='#FFBA08'>50</Text>
                <Text fontSize='2xl' fontWeight='600' color='#47585B'>países</Text>
              </Flex>

              <Flex flexDirection='column' textAlign='center'>
                <Text fontSize='5xl' fontWeight='600' lineHeight='72px' color='#FFBA08'>60</Text>
                <Text fontSize='2xl' fontWeight='600' color='#47585B'>línguas</Text>
              </Flex>

              <Flex flexDirection='column' textAlign='center'>
                <Text fontSize='5xl' fontWeight='600' lineHeight='72px' color='#FFBA08'>27</Text>
                <Text fontSize='2xl' fontWeight='600' color='#47585B'>
                  cidades +100
                  
                  <Tooltip label='Pussui 27 das 100 cidades mais visitadas do mundo!'>
                    <Icon as={InfoOutlineIcon} fontSize='12px' color='#999999' ml={1} />
                  </Tooltip>
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Box as='section' maxWidth={1190} px={15} mx='auto'>
        <Heading as='h2' fontWeight='500' color='#47585B' mb='40px'>Cidades +100</Heading>
        
        <SimpleGrid columns={4} spacing={10}>
          <Box border='1px solid #FFBA08' borderRadius={5}>
            <Image
              objectFit='cover'
              src='/images/card/london.png'
              alt='Londres'
              width='100%'
              maxHeight={173}
            />
            
            <Flex p={6} justifyContent='space-between' alignItems='center'>
              <Box>
                <Heading as='h5' fontSize='20px' color='#47585B' mb={3}>Londres</Heading>
                <Text color='#999999'>Reino Unido</Text>
              </Box>

              <Avatar size='sm' name='Kent Dodds' src='/images/flag/unitedkingdon.svg' />
            </Flex>
          </Box>
          <Box border='1px solid #FFBA08' borderRadius={5}>
            <Image
              objectFit='cover'
              src='/images/card/london.png'
              alt='Londres'
              width='100%'
              maxHeight={173}
            />
            
            <Flex p={6} justifyContent='space-between' alignItems='center'>
              <Box>
                <Heading as='h5' fontSize='20px' color='#47585B' mb={3}>Londres</Heading>
                <Text color='#999999'>Reino Unido</Text>
              </Box>

              <Avatar size='sm' name='Kent Dodds' src='/images/flag/unitedkingdon.svg' />
            </Flex>
          </Box>
          <Box border='1px solid #FFBA08' borderRadius={5}>
            <Image
              objectFit='cover'
              src='/images/card/london.png'
              alt='Londres'
              width='100%'
              maxHeight={173}
            />
            
            <Flex p={6} justifyContent='space-between' alignItems='center'>
              <Box>
                <Heading as='h5' fontSize='20px' color='#47585B' mb={3}>Londres</Heading>
                <Text color='#999999'>Reino Unido</Text>
              </Box>

              <Avatar size='sm' name='Kent Dodds' src='/images/flag/unitedkingdon.svg' />
            </Flex>
          </Box>
          <Box border='1px solid #FFBA08' borderRadius={5}>
            <Image
              objectFit='cover'
              src='/images/card/london.png'
              alt='Londres'
              width='100%'
              maxHeight={173}
            />
            
            <Flex p={6} justifyContent='space-between' alignItems='center'>
              <Box>
                <Heading as='h5' fontSize='20px' color='#47585B' mb={3}>Londres</Heading>
                <Text color='#999999'>Reino Unido</Text>
              </Box>

              <Avatar size='sm' name='Kent Dodds' src='/images/flag/unitedkingdon.svg' />
            </Flex>
          </Box>
          <Box border='1px solid #FFBA08' borderRadius={5}>
            <Image
              objectFit='cover'
              src='/images/card/london.png'
              alt='Londres'
              width='100%'
              maxHeight={173}
            />
            
            <Flex p={6} justifyContent='space-between' alignItems='center'>
              <Box>
                <Heading as='h5' fontSize='20px' color='#47585B' mb={3}>Londres</Heading>
                <Text color='#999999'>Reino Unido</Text>
              </Box>

              <Avatar size='sm' name='Kent Dodds' src='/images/flag/unitedkingdon.svg' />
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  </>
)
}