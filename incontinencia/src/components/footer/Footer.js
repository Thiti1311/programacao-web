import React from "react";
import { View, Text} from "react-native";

import { styles } from "./FooterStyle"

export default function Footer(){
    return (
        <View style={styles.bottom}>
            <Text style={styles.infoText}>Desenvolvida por: Thiago Felipe Viana Diniz</Text>
            <Text style={styles.infoText}>Idealizada por: Maria Clara Gomes Guedes</Text>
            <Text style={styles.infoText}>© 2023</Text>
        </View>
    )
}