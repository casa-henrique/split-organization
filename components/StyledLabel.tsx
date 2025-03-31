import { TextInput, TextInputProps, View } from "react-native";
import { StyledText } from "./StyledText";

interface StyledLabelProps extends TextInputProps {
  value: string;
  onChange: (e: any) => void;
  label: string;
}

export const StyledLabel = ({
  value,
  onChange,
  label,
  ...props
}: StyledLabelProps) => {
  return (
    <View className="flex gap-3 w-full">
      <StyledText className="font-bold text-xs">{label}</StyledText>

      <TextInput
        {...props}
        value={value}
        onChange={onChange}
        className={`w-full border border-textGray h-10 rounded-lg p-3`}
      />
    </View>
  );
};
