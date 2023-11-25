import React from "react";
import { Image } from "react-native";
import { styles } from "./RoundedImageStyle";

export default function RoundedImage({ source }){
    return (
        <Image source={source} style={styles.roundedImage} />
    );
}