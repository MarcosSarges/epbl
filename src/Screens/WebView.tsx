import React, { Component, useEffect } from "react";

import { View, WebView, StatusBar } from "react-native";
import { colors, metrics } from "../Styles";
import Header from "../Components/Header";
import { NavigationScreenProps } from "react-navigation";

// import { Container } from './styles';

export default (props: NavigationScreenProps) => {
  useEffect(() => {
    //@ts-ignore
    if (!props.navigation.state.params.link) {
      props.navigation.pop(1);
    }
  }, []);

  //@ts-ignore
  return <WebView source={{ uri: props.navigation.state.params.link }} />;
};
