import React from "react";
import NextLink from "next/link";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
export const EnlaceMenu = ({ link, icon, label, ...rest }) => {
  const router = useRouter();
  const isActive = router.pathname === link;
  return (
    <NextLink href={link} passHref>
      <a>
        <Flex
          align="center"
          bg={isActive ? "col.crimson" : "col.primary"}
          color={isActive ? "col.blanco" : "col.negro"}
          m={1}
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "col.crimson",
            color: "white",
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          )}
          <Text fontSize="1.2rem">{label}</Text>
        </Flex>
      </a>
    </NextLink>
  );
};
