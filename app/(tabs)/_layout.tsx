import { router, Tabs } from "expo-router";
import { Button, Image, Platform, View } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import type { DrawerContentComponentProps } from "@react-navigation/drawer";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerToggleButton,
} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

function TabsLayout() {
  const colorScheme = useColorScheme();

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
        headerLeft: () => <DrawerToggleButton />,
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
      <View style={{ padding: 16 }}>
        <Image
          source={{ uri: "https://picsum.photos/seed/picsum/100/100" }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
      </View>
      {/* 系统自带的 DrawerItem */}
      <DrawerItem
        label="首页"
        onPress={() => props.navigation.navigate("(tabs)")}
      />
      {/* 你也可以放任意自定义内容 */}
      <></>
      <Button title={"登出"} onPress={() => router.push("/login")} />
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
        name="TabsLayout"
        component={TabsLayout}
        options={{
          drawerLabel: () => null,
          drawerItemStyle: { height: 0 },
        }}
      />
    </Drawer.Navigator>
  );
}
