import { LinearGradient } from "expo-linear-gradient";
import { FlatList, TouchableOpacity, View, Text } from "react-native";
import axios from "axios";
import { Ionicons } from '@expo/vector-icons';

const FilterCourse = ({ styles, setCourses, courses }) => {
    const handleFilterCourse = (filterCourse) => {
        axios.get(`https://867f-2404-8000-1027-1608-4cf5-7e79-6bc4-14a1.ngrok-free.app/api/course/cari?search=${filterCourse}`)
        .then((response) => {
            if (response.status === 200) {
                setCourses(response.data)
            }
        })
    }

    const getAllCourse = () => {
        axios.get(`https://867f-2404-8000-1027-1608-4cf5-7e79-6bc4-14a1.ngrok-free.app/api/course`)
        .then((response) => {
            if (response.status === 200) {
                setCourses(response.data)
            }
        })
    }
    return (
        <View style={styles.carouselCategory}>
            <TouchableOpacity onPress={getAllCourse}>
                <LinearGradient colors={['#005b96', '#0079ff']} style={{ borderRadius: 16 }}>
                    <Ionicons name="chevron-back" size={30} color="#fff" style={{ padding: 9 }} />
                </LinearGradient>
            </TouchableOpacity>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={courses}
                renderItem={({ item }) =>
                    <TouchableOpacity style={{ marginHorizontal: 4, }} onPress={() => handleFilterCourse(item.nama_course)}>
                        <LinearGradient colors={['#005b96', '#0079ff']} style={{ borderRadius: 16 }}>
                            <Text style={styles.categoryType}>{item.nama_course}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                }
            />
        </View>
    );
}

export default FilterCourse;