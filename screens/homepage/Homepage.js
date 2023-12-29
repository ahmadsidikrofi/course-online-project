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

const Homepage = ({navigation}) => {
    const [courses, setCourses] = useState([]);
    const [recommendationCourse, setRecommendationCourse] = useState([]);

    useEffect(() => {
        axios.get('https://867f-2404-8000-1027-1608-4cf5-7e79-6bc4-14a1.ngrok-free.app/api/course')
        .then((response) => {
            if (response.status === 200) {
                console.log(response.data)
                setCourses(response.data)
            }
        })
        .catch((err) => console.log(err))

        axios.get('https://867f-2404-8000-1027-1608-4cf5-7e79-6bc4-14a1.ngrok-free.app/api/course/recommend')
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
                <FilterCourse styles={styles} setCourses={setCourses} courses={courses}/>

                {/* Populer */}
                <View>
                    <View style={styles.populerCourseHeaderSection}>
                        <Text style={styles.populerTitle}>Populer</Text>
                        <Text style={styles.seeMore}>See more</Text>
                    </View>

                    <View style={styles.populerCourseSection}>
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
                </View>
            </View>
        </ScrollView>
    );
}

export default Homepage;