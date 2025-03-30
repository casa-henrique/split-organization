import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";

import { StyledText, StyledTitle } from "@/components/StyledText";
import { View } from "@/components/Themed";
import { useColorScheme } from "@/components/useColorScheme.web";
import { useColors } from "@/constants/Colors";

import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";

import { ScrollView } from "react-native";
import { billings } from "@/api/billing";
import { tasks } from "@/api/tasks";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabOneScreen() {
  const colorScheme = (useColorScheme() ?? "light") as keyof typeof useColors;

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
      flexDirection: "row",
      width: "100%",
      marginTop: 16,
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "transparent",
    },
    title: {
      fontSize: 32,
      fontWeight: "bold",
      color: useColors[colorScheme].green,
    },
    fastBox: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "32%",
      height: 90,
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
      fontSize: 18,
      fontWeight: "bold",
    },
    sectionTitleWrapper: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 12,
    },
    sectionItem: {
      width: "100%",
      borderRadius: 12,
      boxShadow: "0px 0px 4px 2px rgb(238, 238, 238)",
      margin: 5,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      gap: 16,
    },
  });

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View style={styles.titleWrapper}>
          <StyledTitle style={styles.title}>Ap 101E</StyledTitle>

          <TouchableOpacity>
            <Ionicons name="notifications" size={24} color="#acadad" />
          </TouchableOpacity>
        </View>

        <View
          style={{
            ...styles.section,
            borderTopColor: "#c7c7c76d",
            borderTopWidth: 1,
            borderStyle: "solid",
            paddingTop: 20,
          }}
        >
          <View style={styles.fastWrapper}>
            <Link
              style={{
                ...styles.fastBox,
                backgroundColor: useColors[colorScheme]["green-light"],
              }}
              href={"/contas"}
            >
              <Entypo
                name="credit"
                size={30}
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
            </Link>
            <Link
              href={"/tarefas"}
              style={{
                ...styles.fastBox,
                backgroundColor: useColors[colorScheme]["blue-light"],
              }}
            >
              <Entypo
                name="pin"
                size={30}
                color={useColors[colorScheme].blue}
              />
              <StyledText
                style={{
                  ...styles.fastText,
                  color: useColors[colorScheme].blue,
                }}
              >
                Tarefas
              </StyledText>
            </Link>
            <Link
              href={"/garagem"}
              style={{
                ...styles.fastBox,
                backgroundColor: useColors[colorScheme]["purple-light"],
              }}
            >
              <Entypo
                name="traffic-cone"
                size={30}
                color={useColors[colorScheme].purple}
              />
              <StyledText
                style={{
                  ...styles.fastText,
                  color: useColors[colorScheme].purple,
                }}
              >
                Garagem
              </StyledText>
            </Link>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionTitleWrapper}>
            <StyledTitle style={styles.sectionTitle}>Contas</StyledTitle>

            <Link href={"/contas"}>
              <TouchableOpacity>
                <StyledText style={{ color: "blue" }}>Ver Tudo</StyledText>
              </TouchableOpacity>
            </Link>
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
              <TouchableOpacity style={styles.sectionItem} key={i}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <StyledText style={{ fontWeight: "bold", fontSize: 16 }}>
                    {item.title}
                  </StyledText>
                  <StyledText
                    style={{
                      fontSize: 12,
                      padding: 4,
                      borderRadius: 200,
                      color:
                        item.status === "A vencer"
                          ? "#f59f0a"
                          : item.status === "Atrasada"
                          ? "#ef4444"
                          : "gray",
                      borderColor:
                        item.status === "A vencer"
                          ? "#f59f0a"
                          : item.status === "Atrasada"
                          ? "#ef4444"
                          : "gray",
                      borderWidth: 1,
                      borderStyle: "solid",
                      backgroundColor:
                        item.status === "A vencer"
                          ? "#f59f0a1d"
                          : item.status === "Atrasada"
                          ? "#ef44441d"
                          : "gray",
                    }}
                  >
                    {item.status}
                  </StyledText>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <StyledText style={{ fontSize: 16 }}>
                    R$ {item.total.toFixed(2)}
                  </StyledText>

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <StyledText style={{ color: "gray" }}>
                      {item.expireIn.getDay().toLocaleString()}/
                      {item.expireIn.getMonth().toLocaleString()}
                    </StyledText>

                    <View
                      style={{
                        backgroundColor: "red",
                        borderRadius: 100,
                        width: 30,
                        height: 30,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <StyledText style={{ fontSize: 12 }}>
                        {item.assigned.split("")[0]}
                      </StyledText>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
        </View>

        <View style={styles.section}>
          <View style={styles.sectionTitleWrapper}>
            <StyledTitle style={styles.sectionTitle}>Tarefas</StyledTitle>

            <Link href={"/tarefas"}>
              <TouchableOpacity>
                <StyledText style={{ color: "blue" }}>Ver Tudo</StyledText>
              </TouchableOpacity>
            </Link>
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
              <TouchableOpacity style={styles.sectionItem} key={i}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <StyledText style={{ fontWeight: "bold", fontSize: 16 }}>
                    {item.title}
                  </StyledText>
                  <StyledText
                    style={{
                      fontSize: 12,
                      padding: 4,
                      borderRadius: 200,
                      color:
                        item.status === "Pendente"
                          ? "#f59f0a"
                          : item.status === "Atrasada"
                          ? "#ef4444"
                          : "gray",
                      borderColor:
                        item.status === "Pendente"
                          ? "#f59f0a"
                          : item.status === "Atrasada"
                          ? "#ef4444"
                          : "gray",
                      borderWidth: 1,
                      borderStyle: "solid",
                      backgroundColor:
                        item.status === "Pendente"
                          ? "#f59f0a1d"
                          : item.status === "Atrasada"
                          ? "#ef44441d"
                          : "gray",
                    }}
                  >
                    {item.status}
                  </StyledText>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <StyledText
                    style={{
                      fontSize: 14,
                      color:
                        item.importance === "Alta"
                          ? "#f59f0a"
                          : item.importance === "Média"
                          ? "#ef4444"
                          : "#16a249",
                    }}
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

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <StyledText style={{ color: "gray" }}>
                      {item.expireIn.getDay().toLocaleString()}/
                      {item.expireIn.getMonth().toLocaleString()}
                    </StyledText>

                    <View
                      style={{
                        backgroundColor: "red",
                        borderRadius: 100,
                        width: 30,
                        height: 30,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <StyledText style={{ fontSize: 12 }}>
                        {item.assigned.split("")[0]}
                      </StyledText>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
