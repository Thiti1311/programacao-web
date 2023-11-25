import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { styles } from './ModalOtherStyles';

const ModalOther = ({ isVisible, onCloseOther }) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onCloseOther}
        >
        <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={onCloseOther}>
          <FontAwesomeIcon style={styles.iconButton} icon={faTimesCircle} />
        </TouchableOpacity>
          <View style={styles.modalBackground}>
            <Text style={styles.titlePopup}>Conte um pouco sobre o motivo do vazamento:</Text>
            <View style={styles.modalContent}>
              <View style={styles.column}>
                <TouchableOpacity style={styles.modalButton}>
                  <Text style={styles.popUpText}>Espirro</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButton}>
                  <Text style={styles.popUpText}>Esforço</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButton}>
                  <Text style={styles.popUpText}>Susto</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.column}>
                <TouchableOpacity style={styles.modalButton} >
                  <Text style={styles.popUpText}>Atividade com Impacto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButton} >
                  <Text style={styles.popUpText}>Não sei</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>    
    );
};

export default ModalOther;
