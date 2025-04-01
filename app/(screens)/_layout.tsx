import { useColors } from "@/constants/Colors";
import { Entypo, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: useColors.blue,
        headerShown: false,
        animation: "fade",
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: "8%",
          display: "flex",
          flexDirection: "row",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={16} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Contas"
        options={{
          title: "Contas",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="attach-money" size={18} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Tarefas"
        options={{
          title: "Tarefas",
          tabBarIcon: ({ color }) => (
            <Entypo name="pin" size={16} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Garagem"
        options={{
          title: "Garagem",
          tabBarIcon: ({ color }) => (
            <Entypo name="traffic-cone" size={16} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
