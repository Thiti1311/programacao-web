import { StyleSheet } from  'react-native';

export const styles = StyleSheet.create({

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },

    modalContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
    },

    column: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    modalButton: {
        padding: 10,
        marginBottom: 10,
        borderRadius: 50,
        width: '90%',
        border: '1px solid #000000',
    },

    urineTransparent: {
        backgroundColor: 'transparent'
    },

    urineYellowLigth: {
        backgroundColor: '#F0E68C'
    },

    urineYellowDark: {
        backgroundColor: '#FFD700'
    },
    urineOrange: {
        backgroundColor: '#FF4500'
    },

    urineBrown: {
        backgroundColor: '#A0522D'
    },

    urineReddish: {
        backgroundColor: '#F08080'
    },

    closeButton: {
        marginTop: 20,
        alignSelf: 'end',
        padding: 10,
        borderRadius: 5,
    },

    iconButton: {
        fontSize: '35px'
    },  

    popUpText: {
        textAlign: 'center'
    },

    titlePopup: {
        color: 'black',
    },

    modalBackground: {
        padding: 20,
        borderRadius: 50,
        backgroundColor: '#D3D3D3',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
        width:'90%'
    }
})