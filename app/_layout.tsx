import {
  Inter_300Light,
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import {
  WorkSans_400Regular,
  WorkSans_700Bold,
} from "@expo-google-fonts/work-sans";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Drawer } from "expo-router/drawer";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../global.css";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Inter-light": Inter_300Light,
    Inter: Inter_400Regular,
    "Inter-bold": Inter_700Bold,
    WorkSans: WorkSans_400Regular,
    "WorkSans-bold": WorkSans_700Bold,
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="index" options={{ title: "Home" }} />
        <Drawer.Screen name="Contas" options={{ title: "Contas" }} />
        <Drawer.Screen name="Garagem" options={{ title: "Garagem" }} />
        <Drawer.Screen name="Tarefas" options={{ title: "Tarefas" }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}
