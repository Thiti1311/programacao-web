import { StyleSheet } from  'react-native';

export const styles = StyleSheet.create({

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%'
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
        backgroundColor: '#A9A9A9',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
        width:'90%'
    }
})