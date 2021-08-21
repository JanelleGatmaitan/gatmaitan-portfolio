import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    blue: '#a8dadc',
    white: '#f8f9fa',
    gray: '#343a40'
  },
  components: {
    ListItem: {
      baseStyle: {
        fontWeight: 'bold'
        }
      }
    }
});

export default theme;
