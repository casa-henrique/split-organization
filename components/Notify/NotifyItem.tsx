import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { StyledText } from "../StyledText";

interface NotifyItemProps {
  item: { type: string; title: string; description: string; whenNotify: Date };
  i: any;
}

export const NotifyItem = ({ item, i }: NotifyItemProps) => {
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    const updateTimeAgo = () => {
      const now = new Date();
      const diffMs = now.getTime() - new Date(item.whenNotify).getTime();
      const diffSeconds = Math.floor(diffMs / 1000);
      const diffMinutes = Math.floor(diffSeconds / 60);
      const diffHours = Math.floor(diffMinutes / 60);
      const diffDays = Math.floor(diffHours / 24);

      let timeString = "Agora";

      if (diffMinutes < 1) timeString = "Agora";
      else if (diffMinutes < 60) timeString = `Enviado há ${diffMinutes} min`;
      else if (diffHours < 24) timeString = `Enviado há ${diffHours} h`;
      else timeString = `Enviado há ${diffDays} d`;

      setTimeAgo(timeString);
    };

    updateTimeAgo();
    const interval = setInterval(updateTimeAgo, 60000);

    return () => clearInterval(interval);
  }, [item.whenNotify]);

  return (
    <TouchableOpacity
      key={i}
      className="flex flex-row items-center gap-3 w-full h-20 p-2 border overflow-hidden relative border-customBlue rounded-md"
    >
      <View
        className={`flex justify-center items-center rounded-full size-12 ${
          item.type === "conta" ? "bg-green-light" : "bg-blue-light"
        }`}
      >
        {item.type === "conta" ? (
          <MaterialIcons name="attach-money" size={20} color="#16a249" />
        ) : (
          <Entypo name="pin" size={18} color="#3c83f6" />
        )}
      </View>

      <View className="w-[80%]">
        <StyledText className="font-bold">{item.title}</StyledText>
        <StyledText className="line-clamp-2">{item.description}</StyledText>
      </View>

      <StyledText className="text-xs absolute right-2 top-2">
        {timeAgo}
      </StyledText>
    </TouchableOpacity>
  );
};
