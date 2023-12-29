import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../screens/homepage/styles";

const PopulerCard = ({ namaCourse, captionCourse, img, id, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <Image source={{ uri: img }} style={{ borderRadius: 20, width: 250, height: 250 }} 
                onError={(error) => console.log('Image loading error:', error)}
                onLoad={() => console.log('Image loaded successfully')}
            />
            <View style={styles.cardBody}>
                <Text style={styles.titleCoursePopuler}>{namaCourse.length > 20 ? namaCourse.substring(0,26) + "..." : namaCourse}</Text>
                <Text style={styles.captionCoursePopuler}>{captionCourse.length > 50 ? captionCourse.substring(0, 40) + "..." : captionCourse}</Text>
            </View>
        </TouchableOpacity>
    );
}; 

export default PopulerCard