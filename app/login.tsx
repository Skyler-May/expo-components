import React from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, color: "white" }}>登录</Text>
      <TextInput
        placeholder="用户名"
        style={{
          width: 250,
          height: 40,
          backgroundColor: "white",
          marginVertical: 8,
          paddingHorizontal: 8,
          borderRadius: 3,
        }}
      />
      <TextInput
        placeholder="密码"
        secureTextEntry
        style={{
          width: 250,
          height: 40,
          backgroundColor: "white",
          marginVertical: 8,
          paddingHorizontal: 8,
          borderRadius: 3,
        }}
      />
      <View
        style={{
          width: 250,
          height: 40,
          marginVertical: 8,
        }}
      >
        <Button title="登录" onPress={() => {}} />
      </View>
    </View>
  );
}
