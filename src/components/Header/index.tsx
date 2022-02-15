import { Box, IconButton, Image } from "@chakra-ui/react"
import { ChevronLeftIcon } from '@chakra-ui/icons'
import Link from "next/link"

type HeaderProps = {
  goHomeLink?: boolean;
}

export const Header = ({ goHomeLink = false }: HeaderProps) => {
  const showGoToHome = goHomeLink

  return (
    <Box as='header' py={30}>
      <Box maxWidth={1270} px={15} mx='auto' position='relative'>
        {showGoToHome && (
          <Link href='/' passHref>
            <IconButton
              as='a'
              aria-label='Back to Home'
              icon={<ChevronLeftIcon />}
              position='absolute'
              left='15px'
              top='50%'
              transform='translate(0, -50%)'
              bg='0'
              p='0'
              color='#47585B'
              fontWeight='500'
            />
          </Link>
        )}
        <Image src='/images/logo.svg' alt='World Trip' mx='auto' />
      </Box>
    </Box>
  )
}