import React from "react";
import Stacks from "./Stacks";
import Provider from "./Provider/GlobalState";

export default () => (
  <Provider>
    <Stacks />
  </Provider>
);
