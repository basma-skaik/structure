import React from "react";
import { View, Text } from "react-native";

const RowSection = ({ title }) => {
  return (
    <View>
      <Text style={}>{title}</Text>
    </View>
  );
};
const consultaionSection = ({ title }) => {
  return (
    <View style={StyleSheet.contanier}>
      <Text style={StyleSheet.mainTitle}>{title}</Text>
    </View>
  );
};

export default consultaionSection;
