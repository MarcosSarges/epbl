import React from "react";
import Stacks from "./Stacks";
import Provider, { Consumer } from "./Provider/GlobalState";
import TaksProvider from "./Provider/TaksState";

export default () => (
  <Provider>
    <Stacks />
  </Provider>
);
