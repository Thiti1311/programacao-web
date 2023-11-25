import { StyleSheet } from  'react-native';

export const styles = StyleSheet.create({
    // Estilos do modal
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    closeButton: {
      position: 'absolute',
      top: 10,
      right: 10,
    },
    iconButton: {
      fontSize: 25,
      color: 'red',
    },
    modalBackground: {
        backgroundColor: '#D3D3D3',
        justifyContent: 'center',
        alignItems: 'center',
      padding: 20,
      borderRadius: 50,
      width: '80%',
      height: '80%',
    },
    modalContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '90%'
    },
    titlePopup: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    popUpText: {
      fontSize: 16,
      textAlign: 'center',
      justifyContent: 'center'
    },
    popUpTextInfo: {
      fontSize: 16,
      textAlign: 'center',
      justifyContent: 'center',
    },
    corpusPositive: {
      backgroundColor: "#228b22",
      padding: 10,
      borderRadius: 50,
      width: '90%',
      border: '1px solid #000000',
    },
    corpusNegative: {
      backgroundColor: "#cf1608",
      padding: 10,
      borderRadius: 50,
      width: '90%',
      border: '1px solid #000000',
    }
  });
  