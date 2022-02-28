import { Box, Button } from "@chakra-ui/react";
import {
  getCsrfToken,
  getProviders,
  signIn,
  getSession,
} from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import Router from "next/router";
import { useState } from "react";

export default function SignIn({ csrfToken, providers }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const signupUser = async (e) => {
    e.preventDefault();
    setMessage(null);
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    let data = await res.json();
    if (data.message) {
      setMessage(data.message);
    }
    if (data.message === "Registro etsitoso") {
      //return Router.push("/");
    }
  };

  const signinUser = async (e) => {
    e.preventDefault();
    console.log(email, password);
    let options = { redirect: false, email, password };
    const res = await signIn("credentials", options);
    setMessage(null);
    if (res?.error) {
      console.log(res);
      setMessage(res.error);
    } else {
      return Router.push("/");
    }
  };
  return (
    <>
      <Box color="green">
        <form method="post" action="/api/auth/signin/email">
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <label>
            Email address
            <input type="email" id="email" name="email" />
          </label>
          <button type="submit">Sign in with Email</button>
        </form>
        <form action="">
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <label>
            Email address
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <p style={{ color: "red" }}>{message}</p>
          <Button onClick={signinUser}> Sign in with credentials </Button>
          <Button onClick={signupUser}> Registradme </Button>
        </form>

        {Object.values(providers).map((provider) => {
          if (provider.name === "Email" || provider.name === "Credentials") {
            return;
          }
          return (
            <div key={provider.name}>
              <button onClick={() => signIn(provider.id)}>
                Sign in with {provider.name}
              </button>
            </div>
          );
        })}
      </Box>
    </>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });
  if (session) {
    //console.log("Session", JSON.stringify(session, null, 2));
    return {
      redirect: { destination: "/" },
    };
  }
  const csrfToken = await getCsrfToken(context);
  const providers = await getProviders();

  return {
    props: { csrfToken, providers },
  };
}

/*
// If older than Next.js 9.3
SignIn.getInitialProps = async (context) => {
  return {
    csrfToken: await getCsrfToken(context)
  }
}
*/
