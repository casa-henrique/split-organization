import { Text as DefaultText, View as DefaultView } from "react-native";

import { useColors } from "@/constants/Colors";
import { useColorScheme } from "@/constants/useColorScheme";

export type TextProps = DefaultText["props"];
export type ViewProps = DefaultView["props"];

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof useColors
) {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return useColors[colorName];
  }
}

export function Text(props: TextProps) {
  const { style, ...otherProps } = props;
  return (
    <DefaultText style={[{ color: useColors.text }, style]} {...otherProps} />
  );
}

export function View(props: ViewProps) {
  const { style, ...otherProps } = props;

  return (
    <DefaultView
      style={[{ backgroundColor: "transparent" }, style]}
      {...otherProps}
    />
  );
}
