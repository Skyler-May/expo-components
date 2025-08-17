import { Tabs, useNavigation } from "expo-router";
import React from "react";
import { Button, Platform, Pressable } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import type { DrawerContentComponentProps } from "@react-navigation/drawer";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { DrawerActions } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

function TabLayout() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
        headerLeft: () => (
          <Pressable
            onPress={() => {
              // 打开 drawer
              navigation.dispatch(DrawerActions.openDrawer());
            }}
            style={{ paddingLeft: 20 }}
          >
            <Ionicons
              name="menu"
              size={24}
              color={Colors[colorScheme ?? "light"].text}
            />
          </Pressable>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      {/* 自定义头部 */}
      <></>
      {/* 系统自带的 DrawerItem */}
      <DrawerItem
        label="首页"
        onPress={() => props.navigation.navigate("(tabs)")}
      />
      {/* 你也可以放任意自定义内容 */}
      <></>
      <Button title={"登出"} onPress={() => {}} />
    </DrawerContentScrollView>
  );
}
export default function DrawerLayout() {
  const colorScheme = useColorScheme();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        component={TabLayout}
        options={{
          drawerLabel: () => null,
          drawerItemStyle: { height: 0 },
        }}
      />
    </Drawer.Navigator>
  );
}
