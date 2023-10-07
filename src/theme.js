import { extendTheme} from "@chakra-ui/react";
const config = {
  initialColorMode: 'light',
  useSystemColorMode: 'false'
}

const colors = {
brand:{
  50: '#fff0e2',
  100: '#f0d8c0',
  200: '#e2bf9b',
  300: '#d5a676',
  400: '#c88c51',
  500: '#ae7337',
  600: '#89592a',
  700: '#62401d',
  800: '#3c250d',
  900: '#190b00'
}

}

const fonts = {
  body: "Open Sans",
  heading: "Open Sans"
}

const styles = {
  global:  (props) =>({
    body: {
      fontFamily: 'body',
      color: props.colorMode === "dark" ? 'brand.100' : 'blackAlpha.900',
      bg: props.colorMode === "dark" ? 'blackAlpha.600' : 'brand.200'
    },
  })
}

const theme = extendTheme({config, colors, fonts, styles})


export default theme