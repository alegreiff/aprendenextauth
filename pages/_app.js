import { ChakraProvider } from "@chakra-ui/react";
import SidebarWithHeader from "../components/Menu/MenuHeader";

import "../styles/globals.css";
import { theme } from "../utils/temaCustom";
import { SessionProvider } from "next-auth/react";

function MyApp({ session, Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarWithHeader>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </SidebarWithHeader>
    </ChakraProvider>
  );
}

export default MyApp;
