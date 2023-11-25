import { StyleSheet } from  'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 100,
        paddingTop: '15px'
    },

    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center',
        padding: 5,
        margin: 5,
        gap: 5,
    },

    button: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%',
    },

    buttonText: {
        color: 'white',
        fontFamily: 'Helvetica, sans-serif',
        fontWeight: 'bold',
        fontSize: 25,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        display: 'flex',
        textDecorationLine: 'none',
        padding: 20,
        textShadow: '0px 1px 0px #000',
        filter: 'drop-shadow(color=#000, offx=0px, offy=1px)',
        boxShadow: 'inset 0 1px 0 #FFE5C4, 0 10px 0 #915100',
        borderRadius: 5,
    },

    buttonTextActive: {
        top: 10,
        backgroundColor: '#F78900',
        boxShadow: 'inset 0 1px 0 #FFE5C4, inset 0 -3px 0 #915100',
    },

    buttonAfter: {
        content: '',
        height: '100%',
        width: '100%',
        padding: 4,
        position: 'absolute',
        bottom: -15,
        left: -4,
        zIndex: -1,
        backgroundColor: '#012547',
        borderRadius: 5,
    },

    buttonTest: {
        backgroundColor: "#c6d8f0",
        padding: 10,
        borderRadius: 50,
        textAlign: 'center',
        width: '100%',
        marginBottom: 20,
    },

    firstButton: {
        backgroundColor: '#1E90FF'
    },

    secondButton: {
        backgroundColor: '#edcd4b'
    },

    thirdButton: {
        backgroundColor: '#FF7F50'
    },

    infoText: { 
        border: '3px solid #ccc',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        display: 'flex',
        width: '90px',
        height: '90px',
        color: 'black'
    },      

    infoIcon: {
        width: 30,
        height: 30,
    },

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
    
});