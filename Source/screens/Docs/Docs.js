import React from "react";
import { Button, View } from "react-native";
import { consultaionSection } from "./components";
import styles from "./style";

function Docs(props) {
  return (
    <View style={style.contanier}>
      <Text>Doc</Text>
      <Button />
      <consultaionSection title="Consultation 05/11/2021" />
    </View>
  );
}

export default Docs;
