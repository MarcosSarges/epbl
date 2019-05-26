import { Linking, ToastAndroid } from "react-native";

const openLink = (url: string) => {
  Linking.openURL(url)
    .then(el => console.log("foi", el))
    .catch(el => {
      ToastAndroid.showWithGravity(
        "Erro ao abrir o link",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
    });
};

export default openLink;
