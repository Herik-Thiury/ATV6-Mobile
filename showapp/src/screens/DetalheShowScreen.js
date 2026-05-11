import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function DetalheShowScreen({ route, navigation }) {
  // Recebendo os dados do show que foi clicado na Home!
  const { show } = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Imagem de Destaque com Botão Voltar sobreposto */}
        <View style={styles.bannerContainer}>
          <Image source={{ uri: show.imagem }} style={styles.bannerImage} />
          <TouchableOpacity
            style={styles.backButtonFloating}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="#FFF" />
          </TouchableOpacity>
          <View style={styles.badgeFloating}>
            <Text style={styles.badgeText}>{show.genero}</Text>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>{show.nome}</Text>

          {/* Informações Rápidas */}
          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <Ionicons name="calendar-outline" size={20} color="#8E8E93" />
              <View style={styles.infoTextContainer}>
                <Text style={styles.infoValue}>{show.data}</Text>
                <Text style={styles.infoLabel}>Data</Text>
              </View>
            </View>

            <View style={styles.infoItem}>
              <Ionicons name="time-outline" size={20} color="#8E8E93" />
              <View style={styles.infoTextContainer}>
                <Text style={styles.infoValue}>19:00</Text>{" "}
                {/* Fixo por enquanto, no MOCK não tem hora */}
                <Text style={styles.infoLabel}>Horário</Text>
              </View>
            </View>

            <View style={styles.infoItem}>
              <Ionicons name="location-outline" size={20} color="#8E8E93" />
              <View style={styles.infoTextContainer}>
                <Text style={styles.infoValue}>{show.local}</Text>
                <Text style={styles.infoLabel}>Local</Text>
              </View>
            </View>
          </View>

          {/* Botões de Ação */}
          <View style={styles.actionsRow}>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="pencil-outline" size={22} color="#B829EA" />
              <Text style={styles.actionButtonText}>Editar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="share-social-outline" size={22} color="#B829EA" />
              <Text style={styles.actionButtonText}>Compartilhar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="trash-outline" size={22} color="#FF4D4D" />
              <Text style={[styles.actionButtonText, { color: "#FF4D4D" }]}>
                Excluir
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0B0B14",
  },
  bannerContainer: {
    width: "100%",
    height: 250,
    position: "relative",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  backButtonFloating: {
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 8,
    borderRadius: 12,
  },
  badgeFloating: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "#B829EA",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  badgeText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 12,
  },
  content: {
    padding: 24,
  },
  title: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 24,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoTextContainer: {
    marginLeft: 10,
  },
  infoValue: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  infoLabel: {
    color: "#8E8E93",
    fontSize: 12,
  },
  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionButton: {
    flex: 1,
    backgroundColor: "#161622",
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: "center",
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "#2A2A35",
  },
  actionButtonText: {
    color: "#B829EA",
    marginTop: 8,
    fontSize: 12,
    fontWeight: "500",
  },
});
