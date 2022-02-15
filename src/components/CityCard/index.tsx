import { Avatar, Box, Flex, Heading, Image, Text } from "@chakra-ui/react"

type CityCard = {
  name: string;
  cityImageUrl: string;
  country: string;
  countryFlagUrl: string;
}

export const CityCard = ({ name, cityImageUrl, country, countryFlagUrl }: CityCard) => {
  return (
    <Box border='1px solid #FFBA08' borderRadius={5}>
      <Image
        objectFit='cover'
        src={cityImageUrl}
        alt={name}
        width='100%'
        maxHeight={173}
      />
      
      <Flex p={6} justifyContent='space-between' alignItems='center'>
        <Box>
          <Heading as='h5' fontSize='20px' color='#47585B' mb={3}>{name}</Heading>
          <Text color='#999999'>{country}</Text>
        </Box>

        <Avatar size='sm' name={country} src={countryFlagUrl} />
      </Flex>
    </Box>
  )
}