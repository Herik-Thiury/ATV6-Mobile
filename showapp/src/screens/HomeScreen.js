import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const SHOWS_MOCK = [
  {
    id: "1",
    nome: "Rock in Rio 2025",
    genero: "Rock",
    data: "15 Set",
    local: "Rio de Janeiro",
    imagem:
      "https://images.unsplash.com/photo-1459749411177-042180ce673c?w=500",
  },
  {
    id: "2",
    nome: "Lollapalooza Brasil",
    genero: "Pop/Rock",
    data: "22 Mar",
    local: "São Paulo",
    imagem:
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=500",
  },
];

export default function HomeScreen({ navigation }) {
  const [busca, setBusca] = useState("");

  const renderShowCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("DetalheShow", { show: item })}
    >
      <Image source={{ uri: item.imagem }} style={styles.cardImage} />
      <View style={styles.cardInfo}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item.genero}</Text>
        </View>
        <Text style={styles.cardTitle}>{item.nome}</Text>
        <View style={styles.cardFooter}>
          <Ionicons name="calendar-outline" size={14} color="#8E8E93" />
          <Text style={styles.cardFooterText}>{item.data}</Text>
          <Ionicons
            name="location-outline"
            size={14}
            color="#8E8E93"
            style={{ marginLeft: 10 }}
          />
          <Text style={styles.cardFooterText}>{item.local}</Text>
        </View>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#4F4F5B" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Meus Shows</Text>
          <TouchableOpacity style={styles.notificationBtn}>
            <Ionicons name="notifications-outline" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#8E8E93" />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar shows..."
            placeholderTextColor="#8E8E93"
            value={busca}
            onChangeText={setBusca}
          />
        </View>

        <FlatList
          data={SHOWS_MOCK}
          keyExtractor={(item) => item.id}
          renderItem={renderShowCard}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text style={styles.emptyText}>Nenhum show encontrado</Text>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0B0B14",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 24,
  },
  title: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "bold",
  },
  notificationBtn: {
    backgroundColor: "#161622",
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#2A2A35",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#161622",
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 50,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#2A2A35",
  },
  searchInput: {
    flex: 1,
    color: "#FFF",
    marginLeft: 10,
    fontSize: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#161622",
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#2A2A35",
  },
  cardImage: {
    width: 70,
    height: 70,
    borderRadius: 12,
  },
  cardInfo: {
    flex: 1,
    marginLeft: 16,
  },
  badge: {
    backgroundColor: "rgba(184, 41, 234, 0.1)",
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 4,
  },
  badgeText: {
    color: "#B829EA",
    fontSize: 10,
    fontWeight: "bold",
  },
  cardTitle: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardFooterText: {
    color: "#8E8E93",
    fontSize: 12,
    marginLeft: 4,
  },
  emptyText: {
    color: "#8E8E93",
    textAlign: "center",
    marginTop: 50,
  },
});
