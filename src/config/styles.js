import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "whitesmoke",
    },
    header: {
        height: 60,
        backgroundColor: "dodgerblue",
        justifyContent: "center",
        alignItems: "center",
    },
    headerText: {
        fontSize: 24,
        color: "white",
        fontWeight: "bold",
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    footer: {
        height: 40,
        backgroundColor: "dodgerblue",
        justifyContent: "center",
        alignItems: "center",
    },
    footerText: {
        fontSize: 14,
        color: "white",
    },
    // Se precisar dos estilos anteriores, mantenha-os aqui
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    input: {
        width: "100%",
        height: 40,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    errorText: {
      color: "red",
      marginBottom: 5,
  },
  
});
