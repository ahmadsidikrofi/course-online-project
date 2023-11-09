import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    miniTitleContainer: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    miniTitle: {
        fontSize: 15,
        fontWeight: '300'
    },
    tipeKategoriContainer: {
        marginTop: 0
    },
    tipeKategori: {
        fontSize: 25,
    },
    searchCourseContainer: {
        marginVertical: 25,
        flexDirection: 'row',
        gap: 10
    },
    searchCourseInput: {
        padding: 20,
        backgroundColor: '#f7f7f7',
        borderRadius: 20,
        flexDirection: 'row',
        gap: 15,
        width: '80%'
    },
    filterContainer: {
        padding: 20,
    },
    carouselCategory: {
        flexDirection: 'row',
        gap: 10
    },
    categoryType: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 15,
        width: 100
    },

    // Populer Course
    populerCourseHeaderSection: {
        marginVertical: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    populerTitle: {
        fontSize: 25,
    },
    seeMore: {
        color: '#858585',
        marginTop: 10,
        fontWeight: '400'
    },
    populerCourseSection: {
        flexDirection: 'row',
    },
    titleCoursePopulerSection: {
        // position: 'absolute',
    },
    card: {
        // elevation: 200,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 20,
        marginHorizontal: 5,
    },
    cardBody: {
        flexDirection: 'column',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 21.38,
        padding: 20,
        marginTop: -77,
    },
    titleCoursePopuler: {
        fontSize: 15,
        color: '#fff',
        textAlign: 'left',
        marginBottom: 3
    },
    captionCoursePopuler: {
        fontSize: 10,
        color: '#fff',
        textAlign: 'left',
    },
    // Rekomendation
    recomendationCourseHeaderSection: {
        marginVertical: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    recomendationTitle: {
        fontSize: 25,
    },
    recomendationCourseSection: {
        flexDirection: 'row',
        // marginLeft: 20,
        marginBottom: 20,
    },
    titleCourseRecomend: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 5
    },
    price: {
        color: '#0A8ED9',
        marginVertical: 5
    },
    miniFeat: {
        flexDirection: 'row',
        gap: 10
    }
})

export default styles