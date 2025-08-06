import React from "react";
import { Text, View } from "react-native";

export default function TestScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, color: "white" }}>测试屏幕</Text>
    </View>
  );
}
