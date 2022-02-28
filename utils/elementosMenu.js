import {
  FiBarChart,
  FiGrid,
  FiHome,
  FiPower,
  FiThumbsUp,
} from "react-icons/fi";

export const elementosMenu = [
  {
    id: 1,
    auth: 2,
    enlace: "/",
    name: "Inicio",
    icon: FiHome,
  },
  {
    id: 2,
    auth: 2,
    enlace: "/about",
    name: "Acerca di",
    icon: FiBarChart,
  },
  {
    id: 3,
    auth: 1,
    enlace: "/acordeon",
    name: "Acordeón",
    icon: FiGrid,
  },
  {
    id: 4,
    auth: 1,
    enlace: "/formulario",
    name: "Formulario",
    icon: FiPower,
  },
  {
    id: 5,
    auth: 1,
    enlace: "/boxes",
    name: "ChaKra",
    icon: FiThumbsUp,
  },
  {
    id: 6,
    auth: 0,
    enlace: "/acceso",
    name: "Acceso",
    icon: FiThumbsUp,
  },
  {
    id: 7,
    auth: 0,
    enlace: "/profile",
    name: "perfil",
    icon: FiThumbsUp,
  },
];
