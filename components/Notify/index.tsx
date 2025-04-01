import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { TopNotify } from "../Sheets/TopNotify";

export const Notify = () => {
  const [open, setOpen] = useState(false);

  return (
    <View className="flex px-2">
      <TouchableOpacity onPress={() => setOpen(!open)}>
        <Ionicons name="notifications" size={20} color="#acadad" />
      </TouchableOpacity>

      <TopNotify isVisible={open} changeVisibility={() => setOpen(!open)} />
    </View>
  );
};
