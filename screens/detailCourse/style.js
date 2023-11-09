import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 80,
        margin: 20
    },
    bgImage: {
        width: '100%',
        // height: '80%',
        borderRadius: 30,
    },
    topBg: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconBg: {
        padding: 8,
        backgroundColor: '#0000003D',
        borderRadius: 30,
        margin: 20
    },
    bottomBg: {
        flexDirection: 'column',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 21.38,
        padding: 20,
        marginTop: 150,
    },
    titleCourse: {
        fontSize: 30,
        color: '#fff',
        textAlign: 'left',
        marginBottom: 3
    },
    captionCourse: {
        fontSize: 15,
        color: '#fff',
        textAlign: 'left',
    },
    descriptionSection: {
        margin: 10,
        marginTop: 20,
    },
    titleDescription: {
        fontSize: 30,
        fontWeight: '500',
        marginBottom: 16,
    },

    // Profile section
    profileSection: {
        marginVertical: 30,
        flexDirection: 'row',
    },
    profilePic: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    profileIcon: {
        includeFontPadding: false,
        marginTop: 50,
        marginLeft: 10,
    },
    // galery section
    galerySection: {
        margin: 10,
        marginTop: 20,
    },
    galeryImg: {
     borderRadius: 15   
    },

    // price section
    priceSection: {
        margin: 10,
        marginTop: 100,
        flexDirection: 'row',
        justifyContent: 'space-between'
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
    ambilBtn: {
        // width: 100,
        // height: 50,
        padding: 10,
        width: 110,
        backgroundColor: 'fff',
        borderRadius: 15,
        marginTop: 15
    },
    textAmbil: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 20,
        textAlign: 'center',
    }
})

export default styles;