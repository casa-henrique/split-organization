import { Notify } from "@/components/Notify";
import { StyledTitle } from "@/components/StyledText";
import { View } from "@/components/Themed";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native";

export default function Tarefas() {
  return (
    <ScrollView className="flex w-full h-full bg-white p-5">
      <View className="flex flex-row w-full  h-16 py-6 pt-2 justify-between items-center border-b border-[#c7c7c76d]">
        <StyledTitle className="text-2xl font-bold !text-customBlue">
          Tarefas
        </StyledTitle>

        <View className="flex-row items-center gap-4 pr-2">
          <Notify />

          <TouchableOpacity className="flex items-center justify-center size-10 rounded-full bg-blue-light">
            <AntDesign name="plus" size={20} color="#3c83f6" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
