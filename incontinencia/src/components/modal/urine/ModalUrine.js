import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { styles } from './ModalUrineStyles';

const ModalUrine = ({ isVisible, onClose, onColorSelect }) => {
    const [colorUrine, setColorUrine] = useState(null);

    const handleColorSelection = (color) => {
        setColorUrine(color);
        onColorSelect(color); // Agora, enviamos a própria cor como infoValue
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                    <FontAwesomeIcon style={styles.iconButton} icon={faTimesCircle} />
                </TouchableOpacity>
                <View style={styles.modalBackground}>
                    <Text style={styles.titlePopup}>Cor da Urina:</Text>
                    <View style={styles.modalContent}>
                        <View style={styles.column}>
                            <TouchableOpacity
                                style={[styles.modalButton, styles.urineTransparent]}
                                onPress={() => {
                                    handleColorSelection('Transparente');
                                    onClose();
                                }}
                            >
                                <Text style={styles.popUpText}>Transparente</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.modalButton, styles.urineYellowLigth]}
                                onPress={() => {
                                    handleColorSelection('Amarelo Claro');
                                    onClose();
                                }}
                            >
                                <Text style={styles.popUpText}>Amarelo Claro</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.modalButton, styles.urineYellowDark]}
                                onPress={() => {
                                    handleColorSelection('Amarelo Escuro');
                                    onClose();
                                }}
                            >
                                <Text style={styles.popUpText}>Amarelo Escuro</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.column}>
                            <TouchableOpacity
                                style={[styles.modalButton, styles.urineOrange]}
                                onPress={() => {
                                    handleColorSelection('Laranja');
                                    onClose();
                                }}
                            >
                                <Text style={styles.popUpText}>Laranja</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.modalButton, styles.urineReddish]}
                                onPress={() => {
                                    handleColorSelection('Avermelhada');
                                    onClose();
                                }}
                            >
                                <Text style={styles.popUpText}>Avermelhada</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.modalButton, styles.urineBrown]}
                                onPress={() => {
                                    handleColorSelection('Marrom');
                                    onClose();
                                }}
                            >
                                <Text style={styles.popUpText}>Marrom</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ModalUrine;
