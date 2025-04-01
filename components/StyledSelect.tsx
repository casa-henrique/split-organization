import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { StyledText } from "./StyledText";

type SelectProps = {
  label: string;
  value: string;
};

interface StyledSelectProps {
  label: string;
  value: SelectProps;
  setValue: (val: SelectProps) => void;
  items: SelectProps[];
}

export const StyledSelect = ({
  label,
  value,
  setValue,
  items,
}: StyledSelectProps) => {
  const [open, setOpen] = useState(false);

  return (
    <View className="flex gap-3 w-full relative">
      <StyledText className="font-bold text-xs">{label}</StyledText>

      <TouchableOpacity
        onPress={() => setOpen(!open)}
        className="flex-row justify-between items-center px-2 border-2 border-gray-300 h-10 rounded-lg bg-white"
      >
        <StyledText>{value.label ? value.label : "Selecionar"}</StyledText>
        <AntDesign name="caretdown" size={14} color="#9ca3af" />
      </TouchableOpacity>

      {open && (
        <View className="absolute top-[70px] left-0 w-full bg-white rounded-lg shadow-lg">
          {items.map((item, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => {
                setValue(item);
                setOpen(false);
              }}
              className="flex flex-row justify-between items-center px-2 py-2 border border-gray-200"
            >
              <StyledText
                className={
                  item.label === value.label ? "!text-customGreen" : ""
                }
              >
                {item.label}
              </StyledText>
              {item.label === value.label && (
                <AntDesign name="check" size={12} color="#16a249" />
              )}
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};
