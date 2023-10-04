import { extendTheme} from "@chakra-ui/react";

const config ={
    initialColorMode: 'dark',
    useSystemColorMode: false,



    styles: {
        global: (props) => ({
          'html, body': {
            fontSize: 'sm',
            background: props.colorMode === 'dark' ? 'white' : 'black',
            color: props.colorMode === 'dark' ? 'white' : 'gray.600',
            lineHeight: 'tall',
          },
          a: {
            color: props.colorMode === 'dark' ? 'teal.300' : 'teal.500',
          },
        }),
      }
}
 theme = extendTheme({config})

 export default theme