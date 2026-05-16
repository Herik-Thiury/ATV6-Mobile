import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebaseConfig";

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [carregando, setCarregando] = useState(false);

  const handleCadastro = async () => {
    if (!nome || !email || !senha || !confirmarSenha) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }

    setCarregando(true);

    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      Alert.alert("Sucesso", "Conta criada com sucesso!", [
        { text: "OK", onPress: () => navigation.replace("MainApp") },
      ]);
    } catch (error) {
      let mensagemErro = "Não foi possível realizar o cadastro.";

      if (error.code === "auth/email-already-in-use") {
        mensagemErro = "Este e-mail já está em uso.";
      } else if (error.code === "auth/invalid-email") {
        mensagemErro = "O formato do e-mail é inválido.";
      } else if (error.code === "auth/weak-password") {
        mensagemErro = "A senha deve ter pelo menos 6 caracteres.";
      }

      Alert.alert("Falha no Cadastro", mensagemErro);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableOpacity>

          <View style={styles.header}>
            <Text style={styles.title}>Criar conta</Text>
            <Text style={styles.subtitle}>Preencha seus dados</Text>
          </View>

          <View style={styles.form}>
            <Text style={styles.label}>Nome completo</Text>
            <View style={styles.inputContainer}>
              <Ionicons
                name="person-outline"
                size={20}
                color="#8E8E93"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="João Silva"
                placeholderTextColor="#8E8E93"
                value={nome}
                onChangeText={setNome}
              />
            </View>

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
                placeholder="joao@email.com"
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

            <Text style={styles.label}>Confirmar senha</Text>
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
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
              />
            </View>

            <TouchableOpacity
              style={styles.primaryButton}
              onPress={handleCadastro}
              disabled={carregando}
            >
              {carregando ? (
                <ActivityIndicator color="#FFF" />
              ) : (
                <Text style={styles.primaryButtonText}>Criar conta</Text>
              )}
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.footer}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.footerText}>
              Já tem conta? <Text style={styles.footerTextBold}>Entrar</Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#0B0B14" },
  flex: { flex: 1 },
  scrollContainer: { flexGrow: 1, paddingHorizontal: 24, paddingBottom: 20 },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
  },
  backButtonText: { color: "#FFFFFF", fontSize: 16, marginLeft: 8 },
  header: { marginBottom: 30 },
  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: { color: "#8E8E93", fontSize: 16 },
  form: { marginBottom: 20 },
  label: { color: "#FFFFFF", fontSize: 14, marginBottom: 8, fontWeight: "500" },
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
  icon: { marginRight: 12 },
  input: { flex: 1, color: "#FFFFFF", fontSize: 16 },
  primaryButton: {
    backgroundColor: "#B829EA",
    borderRadius: 12,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 24,
  },
  primaryButtonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "bold" },
  footer: { alignItems: "center", marginTop: "auto", paddingVertical: 20 },
  footerText: { color: "#8E8E93", fontSize: 14 },
  footerTextBold: { color: "#B829EA", fontWeight: "bold" },
});
