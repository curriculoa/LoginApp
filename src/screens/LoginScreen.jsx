import { useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";
import { View } from "react-native";
import { styles } from "../config/styles";

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    function realizaLogin() { console.log("Fazer Login"); }

    return (
        <View style={styles.container}>
            <Text>Faca seu login</Text>

            <Text>Email:</Text>
            <TextInput placeholder="Digite seu e-mail"
                onChangeText={setEmail}
                value={email}>
            </TextInput>
       
            <Text>Senha:</Text>
            <TextInput placeholder="Digite sua senha"
                onChangeText={setSenha}
                value={senha}
                secureTextEntry >
            </TextInput>

            <Button onPress={realizaLogin}>
                Fazer Login
            </Button>

            <Button onPress={() => navigation.navigate("RegisterScreen")}>
                Faça seu cadastro
            </Button>

            <Button
                onPress={() => {
                    navigation.navigate("HomeScreen") // quem é navigation?
                }}>
                    Home
            </Button>
        </View>
    );
}