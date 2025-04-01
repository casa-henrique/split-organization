import { Notify } from "@/components/Notify";
import { BottomAddBill } from "@/components/Sheets/BottomAddBill";
import { StyledTitle } from "@/components/StyledText";
import { View } from "@/components/Themed";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";

export default function Contas() {
  const [addOpen, setAddOpen] = useState(false);

  return (
    <ScrollView className="flex w-full h-full bg-white p-5">
      <View className="flex flex-row w-full h-16 py-6 pt-2 justify-between items-center border-b border-[#c7c7c76d]">
        <StyledTitle className="text-2xl font-bold !text-customGreen">
          Contas
        </StyledTitle>

        <View className="flex-row items-center gap-4 pr-2">
          <Notify />

          <TouchableOpacity
            onPress={() => setAddOpen(!addOpen)}
            className="flex items-center justify-center size-10 rounded-full bg-green-light"
          >
            <AntDesign name="plus" size={20} color="#16a249" />
          </TouchableOpacity>
        </View>
      </View>

      <BottomAddBill
        isVisible={addOpen}
        changeVisibility={() => setAddOpen(!addOpen)}
      />
    </ScrollView>
  );
}
