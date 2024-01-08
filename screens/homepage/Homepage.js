import { Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles"
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import axios from "axios";
import PopulerCard from "../../components/PopulerCard";
import SearchInput from "../../components/SearchInput";
import RecomendationCourse from "../../components/RecomendationCourse";
import FilterCourse from "../../components/FilterCourse";
import LotieLoader from "../../components/LotieLoader";

const Homepage = ({navigation}) => {
    const [courses, setCourses] = useState([]);
    const [recommendationCourse, setRecommendationCourse] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true)
        }, 5000)
        axios.get('https://d1ef-36-80-143-111.ngrok-free.app/api/course')
        .then((response) => {
            if (response.status === 200) {
                console.log(response.data)
                setCourses(response.data)
            }
        })
        .catch((err) => console.log(err))

        axios.get('https://d1ef-36-80-143-111.ngrok-free.app/api/course/recommend')
        .then((response) => {
            if (response.status === 200) {
                console.log(response.data)
                setRecommendationCourse(response.data)
            }
        })
        .catch((err) => console.log(err))
    }, [])
    
     
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#C4DFDF' }}>
            <View style={styles.container}>
                <View style={styles.miniTitleContainer}>
                    <Text style={styles.miniTitle}>Kategori</Text>
                    <AntDesign name="bells" size={28} color="#0079ff" />
                </View>
                <View style={styles.tipeKategoriContainer}>
                    <Text style={styles.tipeKategori}>
                        Programming
                        <Entypo name="chevron-small-down" size={24} color="black" />
                    </Text>
                </View>

                {/* Search */}
                <SearchInput styles={styles} setCourses={setCourses} />

                {/* Filtering */}
                {isLoading ? <FilterCourse styles={styles} setCourses={setCourses} courses={courses}/> : <LotieLoader />}
                

                {/* Populer */}
                <View>
                    <View style={styles.populerCourseHeaderSection}>
                        <Text style={styles.populerTitle}>Populer</Text>
                        <Text style={styles.seeMore}>See more</Text>
                    </View>

                    <View style={styles.populerCourseSection}>
                        {isLoading ? 
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={courses}
                            renderItem={({ item }) => (
                                <PopulerCard
                                    namaCourse={item.nama_course}
                                    captionCourse={item.deskripsi_course}
                                    img={item.image}
                                    id={item.id}
                                    onPress={() => navigation.navigate('Detail Page', {
                                        namaCourse: item.nama_course,
                                        captionCourse: item.deskripsi_course,
                                        harga: item.harga,
                                        img: item.image,
                                    })}
                                />
                            )}
                            keyExtractor={(item) => item.id}
                        />
                        :
                        <LotieLoader />
                        }
                    </View>
                </View>
                
                {/* Rekomendasi */}
                <View>
                    <View style={styles.recomendationCourseHeaderSection}>
                        <Text style={styles.recomendationTitle}>Rekomendasi</Text>
                        <TouchableOpacity>
                            <Text style={styles.seeMore}>See more</Text>
                        </TouchableOpacity>
                    </View>
                    {isLoading ? 
                    <ScrollView horizontal={false}>
                        {recommendationCourse.slice(0,4).map((recommend) => {
                            return (
                                <View key={recommend.id}>
                                    <RecomendationCourse 
                                        namaCourse={recommend.nama_course}
                                        harga={recommend.harga}
                                        img={recommend.image}
                                        id={recommend.id}
                                        onPress={() => navigation.navigate('Detail Page', {
                                            namaCourse: recommend.nama_course,
                                            captionCourse: recommend.deskripsi_course,
                                            harga: recommend.harga,
                                            img: recommend.image,
                                        })}
                                    />
                                </View>
                            )
                        })}
                    </ScrollView>
                    :
                    <LotieLoader />
                    }
                </View>
            </View>
        </ScrollView>
    );
}

export default Homepage;