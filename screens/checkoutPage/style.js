import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    parentContainer: {
        backgroundColor: '#fff',
        flex: 1
    },
    container: {
        margin: 30,
    },
    promoInfo: {
        padding: 10,
        fontWeight: 'bold', 
        color: '#fff', 
        fontSize: 17, 
        backgroundColor: '#0079ff', 
        borderRadius: 15,
        marginBottom: 15,
    },
    titleCourse: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#0A8ED9'
    },
    titlePrice: {
        fontSize: 20,
        fontWeight: '300'
    },
    price: {
        fontWeight: '500',
        fontSize: 20,
        marginTop: 10
    },
    label: {
        fontWeight: '500',
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 10
    },
    input: {
        borderRadius: 15,
        height: 50,
        borderColor: '#333',
    },
    inputText: {
        fontSize: 20,
        color: '#fff',
        paddingLeft: 15,
        marginTop: 5
    },
    totalSection: {
        marginLeft: 25,
        marginTop: 30
    },
    jumlahPaket: {
        fontSize: 15,
        fontWeight: '500',
        marginVertical: 5,
    },
    totalPembayaran: {
        fontSize: 12,
        fontWeight: '300',
        marginTop: 30
    },
    totPrice: {
        fontWeight: 'bold',
        fontSize: 27,
        marginVertical: 5,
        color: '#0079ff'
    },
    btn: {
        padding: 25,
        width: 150,
        borderRadius: 30,
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
        textAlign: 'center'
    },
    loadingText: {
        fontWeight: 'bold',
        fontSize: 9,
        color: '#fff',
        textAlign: 'center'
    }
});

export default styles;