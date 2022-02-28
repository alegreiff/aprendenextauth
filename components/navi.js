import Link from "next/link";
import React from "react";

export const NaviGatore = () => {
  return (
    <ul>
      MENU
      <li>
        {" "}
        <Link href="/">Inicio </Link>{" "}
      </li>
      <li>
        {" "}
        <Link href="/about">about </Link>{" "}
      </li>
      <li>
        {" "}
        <Link href="/malo">Mal </Link>{" "}
      </li>
    </ul>
  );
};
