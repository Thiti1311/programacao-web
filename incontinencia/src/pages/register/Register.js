import React, { useState, useRef } from "react";
import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { styles } from "./../login/LoginStyle";
import logo from "./../../assets/telaLogin.jpeg";
import RoundedImage from "./../../components/roundedImage/RoundedImage";
import axios from 'axios';

export default function Register() {
    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const passwordInputRef = useRef(null);

    async function handleRegister() {
        try {
          const response = await axios.post('http://localhost:3001/register', {
            name,
            email,
            password
          });
      
          if (response.data.success) {
            navigateToNext("InformationUser");
            console.log('Registro bem-sucedido!');
          } else {
            console.error('Erro no registro:', response.data.error);
          }
        } catch (error) {
          console.error('Erro ao fazer a chamada para o backend:', error);
        }
      }


    function navigateToNext() {
        // Navegue para a próxima tela após o cadastro
        navigation.navigate("InformationUser");
    }

    function navigateToBack() {
        // Navegue de volta para a tela inicial
        navigation.navigate("Start");
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={navigateToBack}></TouchableOpacity>
            <RoundedImage source={logo} />
            <View style={styles.center}>
                <View style={styles.inputContainer}>
                    <FontAwesomeIcon style={styles.iconsInput} icon={faUserAlt} />
                    <TextInput
                        placeholder="Nome"
                        style={styles.input}
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <FontAwesomeIcon style={styles.iconsInput} icon={faUserAlt} />
                    <TextInput
                        placeholder="Email / Telefone"
                        style={styles.input}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <FontAwesomeIcon style={styles.iconsInput} icon={showPassword ? faLockOpen : faLock} />
                    <TextInput
                        placeholder="Senha"
                        secureTextEntry={!showPassword}
                        style={styles.input}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        ref={passwordInputRef}
                    />
                    <TouchableOpacity
                        style={styles.icon}
                        onPress={() => {
                            setShowPassword(!showPassword);
                            if (passwordInputRef.current) {
                                passwordInputRef.current.focus();
                            }
                        }}
                    >
                        <FontAwesomeIcon icon={showPassword ? faLockOpen : faLock} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={handleRegister} style={styles.button}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
