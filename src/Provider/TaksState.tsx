import React from "react";
import { Context } from "./GlobalState";

export const TaksContext = React.createContext({});

export const TaksConsumer = TaksContext.Consumer;

const TaksProvider = (props: { children: React.ReactNode }) => {
  return <Context.Provider value={{}}>{props.children}</Context.Provider>;
};

export default TaksProvider;
