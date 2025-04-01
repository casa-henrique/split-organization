import { Notify } from "@/components/Notify";
import { StyledTitle } from "@/components/StyledText";
import { View } from "@/components/Themed";
import { ScrollView } from "react-native";

export default function Garagem() {
  return (
    <ScrollView className="flex w-full h-full bg-white p-5">
      <View className="flex flex-row w-full  h-16 py-6 pt-2 justify-between items-center border-b border-[#c7c7c76d]">
        <StyledTitle className="text-2xl font-bold !text-customPurple">
          Garagem
        </StyledTitle>

        <Notify />
      </View>
    </ScrollView>
  );
}
