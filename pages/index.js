import { Box, Button } from "@chakra-ui/react";
import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email}
        <img src={session?.user.image} alt="USER" />
        <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Inicio</h1>

      <button onClick={() => signIn()}>Sign in</button>

      <Box bg="pers.azul" height="200px"></Box>
      <Box bg="pers.amarillo" height="200px"></Box>
      <Box bg="pers.verde" height="200px"></Box>
      <Box bg="pers.azul" height="200px"></Box>
      <Box bg="pers.azul1.200" height="200px"></Box>
      <Box bg="pers.azul1.600" height="200px"></Box>
      <Box bg="pers.amarillo" height="200px"></Box>
      <Box bg="pers.verde" height="200px"></Box>
      <Box bg="pers.azul" height="200px"></Box>
      <Box bg="pers.azul1.200" height="200px"></Box>
      <Box bg="pers.azul1.600" height="200px"></Box>
    </>
  );
}

/* 

 <Box bg="pers.amarillo" height="200px"></Box>
        <Box bg="pers.verde" height="200px"></Box>
        <Box bg="pers.azul" height="200px"></Box>
        <Box bg="pers.azul1.200" height="200px"></Box>
        <Box bg="pers.azul1.600" height="200px"></Box>
*/
