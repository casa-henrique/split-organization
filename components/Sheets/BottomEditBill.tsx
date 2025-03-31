import { BillingsProps } from "@/api/billing";
import { useEffect, useState } from "react";
import { View } from "react-native";
import Modal from "react-native-modal";
import { StyledLabel } from "../StyledLabel";
import { StyledTitle } from "../StyledText";

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
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [assigned, setAssigned] = useState("");
  const [total, setTotal] = useState("");

  useEffect(() => {
    if (item) {
      setTitle(item.title);
      setDescription(item.description);
      setStatus(item.status);
      setAssigned(item.assigned);
      setTotal(item.total.toLocaleString());
    }
  }, [item]);

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={changeVisibility}
      style={{
        justifyContent: "flex-end",
        margin: 0,
      }}
    >
      <View className="flex flex-col items-center p-5 gap-4 h-[70%] bg-white rounded-t-2xl">
        <StyledTitle className="text-xl !text-customBlue font-bold">
          Editar Conta
        </StyledTitle>

        <StyledLabel
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          label="Titulo"
        />
        <StyledLabel
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          label="Descrição"
        />
        <StyledLabel
          value={assigned}
          onChange={(e) => setAssigned(e.target.value)}
          label="Responsável"
        />
        <StyledLabel
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          label="Status"
        />
        <StyledLabel
          value={total}
          keyboardType={"numeric"}
          onChange={(e) => setTotal(e.target.value)}
          placeholder="Total"
          label="Total"
        />
      </View>
    </Modal>
  );
}
//70
