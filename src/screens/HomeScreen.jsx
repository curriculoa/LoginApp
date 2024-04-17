import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { styles } from "../config/styles";

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button
                onPress={() => {
                    navigation.navigate("LoginScreen");
                }}
            >
                Logar-se
            </Button>
        </View>
    );
}