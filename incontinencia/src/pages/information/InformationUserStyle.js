import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: 150,
        height: 150,
        margin: 5, 
    },
    quest: {
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 10,
        marginBottom: 10,
    },
    containerButtons: {
        margin: 10,
    },
    
    textButtonWithIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 50,
        padding: 10,
        backgroundColor: 'transparent',
        width: Dimensions.get("window").width * 0.9,
        marginBottom: 20,
    },

    iconButton: {
        color: "black",
        marginRight: 10,
        fontSize: 30
    },
    textInput: {
        flex: 1,
        color: "black",
        fontSize: 14, // Aumentei o tamanho da fonte
    },

    buttonTest: {
        backgroundColor: "#c6d8f0",
        padding: 10,
        borderRadius: 50,
        textAlign: 'center',
        width: Dimensions.get("window").width * 0.9,
        marginBottom: 20,
    },

    buttonAndSound: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 5,
    },

    buttonWithIcon: {
        flexDirection: "row",
        alignItems: "center",
    },

    iconSound: {
        color: "black",
        marginRight: 10,
    },
});
