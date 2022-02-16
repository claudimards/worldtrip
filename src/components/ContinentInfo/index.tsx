import { InfoOutlineIcon } from "@chakra-ui/icons"
import { Flex, Icon, Text, Tooltip } from "@chakra-ui/react"

type ContinentInfo = {
  quantity: number;
  title: string;
  label?: string;
}

export const ContinentInfo = ({ title, quantity, label = '' }: ContinentInfo) => {
  return (
    <Flex flexDirection='column' textAlign={['left', 'center']}>
      <Text fontSize={['2xl', '5xl']} fontWeight='600' lineHeight={['36px', '72px']} color='#FFBA08'>{quantity}</Text>
      <Text fontSize={['xl', '2xl']} fontWeight='600' color='#47585B'>
        {title}
        
        {!!label && (
          <Tooltip label={label}>
            <Icon as={InfoOutlineIcon} fontSize={['10px', '12px']} color='#999999' ml={1} />
          </Tooltip>
        )}
      </Text>
    </Flex>
  )
}