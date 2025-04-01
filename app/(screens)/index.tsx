import { TouchableOpacity } from "react-native";

import { StyledText, StyledTitle } from "@/components/StyledText";
import { View } from "@/components/Themed";
import { useColors } from "@/constants/Colors";

import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";

import { billings, BillingsProps } from "@/api/billing";
import { tasks } from "@/api/tasks";
import { Notify } from "@/components/Notify";
import { BottomEditBill } from "@/components/Sheets/BottomEditBill";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView } from "react-native";

export default function Home() {
  const navigation = useRouter();

  const [handleEditBill, setHandleEditBill] = useState(false);
  const [selectedBill, setSelectedBill] = useState<BillingsProps>();

  const sectionStyle = "flex flex-col mt-7 gap-3";
  const fastBoxStyle =
    "flex flex-col justify-center items-center w-[32%] h-[90px] rounded-xl gap-2";
  const sectionItem =
    "flex flex-col items-center justify-center bg-white w-full rounded-xl shadow-[1px_1px_5px_#8282826d,-2px_0px_1px_#5cc6fa] m-1 p-5 gap-4";

  return (
    <ScrollView className="flex w-full h-full bg-white p-5">
      <View className="flex flex-row w-full  h-16 py-6 pt-2 justify-between items-center border-b border-[#c7c7c76d]">
        <StyledTitle className="text-2xl font-bold !text-customGreen">
          Ap 101E
        </StyledTitle>

        <Notify />
      </View>

      <View className={`pt-5 ${sectionStyle}`}>
        <View className="flex flex-row justify-between items-center w-full">
          <TouchableOpacity
            onPress={() => navigation.replace("/Contas")}
            className={`bg-green-light ${fastBoxStyle}`}
          >
            <Entypo name="credit" size={30} color={useColors.green} />
            <StyledText className="text-center font-bold !text-customGreen">
              Contas
            </StyledText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.replace("/Tarefas")}
            className={`bg-blue-light ${fastBoxStyle}`}
          >
            <Entypo name="pin" size={30} color={useColors.blue} />
            <StyledText className="text-center font-bold !text-customBlue">
              Tarefas
            </StyledText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.replace("/Garagem")}
            className={`bg-purple-light ${fastBoxStyle}`}
          >
            <Entypo name="traffic-cone" size={30} color={useColors.purple} />
            <StyledText className="text-center font-bold !text-customPurple">
              Garagem
            </StyledText>
          </TouchableOpacity>
        </View>
      </View>

      <View className={sectionStyle}>
        <View className="flex flex-row items-center justify-between mb-3">
          <StyledTitle className="text-lg font-bold">Contas</StyledTitle>

          <TouchableOpacity onPress={() => navigation.replace("/Contas")}>
            <StyledText className="!text-customBlue">Ver Tudo</StyledText>
          </TouchableOpacity>
        </View>

        {billings
          .filter((item) => item.status !== "Paga")
          .sort((a, b) => {
            if (a.status === "Atrasada" && b.status !== "Atrasada") return -1;
            if (a.status !== "Atrasada" && b.status === "Atrasada") return 1;
            return a.expireIn.getTime() - b.expireIn.getTime();
          })
          .slice(0, 2)
          .map((item, i) => (
            <TouchableOpacity
              onPress={() => {
                setHandleEditBill(true), setSelectedBill(item);
              }}
              className={sectionItem}
              key={i}
            >
              <View className="flex flex-row items-center justify-between w-full">
                <StyledText className="font-bold text-base">
                  {item.title}
                </StyledText>
                <StyledText
                  className={`text-xs p-1 px-3 border rounded-full ${
                    item.status === "A vencer"
                      ? "!text-customOrange border-customOrange bg-orange-light"
                      : item.status === "Atrasada"
                      ? "!text-customRed border-customRed bg-red-light"
                      : "!text-gray border-gray bg-gray-300"
                  }`}
                >
                  {item.status}
                </StyledText>
              </View>
              <View className="flex flex-row items-center justify-between w-full">
                <StyledText className="text-base">
                  R$ {item.valor.toFixed(2)}
                </StyledText>

                <View className="flex flex-row items-center gap-3">
                  <StyledText className="!text-textGray">
                    {item.expireIn.getDay().toLocaleString()}/
                    {item.expireIn.getMonth().toLocaleString()}
                  </StyledText>

                  <View className="items-center justify-center !bg-blue-400 rounded-full size-8">
                    <StyledText className="text-xs font-bold">
                      {item.assigned.split("")[0]}
                    </StyledText>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
      </View>

      <View className={sectionStyle}>
        <View className="flex flex-row items-center justify-between mb-3">
          <StyledTitle className="text-lg font-bold">Tarefas</StyledTitle>

          <TouchableOpacity onPress={() => navigation.replace("/Tarefas")}>
            <StyledText className="!text-customBlue">Ver Tudo</StyledText>
          </TouchableOpacity>
        </View>

        {tasks
          .filter((item) => item.status !== "Concluida")
          .sort((a, b) => {
            if (a.status === "Atrasada" && b.status !== "Atrasada") return -1;
            if (a.status !== "Atrasada" && b.status === "Atrasada") return 1;
            return a.expireIn.getTime() - b.expireIn.getTime();
          })
          .slice(0, 2)
          .map((item, i) => (
            <TouchableOpacity className={sectionItem} key={i}>
              <View className="flex flex-row items-center justify-between w-full">
                <StyledText className="font-bold text-base">
                  {item.title}
                </StyledText>
                <StyledText
                  className={`text-xs p-1 px-3 border rounded-full ${
                    item.status === "Pendente"
                      ? "!text-customOrange border-customOrange bg-orange-light"
                      : item.status === "Atrasada"
                      ? "!text-customRed border-customRed bg-red-light"
                      : "!text-gray border-gray bg-gray-300"
                  }`}
                >
                  {item.status}
                </StyledText>
              </View>
              <View className="flex flex-row items-center justify-between w-full">
                <StyledText
                  className={`text-sm px-3 ${
                    item.importance === "Alta"
                      ? "!text-customOrange"
                      : item.importance === "Média"
                      ? "!text-customRed"
                      : "!text-customGreen"
                  }`}
                >
                  {item.importance === "Alta" ? (
                    <AntDesign name="arrowup" size={16} />
                  ) : item.importance === "Média" ? (
                    <AntDesign name="arrowright" size={16} />
                  ) : item.importance === "Pequena" ? (
                    <AntDesign name="arrowdown" size={16} />
                  ) : null}{" "}
                  {item.importance}
                </StyledText>

                <View className="flex flex-row items-center gap-3">
                  <StyledText className="!text-textGray">
                    {item.expireIn.getDay().toLocaleString()}/
                    {item.expireIn.getMonth().toLocaleString()}
                  </StyledText>

                  <View className="!bg-blue-400 rounded-full size-8 justify-center items-center">
                    <StyledText className="text-xs font-bold">
                      {item.assigned.split("")[0]}
                    </StyledText>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
      </View>

      <BottomEditBill
        isVisible={handleEditBill}
        changeVisibility={() => setHandleEditBill(!handleEditBill)}
        item={selectedBill}
      />
    </ScrollView>
  );
}
//418
