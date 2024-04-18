import React, { useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";
import { View } from "react-native";
import { styles } from "../config/styles";

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function realizaLogin() {
        console.log("Fazer Login");
        // Adicione aqui a lógica para realizar o login com o email e senha
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Faça seu login</Text>
            </View>
            <View style={styles.content}>
                <Text>Email:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu e-mail"
                    onChangeText={setEmail}
                    value={email}
                />
                <Text>Senha:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    onChangeText={setSenha}
                    value={senha}
                    secureTextEntry
                />
                <Button style={styles.button} onPress={realizaLogin}>
                    Fazer Login
                </Button>
                <Button
                    style={styles.button}
                    onPress={() => navigation.navigate("RegisterScreen")}
                >
                    Faça seu cadastro
                </Button>
            </View>
            <View style={styles.footer}>
                <Button
                    style={styles.footerButton}
                    onPress={() => navigation.navigate("HomeScreen")}
                >
                    Home
                </Button>
            </View>
        </View>
    );
}
