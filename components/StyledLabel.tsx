import AntDesign from "@expo/vector-icons/AntDesign";
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { tv } from "tailwind-variants";
import { StyledText } from "./StyledText";

interface StyledLabelProps extends TextInputProps {
  value: string;
  onChange: (e: any) => void;
  label: string;
  item?: string | number;
}

const styledInputWrapper = tv({
  base: "flex-row w-full items-center border-2 h-10 rounded-lg",
  variants: {
    diffValue: {
      true: "border-green-400",
      false: "border-gray-300",
    },
  },
});

export const StyledLabel = ({
  value,
  onChange,
  label,
  item,
  ...props
}: StyledLabelProps) => {
  const diffValue = item != value && item != undefined ? true : false;

  console.log(value, item);

  return (
    <View className="flex gap-3 w-full !z-[100]">
      <StyledText className="font-bold text-xs">{label}</StyledText>

      <View className={styledInputWrapper({ diffValue: diffValue })}>
        <TextInput
          {...props}
          value={value}
          onChange={(e: any) => onChange(e.target.value)}
          className={`w-full h-full p-3 `}
        />

        {diffValue && (
          <TouchableOpacity
            onPress={() => onChange(item)}
            className="flex-row w-auto px-3"
          >
            <AntDesign name="closecircle" size={16} color="#9ca3af" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
