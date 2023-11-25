import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { styles } from './ModalEscapeStyles';
import ModalOther from './../other/ModalOther';

const ModalEscape = ({ isVisible, onCloseUrine, onReasonSelect }) => {
    const [isVisibleOther, setIsVisibleOther] = useState(false);

    const openModalOther = () => {
        setIsVisibleOther(true);
    };

    const closeModalOther = () => {
        setIsVisibleOther(false);
    };

    const handleReasonSelection = (reason) => {
        onReasonSelect(reason);
        onCloseUrine(); // Feche o modal após a seleção
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onCloseUrine}
        >
            <View style={styles.modalContainer}>
                <TouchableOpacity style={styles.closeButton} onPress={onCloseUrine}>
                    <FontAwesomeIcon style={styles.iconButton} icon={faTimesCircle} />
                </TouchableOpacity>
                <View style={styles.modalBackground}>
                    <Text style={styles.titlePopup}>Conte um pouco sobre o motivo do vazamento:</Text>
                    <View style={styles.modalContent}>
                        <View style={styles.column}>
                            <TouchableOpacity
                                style={styles.modalButton}
                                onPress={() => handleReasonSelection('Espirro')}
                            >
                                <Text style={styles.popUpText}>Espirro</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.modalButton}
                                onPress={() => handleReasonSelection('Esforço')}
                            >
                                <Text style={styles.popUpText}>Esforço</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.modalButton}
                                onPress={() => handleReasonSelection('Susto')}
                            >
                                <Text style={styles.popUpText}>Susto</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.column}>
                            <TouchableOpacity
                                style={styles.modalButton}
                                onPress={() => handleReasonSelection('Atividade com Impacto')}
                            >
                                <Text style={styles.popUpText}>Atividade com Impacto</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.modalButton}
                                onPress={() => handleReasonSelection('Não sei')}
                            >
                                <Text style={styles.popUpText}>Não sei</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.modalButton}
                                onPress={() => handleReasonSelection('Outro')}
                                //onPress={() => openModalOther()}
                            >
                                <Text style={styles.popUpText}>Outro</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

            <ModalOther
                style={styles.modalContainer}
                isVisible={isVisibleOther}
                onClose={closeModalOther}
            />
        </Modal>
    );
};

export default ModalEscape;
