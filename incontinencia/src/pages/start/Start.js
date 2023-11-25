import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, Text } from "react-native";
import RoundedImage from "../../components/roundedImage/RoundedImage";

import { styles } from "./StartStyle.js";
import "./Start.css";
import logo from "./../../assets/logo.jpg";

export default function Start() {
  const navigation = useNavigation();

  function navigateToLogin() {
    navigation.navigate("Login");
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToLogin} style={styles.container}>
        <Text style={styles.h1}>Urinare - Diário Miccional</Text>
        <html>
          <body>
            <div class="container">
              <div class="loader">
                <div class="loader-circle"></div>
              </div>
              <RoundedImage source={logo} />
            </div>
          </body>
        </html>
      </TouchableOpacity>
    </View>
  );
}
