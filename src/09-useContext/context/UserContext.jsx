import { createContext } from "react";

// Dentro de parentesis se puede definil un estado inicial como null, {}, etc.
// y ese valor sera el que se exponga a todos los componentes que quieran tomas informacion de este contexto
export const UserContext =  createContext();