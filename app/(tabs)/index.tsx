import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";

import { StyledText, StyledTitle } from "@/components/StyledText";
import { View } from "@/components/Themed";
import { useColorScheme } from "@/components/useColorScheme.web";
import { useColors } from "@/constants/Colors";
import { useUserInfos } from "@/hooks/useUserInfos";

import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ScrollView } from "react-native";

export default function TabOneScreen() {
  const colorScheme = (useColorScheme() ?? "light") as keyof typeof useColors;
  const { userInfos } = useUserInfos();

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      width: "100%",
      height: "100%",
      backgroundColor: useColors[colorScheme].backgroundColor,
      padding: 20,
    },
    titleWrapper: {
      display: "flex",
      width: "100%",
      backgroundColor: "transparent",
    },
    title: {
      fontSize: 32,
      fontWeight: "bold",
      color: useColors[colorScheme].green,
    },
    userNameText: {
      fontSize: 16,
      color: useColors[colorScheme].text,
    },
    fastBox: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "32%",
      height: 110,
      borderRadius: 12,
      gap: 8,
    },
    fastWrapper: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      backgroundColor: "transparent",
    },
    fastText: {
      textAlign: "center",
      fontWeight: "bold",
    },
    section: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "transparent",
      marginTop: 28,
      gap: 12,
    },
    sectionTitle: {
      display: "flex",
      gap: 10,
      alignItems: "center",
      fontSize: 22,
      fontWeight: "bold",
      marginBottom: 12,
    },
  });

  const notificationArray = [
    {
      title: "teste",
      type: "urgente",
      description: "descrição do teste 1",
      from: "Henrique",
      data: "29/03/2025",
    },
    {
      title: "teste 2",
      type: "medio",
      description: "descrição do teste 2",
      from: "Manuela",
      data: "28/03/2025",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View style={styles.titleWrapper}>
          <StyledTitle style={styles.title}>101E</StyledTitle>
          <StyledText style={styles.userNameText}>
            {userInfos?.name.split(" ")[0]}
          </StyledText>
        </View>

        <View style={styles.section}>
          <StyledTitle style={styles.sectionTitle}>
            Ações Rápidas
            <FontAwesome name="bolt" size={24} color="orange" />
          </StyledTitle>
          <View style={styles.fastWrapper}>
            <TouchableOpacity
              style={{
                ...styles.fastBox,
                backgroundColor: useColors[colorScheme]["green-light"],
              }}
            >
              <Entypo
                name="credit"
                size={40}
                color={useColors[colorScheme].green}
              />
              <StyledText
                style={{
                  ...styles.fastText,
                  color: useColors[colorScheme].green,
                }}
              >
                Contas
              </StyledText>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.fastBox,
                backgroundColor: useColors[colorScheme]["blue-light"],
              }}
            >
              <Entypo
                name="pin"
                size={40}
                color={useColors[colorScheme].blue}
              />
              <StyledText
                style={{
                  ...styles.fastText,
                  color: useColors[colorScheme].blue,
                }}
              >
                Tarefa
              </StyledText>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.fastBox,
                backgroundColor: useColors[colorScheme]["purple-light"],
              }}
            >
              <Entypo
                name="traffic-cone"
                size={40}
                color={useColors[colorScheme].purple}
              />
              <StyledText
                style={{
                  ...styles.fastText,
                  color: useColors[colorScheme].purple,
                }}
              >
                Vaga
              </StyledText>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <StyledTitle style={styles.sectionTitle}>
            Resumo do mês
            <FontAwesome name="calendar-check-o" size={24} color="green" />
          </StyledTitle>

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              width: "100%",
              height: 110,
              borderRadius: 8,
              backgroundColor: useColors[colorScheme]["orange-light"],
              padding: 12,
            }}
          >
            <StyledText style={{ fontSize: 16, color: "#222" }}>
              Contas Pendentes
            </StyledText>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-evenly",
                backgroundColor: "transparent",
              }}
            >
              <StyledText
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  color: useColors[colorScheme].orange,
                }}
              >
                R$5000,00
              </StyledText>
              <StyledText
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  color: useColors[colorScheme].orange,
                }}
              >
                -
              </StyledText>
              <StyledText
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  color: useColors[colorScheme].orange,
                }}
              >
                1/5
              </StyledText>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              width: "100%",
              height: 110,
              borderRadius: 8,
              backgroundColor: useColors[colorScheme]["blue-light"],
              padding: 12,
            }}
          >
            <StyledText style={{ fontSize: 16, color: "#222" }}>
              Tarefas Concluidas
            </StyledText>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-evenly",
                backgroundColor: "transparent",
              }}
            >
              <StyledText
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  color: useColors[colorScheme].blue,
                }}
              >
                1/5
              </StyledText>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <StyledTitle style={styles.sectionTitle}>
            Notificações <FontAwesome name="bullhorn" size={24} color="red" />
          </StyledTitle>

          {notificationArray.map((item, i) => (
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                borderColor: "#333",
                borderStyle: "solid",
                borderWidth: 1,
                borderRadius: 8,
                gap: 4,
                padding: 8,
                position: "relative",
                backgroundColor:
                  item.type === "urgente"
                    ? "#F57069"
                    : item.type === "medio"
                    ? useColors.light["orange-light"]
                    : "",
              }}
              key={i}
            >
              <StyledText style={{ fontSize: 18 }}>{item.title}</StyledText>
              <StyledText style={{ fontSize: 14, minHeight: 60 }}>
                {item.description}
              </StyledText>
              <StyledText
                style={{ fontSize: 12, position: "absolute", top: 4, right: 4 }}
              >
                {item.from}
              </StyledText>
              <StyledText
                style={{
                  fontSize: 12,
                  position: "absolute",
                  right: 4,
                  bottom: 4,
                }}
              >
                {item.data}
              </StyledText>
            </View>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
