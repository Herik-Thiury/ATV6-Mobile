import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    navigation.replace("MainApp");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.header}>
          <Text style={styles.logo}>ShowApp</Text>
          <Text style={styles.title}>Bem-vindo de volta</Text>
          <Text style={styles.subtitle}>Faça login para continuar</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>E-mail</Text>
          <View style={styles.inputContainer}>
            <Ionicons
              name="mail-outline"
              size={20}
              color="#8E8E93"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="seu@email.com"
              placeholderTextColor="#8E8E93"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <Text style={styles.label}>Senha</Text>
          <View style={styles.inputContainer}>
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color="#8E8E93"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="••••••••"
              placeholderTextColor="#8E8E93"
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
            />
          </View>

          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.primaryButton} onPress={handleLogin}>
            <Text style={styles.primaryButtonText}>Entrar</Text>
          </TouchableOpacity>

          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>OU</Text>
            <View style={styles.divider} />
          </View>

          <TouchableOpacity style={styles.googleButton}>
            <Ionicons
              name="logo-google"
              size={20}
              color="#FFF"
              style={styles.googleIcon}
            />
            <Text style={styles.googleButtonText}>Continuar com Google</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.footer}
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Text style={styles.footerText}>
            Não tem conta?{" "}
            <Text style={styles.footerTextBold}>Cadastre-se</Text>
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
    paddingHorizontal: 24,
    justifyContent: "center",
  },
  header: {
    marginBottom: 40,
  },
  logo: {
    color: "#B829EA",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    color: "#8E8E93",
    fontSize: 16,
  },
  form: {
    marginBottom: 20,
  },
  label: {
    color: "#FFFFFF",
    fontSize: 14,
    marginBottom: 8,
    fontWeight: "500",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#161622",
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 20,
    height: 56,
    borderWidth: 1,
    borderColor: "#2A2A35",
  },
  icon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 16,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: "#B829EA",
    fontSize: 14,
    fontWeight: "500",
  },
  primaryButton: {
    backgroundColor: "#B829EA",
    borderRadius: 12,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#2A2A35",
  },
  dividerText: {
    color: "#8E8E93",
    paddingHorizontal: 16,
    fontSize: 14,
  },
  googleButton: {
    flexDirection: "row",
    backgroundColor: "#161622",
    borderRadius: 12,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2A2A35",
  },
  googleIcon: {
    marginRight: 12,
  },
  googleButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },
  footer: {
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 20,
  },
  footerText: {
    color: "#8E8E93",
    fontSize: 14,
  },
  footerTextBold: {
    color: "#B829EA",
    fontWeight: "bold",
  },
});
