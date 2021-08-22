import { extendTheme } from "@chakra-ui/react";
import { ListItemStyles as ListItem } from "./ListItemStyles";

const theme = extendTheme({
  components: {
    ListItem
  },
  colors: {
    blue: '#a8dadc',
    white: '#f8f9fa',
    gray: '#343a40'
  }
});

export default theme;
