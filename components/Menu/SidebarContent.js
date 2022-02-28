import { Box, CloseButton, Flex, Switch, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { FiMinus } from "react-icons/fi";
import { EnlaceMenu } from "./EnlaceMenu";
import { estadoUsuario } from "../../utils/estado/user";

export const SidebarContent = ({ onClose, elementosMenu, ...rest }) => {
  const [isUser, setIsUser] = useState(false);
  const [itemsMenu, setItemsMenu] = useState([]);
  const { usuario, setUsuario } = estadoUsuario((state) => state);

  const cambiaSwitch = () => {
    console.log("Cambia suiche");
    setIsUser(!isUser);
    setUsuario(!isUser);
  };

  useEffect(() => {
    const menuEnlaces = [];
    if (usuario) {
      menuEnlaces = elementosMenu.filter((item) => item.auth != 0);
    } else {
      menuEnlaces = elementosMenu.filter((item) => item.auth != 1);
    }
    setItemsMenu(menuEnlaces);
  }, [usuario, elementosMenu]);

  return (
    <Box
      transition="3s ease"
      bg="col.entorno"
      borderRight="1px"
      borderRightColor="col.entorno"
      w={{ base: "full", md: 60 }}
      pos="absolute"
      h="full"
      bottom="0"
      paddingTop={5}
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Switch isChecked={isUser} onChange={cambiaSwitch} />
      </Flex>

      {itemsMenu.map((link) => (
        <EnlaceMenu
          key={link.id}
          link={link.enlace}
          label={link.name}
          icon={link.icon ? link.icon : FiMinus}
          onClick={() => onClose()}
        />
      ))}
    </Box>
  );
};
