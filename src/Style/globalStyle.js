import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        padding: 24,
        backgroundColor: 'black',
        justifyContent: 'center', alignContent: 'center'
    },
    inputStyle: {
        height: 48,
        borderWidth: 1,
        borderColor: 'gray',
        color: 'white',
        paddingHorizontal: 16,
        marginLeft: 20,
        marginRight: 20,
        fontFamily: 'Montserrat'
    },
    inputView: {
        flexDirection: 'row',
        marginTop: 20,
        padding: 10,
        fontSize: 25,
        borderColor: '#d3d3d3',
        borderWidth: 5,
        borderRadius: 10,
        marginLeft: 15,
        marginRight: 15,
         fontFamily: 'Montserrat'

    },
    btnStyle: {
        height: 48,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        paddingHorizontal: 16
    },
    textStyle: {
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: 'white',
         fontFamily: 'Montserrat'
    },
    horizontalView: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end'
    },
    secondScreenHeader:{ color: '#FFFF00', justifyContent: 'center', alignSelf: 'center', fontFamily: 'Montserrat' }
})