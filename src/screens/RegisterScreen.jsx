import React, { useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";
import { View } from "react-native";
import { styles } from "../config/styles"; // Importação do objeto styles

export default function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [repetirSenha, setRepetirSenha] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [cep, setCep] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [emailError, setEmailError] = useState("");
    const [senhaError, setSenhaError] = useState("");
    const [repetirSenhaError, setRepetirSenhaError] = useState("");
    const [cepError, setCepError] = useState("");
    const [logradouroError, setLogradouroError] = useState("");
    const [cidadeError, setCidadeError] = useState("");
    const [estadoError, setEstadoError] = useState("");

    function realizaRegistro() {
        setEmailError(email === "" ? "Campo obrigatório" : "");
        setSenhaError(senha === "" ? "Campo obrigatório" : "");
        setRepetirSenhaError(repetirSenha === "" ? "Campo obrigatório" : "");
        setCepError(cep === "" ? "Campo obrigatório" : "");
        setLogradouroError(logradouro === "" ? "Campo obrigatório" : "");
        setCidadeError(cidade === "" ? "Campo obrigatório" : "");
        setEstadoError(estado === "" ? "Campo obrigatório" : "");

        if (email !== "" && senha !== "" && repetirSenha !== "" && cep !== "" && logradouro !== "" && cidade !== "" && estado !== "") {
            console.log("Registro completo");
            // Adicione a lógica para registrar o usuário aqui
        } else {
            console.log("Preencha todos os campos");
        }
    }

    function buscaCep() {
        console.log("Buscar CEP");
        let cepLimpo = cep.replace("-", "").trim();
        fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
            .then((res) => res.json())
            .then((dados) => {
                console.log(dados);
                setLogradouro(dados.logradouro);
                setCidade(dados.localidade);
                setEstado(dados.uf);
            })
            .catch((error) => {
                console.error("Erro ao buscar CEP:", error);
            });
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Button
                    onPress={() => navigation.navigate('Home')} // Navegação de volta para a tela inicial
                    title="Home"
                    style={styles.button}
                />
                <Text style={styles.headerText}>Cadastro</Text>
            </View>
            <View style={styles.content}>
                <Text>Seu e-mail:</Text>
                <Text style={styles.errorText}>{emailError}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu e-mail"
                    onChangeText={setEmail}
                    value={email}
                />
                <Text>Sua senha:</Text>
                <Text style={styles.errorText}>{senhaError}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    onChangeText={setSenha}
                    value={senha}
                    secureTextEntry
                />
                <Text>Confirme sua senha:</Text>
                <Text style={styles.errorText}>{repetirSenhaError}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Confirme sua senha"
                    onChangeText={setRepetirSenha}
                    value={repetirSenha}
                    secureTextEntry
                />
                <Text>Seu logradouro:</Text>
                <Text style={styles.errorText}>{logradouroError}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu logradouro"
                    onChangeText={setLogradouro}
                    value={logradouro}
                />
                <Text>Seu CEP:</Text>
                <Text style={styles.errorText}>{cepError}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu CEP"
                    onChangeText={setCep}
                    onBlur={buscaCep}
                    value={cep}
                />
                <Text>Sua cidade:</Text>
                <Text style={styles.errorText}>{cidadeError}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua cidade"
                    onChangeText={setCidade}
                    value={cidade}
                />
                <Text>Seu estado:</Text>
                <Text style={styles.errorText}>{estadoError}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu estado"
                    onChangeText={setEstado}
                    value={estado}
                />
                <Button
                    style={styles.button}
                    onPress={realizaRegistro}
                >
                    Registrar
                </Button>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>© 2024 Meu App Inc.</Text>
            </View>
        </View >
    );
}
