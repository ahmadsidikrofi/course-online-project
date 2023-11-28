import { Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles"
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import CourseDb from "../data/CourseDb";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import axios from "axios";

const Homepage = ({navigation}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get('https://7aa9-2404-8000-1027-1608-3d68-16d3-9d26-8c7c.ngrok-free.app/courses')
        .then((response) => {
            if (response.status === 200) {
                console.log(response.data)
                setCourses(response.data)
            }
        })
        .catch((err) => console.log(err))
    }, [])
    const PopulerCard = ({ namaCourse, captionCourse, img, id, onPress }) => {
        return (
            <TouchableOpacity onPress={onPress} style={styles.card}>
                <Image source={{ uri: img }} style={{ borderRadius: 20, width: 250, height: 250 }} 
                    onError={(error) => console.log('Image loading error:', error)}
                    onLoad={() => console.log('Image loaded successfully')}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.titleCoursePopuler}>{namaCourse.length > 20 ? namaCourse.substring(0,26) + "..." : namaCourse}</Text>
                    <Text style={styles.captionCoursePopuler}>{captionCourse}</Text>
                </View>
            </TouchableOpacity>
        );
    };      
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.miniTitleContainer}>
                    <Text style={styles.miniTitle}>Kategori</Text>
                    <AntDesign name="bells" size={28} color="black" />
                </View>
                <View style={styles.tipeKategoriContainer}>
                    <Text style={styles.tipeKategori}>
                        Programming
                        <Entypo name="chevron-small-down" size={24} color="black" />
                    </Text>
                </View>
                <View style={styles.searchCourseContainer}>
                    <View style={styles.searchCourseInput}>
                        <AntDesign name="search1" size={28} color="#333" />
                        <TextInput placeholder="Cari course" style={{ fontSize: 20, fontWeight: "300" }} />
                    </View>
                    <LinearGradient
                        colors={['#A0DAFB', '#0079ff']}
                        style={{ borderRadius: 20 }}
                    >
                        <View style={styles.filterContainer}>
                            <AntDesign name="filter" size={30} color="#fff" />
                        </View>
                    </LinearGradient>
                </View>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.carouselCategory}>
                        <TouchableOpacity>
                            <LinearGradient colors={['#005b96', '#0079ff']} style={{ borderRadius: 16 }}>
                                <Text style={styles.categoryType}>React</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <LinearGradient colors={['#011f4b', '#A0DAFB']} style={{ borderRadius: 16 }}>
                                <Text style={styles.categoryType}>NextJS</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <LinearGradient colors={['#011f4b', '#A0DAFB']} style={{ borderRadius: 16 }}>
                                <Text style={styles.categoryType}>Javascript</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <LinearGradient colors={['#011f4b', '#A0DAFB']} style={{ borderRadius: 16 }}>
                                <Text style={styles.categoryType}>Flutter</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <LinearGradient colors={['#011f4b', '#A0DAFB']} style={{ borderRadius: 16 }}>
                                <Text style={styles.categoryType}>Vue Js</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <LinearGradient colors={['#011f4b', '#A0DAFB']} style={{ borderRadius: 16 }}>
                                <Text style={styles.categoryType}>Bun</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

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
                                namaCourse={item.Course}
                                captionCourse={item.Deskripsi}
                                img={item.Gambar}
                                id={item.ID}
                                onPress={() => navigation.navigate('Detail Page', {
                                    namaCourse: item.Course,
                                    captionCourse: item.Deskripsi,
                                    harga: item.Harga,
                                    img: item.Gambar,
                                })}
                            />
                        )}
                        keyExtractor={(item) => item.ID}
                    />
                </View>
                <View style={styles.recomendationCourseHeaderSection}>
                    <Text style={styles.recomendationTitle}>Rekomendasi</Text>
                    <Text style={styles.seeMore}>See more</Text>
                </View>
                <View style={styles.recomendationCourseSection}>
                    <Image style={{ borderRadius: 10, }} source={require('./image/rekomendasi1.png')} />
                    <View style={{ marginLeft: 20, }}>
                        <Text style={styles.titleCourseRecomend}>React advance 20 hari</Text>
                        <Text style={styles.price}>Free</Text>
                        <View style={styles.miniFeat}>
                            <Entypo name="video-camera" size={20} color="#858585" /><Text>20 Video</Text>
                            <MaterialIcons name="add-task" size={20} color="black" /><Text>20 Quizz</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.recomendationCourseSection}>
                    <Image style={{ borderRadius: 10, }} source={require('./image/rekomendasi2.png')} />
                    <View style={{ marginLeft: 20, }}>
                        <Text style={styles.titleCourseRecomend}>React advance 20 hari</Text>
                        <Text style={styles.price}>Rp. 200.000 / paket</Text>
                        <View style={styles.miniFeat}>
                            <Entypo name="video-camera" size={20} color="#858585" /><Text>20 Video</Text>
                            <MaterialIcons name="add-task" size={20} color="black" /><Text>20 Quizz</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default Homepage;