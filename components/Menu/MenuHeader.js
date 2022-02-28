import React from "react";
import {
  Box,
  Container,
  Drawer,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";

import { elementosMenu } from "../../utils/elementosMenu";
import { SidebarContent } from "./SidebarContent";
import { MobileNav } from "./MobileNav";
import { ancho } from "../../utils/configuracion";
import { estadoUsuario } from "../../utils/estado/user";

export default function SidebarWithHeader({ children }) {
  const { usuario } = estadoUsuario((state) => state);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container
      maxW={`${ancho}px`}
      bg="col.entorno"
      borderBottom="10px"
      borderBottomColor="coral.pink2"
      paddingBottom={5}
      paddingTop={5}
    >
      <Box minH="65vh" bg="col.fondo">
        <SidebarContent
          onClose={() => onClose}
          display={{ base: "none", md: "block" }}
          elementosMenu={elementosMenu}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} elementosMenu={elementosMenu} />
          </DrawerContent>
        </Drawer>
        {/* mobilenav */}
        <MobileNav onOpen={onOpen} usuario={usuario} />
        <Box ml={{ base: 0, md: 60 }} p="4" color="col.papel">
          {children}
        </Box>
      </Box>
      <Box
        height="50px"
        bg="col.crimson"
        ml={[0, null, 60]}
        sx={{ border: "5px white solid", borderRadius: "1em" }}
      >
        footer
      </Box>
    </Container>
  );
}
