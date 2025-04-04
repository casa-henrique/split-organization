import { BillingsProps } from "@/api/billing";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useEffect, useState } from "react";
import { Switch, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import { StyledLabel } from "../StyledLabel";
import { StyledSelect } from "../StyledSelect";
import { StyledText, StyledTitle } from "../StyledText";

interface BottomEditBillProps {
  isVisible: boolean;
  changeVisibility: () => void;
  item: BillingsProps | undefined;
}

export function BottomEditBill({
  isVisible,
  changeVisibility,
  item,
}: BottomEditBillProps) {
  const [title, setTitle] = useState("");
  const [isApellant, setIsApellant] = useState(false);
  const [status, setStatus] = useState<{ label: string; value: string }>({
    label: "",
    value: "",
  });
  const [assigned, setAssigned] = useState<{ label: string; value: string }>({
    label: "",
    value: "",
  });
  const [total, setTotal] = useState("");

  const assignedItems = [
    { label: "Henrique", value: "h" },
    { label: "Manuela", value: "m" },
    { label: "Eduarda", value: "e" },
  ];
  const statusItems = [
    { label: "Atrasada", value: "atrasada" },
    { label: "Paga", value: "paga" },
    { label: "A vencer", value: "vencida" },
  ];

  useEffect(() => {
    if (item) {
      setTitle(item.title);
      setStatus(
        statusItems.filter((statsItem) => item.status === statsItem.label)[0]
      );
      setAssigned(
        assignedItems.filter((assItem) => assItem.label === item.assigned)[0]
      );
      setTotal(item.valor.toLocaleString());
      setIsApellant(item.isApellant);
    }
  }, [item]);

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={changeVisibility}
      propagateSwipe={true}
      style={{
        justifyContent: "flex-end",
        margin: 0,
        zIndex: 200,
      }}
    >
      <View className="flex flex-col items-center p-5 gap-4 w-full bg-white rounded-t-3xl">
        <StyledTitle className="text-xl !text-customBlue font-bold">
          Editar Conta
        </StyledTitle>

        <StyledLabel
          value={title}
          item={item?.title}
          onChange={setTitle}
          label="Titulo"
        />

        <StyledLabel
          value={total}
          keyboardType={"numeric"}
          item={item?.valor}
          onChange={setTotal}
          label="Valor (R$)"
        />

        <View className="grid grid-cols-2 gap-4 w-full h-auto">
          <StyledSelect
            label="Responsável"
            value={assigned}
            setValue={setAssigned}
            items={assignedItems}
          />

          <StyledSelect
            label="Status"
            value={status}
            setValue={setStatus}
            items={statusItems}
          />
        </View>

        <View className="flex-row items-center gap-2">
          <Switch
            value={isApellant}
            onValueChange={() => setIsApellant((prev) => !prev)}
          />
          <StyledText>Conta recorrente</StyledText>
        </View>

        <View className="flex-row gap-4 mt-4 w-full items-center justify-center">
          <TouchableOpacity className="px-12 h-8 bg-green-400 flex items-center justify-center rounded-full">
            <AntDesign name="check" size={14} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={changeVisibility}
            className="px-12 h-8 bg-red-400 flex items-center justify-center rounded-full"
          >
            <AntDesign name="close" size={12} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
