import { Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles"
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import CourseDb from "../data/CourseDb";
import { useState } from "react";
import { FlatList } from "react-native";

const Homepage = ({navigation}) => {
    const PopulerCard = ({ namaCourse, captionCourse, img, id, onPress }) => {
        return (
            <TouchableOpacity onPress={onPress} style={styles.card}>
                <Image source={img} style={{ borderRadius: 20 }} />
                <View style={styles.cardBody}>
                    <Text style={styles.titleCoursePopuler}>{namaCourse}</Text>
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
                        colors={['#A0DAFB', '#0A8ED9']}
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
                            <LinearGradient colors={['#A0DAFB', '#0A8ED9']} style={{ borderRadius: 16 }}>
                                <Text style={styles.categoryType}>React</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <LinearGradient colors={['#A0DAFB', '#F7F7F7']} style={{ borderRadius: 16 }}>
                                <Text style={styles.categoryType}>NextJS</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <LinearGradient colors={['#A0DAFB', '#F7F7F7']} style={{ borderRadius: 16 }}>
                                <Text style={styles.categoryType}>Javascript</Text>
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
                        data={CourseDb}
                        renderItem={({ item }) => (
                            <PopulerCard
                                namaCourse={item.namaCourse}
                                captionCourse={item.captionCourse}
                                img={item.img}
                                id={item.id}
                                onPress={() => navigation.navigate('Detail Page', {
                                    namaCourse: item.namaCourse,
                                    captionCourse: item.captionCourse,
                                    harga: item.harga,
                                    img: item.img,
                                })}
                            />
                        )}
                        keyExtractor={(item) => item.id.toString()}
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
                        <Text style={styles.price}>Rp. 200.000 / paket</Text>
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