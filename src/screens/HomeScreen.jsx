import { View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function HomeScreen({ navigation }) {
    return (
        <View>
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