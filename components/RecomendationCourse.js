import { Image, Text, View, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import styles from "../screens/homepage/styles";
// source={require('../assets/splash.png')}
const RecomendationCourse = ({ namaCourse, harga, img, id, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.recomendationCourseSection}>
            <Image source={{ uri: img }} style={{ borderRadius: 20, width: 100, height: 100  }}
                onError={(error) => console.log('Image loading error:', error)}
                onLoad={() => console.log('Image loaded successfully')}
            />
            <View style={{ marginLeft: 20, }}>
                <Text style={styles.titleCourseRecomend}>{namaCourse}</Text>
                <Text style={styles.price}>Rp. {harga} / paket</Text>
                <View style={styles.miniFeat}>
                    <Entypo name="video-camera" size={20} color="#858585" /><Text>20 Video</Text>
                    <MaterialIcons name="add-task" size={20} color="black" /><Text>20 Quizz</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default RecomendationCourse;