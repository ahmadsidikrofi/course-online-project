import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import styles from "./style"
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import CourseDb from "../data/CourseDb";

const DetailPage = ( { navigation, route }) => {
    const { namaCourse, captionCourse, harga, img } = route.params
    return ( 
        <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#C4DFDF' }}>
            <View style={styles.container} >
                <ImageBackground source={{ uri: img }} 
                    resizeMode="cover" 
                    style={styles.bgImage}
                    imageStyle={styles.bgImage}
                >
                    <View style={styles.topBg}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Feather style={styles.iconBg} name="chevron-left" size={28} color="#fff" />
                        </TouchableOpacity>
                        <Feather style={styles.iconBg} name="bookmark" size={28} color="#fff" />
                    </View>
                    <View style={styles.bottomBg}>
                        <Text style={styles.titleCourse}>{namaCourse}</Text>
                        <Text style={styles.captionCourse}>{captionCourse}</Text>
                        <View style={{ flexDirection: 'row', gap: 10, marginTop: 20 }}>
                            <Entypo style={{ padding: 8, borderRadius: 10, backgroundColor: '#373a36' }} name="video-camera" size={26} color="#fff" /><Text style={{ color: '#fff', marginTop: 10}}>20 Video</Text>
                            <MaterialIcons style={{ padding: 8, borderRadius: 10, backgroundColor: '#373a36', marginLeft: 30 }} name="add-task" size={26} color="#fff" /><Text style={{ color: '#fff', marginTop: 10}}>20 Quizz</Text>
                        </View>
                    </View>
                </ImageBackground>

                <View style={styles.descriptionSection}>
                    <Text style={styles.titleDescription}>Deskripsi</Text>
                    <Text style={{ color: '#858585', fontSize: 15, lineHeight: 25 }}>
                        Course ini untuk mereka yang benar-benar baru mau belajar tentang react native... 
                        <Text style={{ color: '#0A8ED9', fontWeight: 'bold' }}>Show More</Text> 
                    </Text>
                </View>

                <View style={styles.profileSection}>
                    <Image source={require('./image/profile.jpg')} style={styles.profilePic}/>
                    <View style={{ marginLeft: 20, marginTop: 20, }}>
                        <Text style={{ fontSize: 25, fontWeight: '500' }}>Rofi</Text>
                        <Text style={{ fontSize: 15, fontWeight: '300'}}>Mentor Lead</Text>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 20, marginTop: 30, }}>
                        <FontAwesome name="phone-square" size={40} color="#0079ff" style={{ marginLeft: 40, }} />
                        <Ionicons name="ios-chatbubble-ellipses" size={40} color="#0079ff" />
                    </View>
                </View>

                <View style={styles.galerySection}>
                    <Text style={styles.titleDescription}>Galery</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={{ flexDirection: 'row', marginTop: 10, gap: 20 }}>
                            <Image style={styles.galeryImg} source={require('./image/rekomendasi1.png')}/>
                            <Image style={styles.galeryImg} source={require('./image/rekomendasi2.png')}/>
                            <Image style={styles.galeryImg} source={require('./image/rekomendasi1.png')}/>
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.priceSection}>
                    <View>
                        <Text style={styles.titlePrice}>Price</Text>
                        <Text style={styles.price}>Rp. {harga} / paket</Text>
                    </View>
                    <View>
                        <LinearGradient style={styles.ambilBtn} colors={['#7297d6', '#0079ff']}>
                            <TouchableOpacity onPress={() => navigation.navigate('Checkout page', {
                                namaCourse,
                                harga
                            })}>
                                <Text style={styles.textAmbil}>Ambil</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
 
export default DetailPage;