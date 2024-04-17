import { View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { useState } from "react";
import { styles } from "../config/styles";
 
export default function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [repetirSenha, setRepetirSenha] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [cep, setCep] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    // Nome, Email, Senha, Repetir Senha
    // Endereço: Logradouro, CEP, Cidade, Estado
    return (
        <View style={styles.container}>
            <Text>Faça seu Registro:</Text>
            <TextInput placeholder="Digite seu gmail" onChangeText={setEmail} value={email}>
 
            </TextInput>
            <Text>Senha:</Text>
            <TextInput placeholder="Digite seu senha" onChangeText={setSenha} value={senha}>
 
            </TextInput>
            <Text>Confirme a senha:</Text>
            <TextInput placeholder="Confirme a senha" onChangeText={setRepetirSenha} value={repetirSenha}>
 
            </TextInput>
            <Text>Onde você mora:</Text>
            <TextInput placeholder="Digite seu logradouro" onChangeText={setLogradouro} value={logradouro}>
 
            </TextInput>
            <Text>Seu CEP:</Text>
            <TextInput placeholder="Digite seu cep" onChangeText={setCep} value={cep}>
 
            </TextInput>
            <Text>Sua cidade:</Text>
            <TextInput placeholder="Digite sua cidade" onChangeText={setCidade} value={cidade}>
 
            </TextInput>
            <Text>Seu estado:</Text>
            <TextInput placeholder="Digite seu estado" onChangeText={setEstado} value={estado}>
 
            </TextInput>
        </View>
    );
}