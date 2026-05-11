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

export default function PerfilScreen({ navigation }) {
  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500",
              }}
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.editAvatarButton}>
              <Ionicons name="camera" size={16} color="#FFF" />
            </TouchableOpacity>
          </View>
          <Text style={styles.name}>João Silva</Text>
          <Text style={styles.email}>joao@email.com</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Shows</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Favoritos</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Reviews</Text>
          </View>
        </View>

        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View
                style={[
                  styles.iconBox,
                  { backgroundColor: "rgba(184, 41, 234, 0.1)" },
                ]}
              >
                <Ionicons name="person-outline" size={22} color="#B829EA" />
              </View>
              <Text style={styles.menuItemText}>Editar Perfil</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#4F4F5B" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View
                style={[
                  styles.iconBox,
                  { backgroundColor: "rgba(184, 41, 234, 0.1)" },
                ]}
              >
                <Ionicons
                  name="notifications-outline"
                  size={22}
                  color="#B829EA"
                />
              </View>
              <Text style={styles.menuItemText}>Notificações</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#4F4F5B" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View
                style={[
                  styles.iconBox,
                  { backgroundColor: "rgba(184, 41, 234, 0.1)" },
                ]}
              >
                <Ionicons name="settings-outline" size={22} color="#B829EA" />
              </View>
              <Text style={styles.menuItemText}>Configurações</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#4F4F5B" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={24} color="#FF4D4D" />
          <Text style={styles.logoutText}>Sair da conta</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0B0B14",
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 40,
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  avatarContainer: {
    position: "relative",
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#B829EA",
  },
  editAvatarButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#B829EA",
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#0B0B14",
  },
  name: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  email: {
    color: "#8E8E93",
    fontSize: 14,
  },
  statsContainer: {
    flexDirection: "row",
    backgroundColor: "#161622",
    borderRadius: 16,
    paddingVertical: 20,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: "#2A2A35",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  statBox: {
    alignItems: "center",
  },
  statNumber: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  statLabel: {
    color: "#8E8E93",
    fontSize: 12,
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: "#2A2A35",
  },
  menuContainer: {
    marginBottom: 40,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#161622",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#2A2A35",
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  menuItemText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "500",
  },
  logoutButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(255, 77, 77, 0.3)",
    backgroundColor: "rgba(255, 77, 77, 0.1)",
  },
  logoutText: {
    color: "#FF4D4D",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
});
