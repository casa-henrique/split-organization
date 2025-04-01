import { Notifications } from "@/api/notifications";
import { ScrollView, View } from "react-native";
import Modal from "react-native-modal";
import { NotifyItem } from "../Notify/NotifyItem";
import { StyledText, StyledTitle } from "../StyledText";

interface TopNotifyProps {
  isVisible: boolean;
  changeVisibility: () => void;
}

export const TopNotify = ({ isVisible, changeVisibility }: TopNotifyProps) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={changeVisibility}
      propagateSwipe={true}
      animationIn="slideInDown"
      animationOut="slideOutUp"
      style={{
        justifyContent: "flex-start",
        margin: 0,
        zIndex: 200,
      }}
    >
      <View className="flex flex-col items-center p-5 gap-4 w-full h-[40%] bg-white rounded-b-3xl">
        <StyledTitle className="text-lg !text-customBlue">
          Notificações - {Notifications.length}
        </StyledTitle>

        <ScrollView
          contentContainerStyle={{ width: "100%", gap: 6 }}
          className="flex-col items-center w-full"
        >
          {Notifications.length > 0 ? (
            Notifications.map((item, i) => <NotifyItem item={item} i={i} />)
          ) : (
            <View className="flex w-full h-full justify-center items-center">
              <StyledText className="!text-textGray">
                Nenhuma notificação disponivel
              </StyledText>
            </View>
          )}
        </ScrollView>
      </View>
    </Modal>
  );
};
