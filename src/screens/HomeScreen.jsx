import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "../config/styles";

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Meu App</Text>
            </View>
            <View style={styles.content}>
                <Text>Conteúdo da Página</Text>
                <Button
                    onPress={() => {
                        navigation.navigate("LoginScreen");
                    }}
                >
                    Logar-se
                </Button>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>© 2024 Meu App Inc.</Text>
            </View>
        </View>
    );
}
