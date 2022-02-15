import { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"

import { makeServer } from "../server";

import { theme } from "../../styles/theme"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../styles/styles.css"

if (process.env.NODE_ENV === "development") {
  makeServer({environment: "development"})
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
