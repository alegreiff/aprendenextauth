import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

import { estadoUsuario } from "../utils/estado/user";
const FormularioPage = () => {
  const { usuario } = estadoUsuario((state) => state);
  const router = useRouter();

  useEffect(() => {
    if (!usuario) {
      router.push("/");
    }
  }, [usuario, router]);

  if (!usuario) {
    return null;
  }

  return (
    <>
      <h1>Formulario</h1>
      <Box bg="pers.azul" height="200px"></Box>
    </>
  );
};

export default FormularioPage;
