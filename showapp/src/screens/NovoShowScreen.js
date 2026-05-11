import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const CLOUD_NAME = "dmzdsr0af";
const UPLOAD_PRESET = "aula7_ReactNative";
const GENEROS = ["Rock", "Pop", "Jazz", "Eletrônico", "Funk", "Sertanejo"];

export default function NovoShowScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [local, setLocal] = useState("");
  const [generoSelecionado, setGeneroSelecionado] = useState("");

  const [imagemUri, setImagemUri] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleSelecionarImagem = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Aviso", "Precisamos da permissão para acessar suas fotos.");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"], 
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.7,
    });

    if (!result.canceled) {
      uploadParaCloudinary(result.assets[0]);
    }
  };

  const uploadParaCloudinary = async (photo) => {
    setUploading(true);
    const dataForm = new FormData();

    dataForm.append("file", {
      uri: photo.uri,
      type: "image/jpeg",
      name: "banner.jpg",
    });
    dataForm.append("upload_preset", UPLOAD_PRESET);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: dataForm,
        },
      );
      const result = await res.json();

      if (result.secure_url) {
        setImagemUri(result.secure_url);
      } else {
        Alert.alert("Erro", "Falha ao enviar a imagem.");
      }
    } catch (error) {
      Alert.alert("Erro", "Verifique sua conexão.");
    } finally {
      setUploading(false);
    }
  };

  const handleSalvarShow = () => {
    if (!nome || !data || !generoSelecionado || !imagemUri) {
      Alert.alert(
        "Atenção",
        "Preencha os campos principais e adicione uma foto.",
      );
      return;
    }

    const novoShow = {
      nome,
      data,
      hora,
      local,
      genero: generoSelecionado,
      imagem: imagemUri,
    };

    console.log("Show a ser salvo:", novoShow);

    Alert.alert("Sucesso", "Show cadastrado com sucesso!", [
      { text: "OK", onPress: () => navigation.goBack() },
    ]);
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
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
              <Text style={styles.backButtonText}>Voltar</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Novo show</Text>
            <View style={{ width: 70 }} />
          </View>

          <TouchableOpacity
            style={styles.imagePickerBox}
            onPress={handleSelecionarImagem}
          >
            {uploading ? (
              <ActivityIndicator size="large" color="#B829EA" />
            ) : imagemUri ? (
              <Image source={{ uri: imagemUri }} style={styles.bannerImage} />
            ) : (
              <>
                <Ionicons name="image-outline" size={40} color="#8E8E93" />
                <Text style={styles.imagePickerText}>Foto/banner do show</Text>
              </>
            )}
          </TouchableOpacity>

          <View style={styles.form}>
            <Text style={styles.label}>Nome do show</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Rock in Rio"
              placeholderTextColor="#8E8E93"
              value={nome}
              onChangeText={setNome}
            />

            <View style={styles.row}>
              <View style={styles.halfInput}>
                <Text style={styles.label}>Data</Text>
                <TextInput
                  style={styles.input}
                  placeholder="DD/MM"
                  placeholderTextColor="#8E8E93"
                  value={data}
                  onChangeText={setData}
                />
              </View>
              <View style={styles.halfInput}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  placeholder="HH:MM"
                  placeholderTextColor="#8E8E93"
                  value={hora}
                  onChangeText={setHora}
                />
              </View>
            </View>

            <Text style={styles.label}>Local/cidade</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Rio de Janeiro"
              placeholderTextColor="#8E8E93"
              value={local}
              onChangeText={setLocal}
            />

            <Text style={styles.label}>Gênero</Text>
            <View style={styles.genresContainer}>
              {GENEROS.map((gen) => (
                <TouchableOpacity
                  key={gen}
                  style={[
                    styles.genrePill,
                    generoSelecionado === gen && styles.genrePillActive,
                  ]}
                  onPress={() => setGeneroSelecionado(gen)}
                >
                  <Text
                    style={[
                      styles.genreText,
                      generoSelecionado === gen && styles.genreTextActive,
                    ]}
                  >
                    {gen}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity
              style={styles.primaryButton}
              onPress={handleSalvarShow}
            >
              <Text style={styles.primaryButtonText}>Salvar show</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#0B0B14" },
  flex: { flex: 1 },
  scrollContainer: { flexGrow: 1, paddingHorizontal: 20, paddingBottom: 30 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 24,
  },
  backButton: { flexDirection: "row", alignItems: "center", width: 70 },
  backButtonText: { color: "#FFFFFF", fontSize: 16, marginLeft: 4 },
  title: { color: "#FFFFFF", fontSize: 20, fontWeight: "bold" },

  imagePickerBox: {
    height: 180,
    backgroundColor: "#161622",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#2A2A35",
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    overflow: "hidden",
  },
  imagePickerText: { color: "#8E8E93", marginTop: 10, fontSize: 16 },
  bannerImage: { width: "100%", height: "100%", resizeMode: "cover" },

  form: { flex: 1 },
  label: { color: "#FFFFFF", fontSize: 14, marginBottom: 8, fontWeight: "500" },
  input: {
    backgroundColor: "#161622",
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 20,
    height: 56,
    borderWidth: 1,
    borderColor: "#2A2A35",
    color: "#FFFFFF",
    fontSize: 16,
  },
  row: { flexDirection: "row", justifyContent: "space-between" },
  halfInput: { width: "48%" },

  genresContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 30,
  },
  genrePill: {
    backgroundColor: "#161622",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#2A2A35",
  },
  genrePillActive: { backgroundColor: "#B829EA", borderColor: "#B829EA" },
  genreText: { color: "#8E8E93", fontSize: 14, fontWeight: "500" },
  genreTextActive: { color: "#FFFFFF", fontWeight: "bold" },

  primaryButton: {
    backgroundColor: "#B829EA",
    borderRadius: 12,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  primaryButtonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "bold" },
});
