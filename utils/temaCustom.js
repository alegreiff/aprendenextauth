import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
const colors = {
  col: {
    entorno: "#546e7a",
    primary: "#78909c",
    blanco: "#eceff1",
    negro: "#37474f",
    crimson: "#DC143C",
    azul1: "#03a9f4",
    azul2: "#00bcd4",
    verde: "#009688",
    verde2: "#26a69a",
    verde3: "#80cbc4",
    amarillo: "#f4e76e",
    pink: "#880e4f",
    pink1: "#d81b60",
    pink2: "#f06292",
    papel: "#fff3e0",
    fondo: "#001219",
  },
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  pers: {
    amarillo: "#92A9BD",
    verde: "#008E89",
    azul: "#085E7D",
    azul1: {
      200: "#084594",
      600: "#DC143C",
    },
  },
};

export const theme = extendTheme({ config, colors });
