import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faRestroom, faExclamationCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { styles } from './ModalDataStyles';
import axios from 'axios';

const CustomModal = ({ isVisible, onClose, userEmail }) => {
    const [section, setSection] = useState(1);
    const [updatedWaterCount, setUpdatedWaterCount] = useState(0);
    const [updatedBathroomCount, setUpdatedBathroomCount] = useState(0);
    const [updatedLeakageCount, setUpdatedLeakageCount] = useState(0);

    const chooseSection = () => {
        return 1;
    };

    const getSectionIcon = () => {
        switch (section) {
            case 1:
                return faTint;
            case 2:
                return faRestroom;
            case 3:
                return faExclamationCircle;
            default:
                return faTimesCircle;
        }
    };

    async function sendUserDataToBackend() {
        try {
            const response = await axios.get(`http://localhost:3001/total-count/${userEmail}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.data.success) {
                const totals = response.data.data;

                // Atualize os estados com as somas recebidas do backend
                setUpdatedWaterCount(totals.totalWater || 0);
                setUpdatedBathroomCount(totals.totalBathroom || 0);
                setUpdatedLeakageCount(totals.totalLeakage || 0);

                console.log('Dados do backend:', totals);
            } else {
                console.error('Erro na chamada para o backend:', response.data.error);
            }
        } catch (error) {
            console.error('Erro ao fazer a chamada para o backend:', error);
        }
    }

    useEffect(() => {
        setSection(chooseSection());
        sendUserDataToBackend(); // Chama a função para enviar dados ao backend quando o componente é montado
    }, [userEmail]);

    useEffect(() => {
        setSection(chooseSection());

        // Chama a função para enviar dados ao backend quando o modal é aberto
        if (isVisible) {
            sendUserDataToBackend();
        }
    }, [isVisible]);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                    <FontAwesomeIcon style={styles.iconButton} icon={getSectionIcon()} />
                </TouchableOpacity>
                <View style={styles.modalBackground}>
                    <View style={styles.modalContent}>
                        <Text style={styles.titlePopup}>Consumo de Água</Text>
                        <Text style={styles.popUpText}>
                            {updatedWaterCount >= 14
                                ? 'Parabéns! Você conseguiu beber a quantidade recomendada de água esta semana, continue assim. Seu corpo agradece!'
                                : 'Eita! Você não bebeu a quantidade recomendada de água esta semana. Vamos tentar melhorar! Siga as recomendações.'}
                        </Text>
                        <View style={updatedWaterCount >= 14 ? styles.corpusPositive : styles.corpusNegative}>
                            <Text style={styles.popUpTextInfo}>{`Total de Litros de Água: ${(updatedWaterCount * 250) / 1000} L`}</Text>
                            <Text style={styles.popUpTextInfo}>{`Média Diária: ${Math.round((updatedWaterCount / 7) * 250) / 1000} L/dia`}</Text>
                        </View>
                    </View>

                    <View style={styles.modalContent}>
                        <Text style={styles.titlePopup}>Idas ao Banheiro</Text>
                        <Text style={styles.popUpText}>
                            {updatedBathroomCount >= 21
                                ? 'Parabéns! Você conseguiu fazer xixi com a quantidade recomendada e de forma adequada, continue assim. Seus rins agradecem!'
                                : 'Eita! Você não fez xixi com a quantidade recomendada e de forma adequada. Vamos tentar melhorar! Siga as recomendações.'}
                        </Text>
                        <View style={updatedBathroomCount >= 21 ? styles.corpusPositive : styles.corpusNegative}>
                            <Text style={styles.popUpTextInfo}>{`Total de Litros de Xixi: ${(updatedBathroomCount * 300) / 1000} L`}</Text>
                            <Text style={styles.popUpTextInfo}>{`Média Diária: ${Math.round((updatedBathroomCount / 7) * 300) / 1000} L/dia`}</Text>
                        </View>
                    </View>

                    <View style={styles.modalContent}>
                        <Text style={styles.titlePopup}>Vazamento de Xixi</Text>
                        <Text style={styles.popUpText}>
                            {updatedLeakageCount < 14
                                ? 'Parabéns! Você conseguiu reduzir o número de xixi perdido, continue assim!'
                                : 'Eita! Você aumentou o número de xixi perdido. Vamos tentar melhorar! Siga as recomendações.'}
                        </Text>
                        <View style={updatedLeakageCount < 14 ? styles.corpusPositive : styles.corpusNegative}>
                            <Text style={styles.popUpTextInfo}>{`Total de Vazamentos: ${updatedLeakageCount}`}</Text>
                            <Text style={styles.popUpTextInfo}>{`Média Diária: ${Math.round(updatedLeakageCount / 7)} vazamentos/dia`}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default CustomModal;
