import { ChakraProvider } from "@chakra-ui/react";
import SidebarWithHeader from "../components/Menu/MenuHeader";

import "../styles/globals.css";
import { theme } from "../utils/temaCustom";
import { SessionProvider } from "next-auth/react";

function MyApp({ session, Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={session}>
        <SidebarWithHeader>
          <Component {...pageProps} />
        </SidebarWithHeader>
      </SessionProvider>
    </ChakraProvider>
  );
}

export default MyApp;
