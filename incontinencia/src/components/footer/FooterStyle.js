import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({

    bottom: {
        display: "flex",
        alignItems: "center",
        paddingTop: Dimensions.get("window").height * 0.10,
        paddingBottom: 10, // Ajuste isso para a margem inferior desejada
        textAlign: "center", // Centralizar o texto
    },
    
    infoText: {
        fontSize: 11,
        color: "gray",
        marginBottom: 10, // Espaço entre os elementos de informações
    }
});