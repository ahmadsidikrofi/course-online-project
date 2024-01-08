import { LinearGradient } from "expo-linear-gradient";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const SearchInput = ({ styles, setCourses}) => {
    const searchCourseRef = useRef();

    const handleSearchCourse = (searchNamaCourse) => {
        if (searchNamaCourse) {
            axios.get(`https://d1ef-36-80-143-111.ngrok-free.app/api/course/cari?search=${searchNamaCourse}`)
            .then((response) => {
                if (response.status === 200) {
                    // console.log(response.data)
                    setCourses(response.data)
                }
            })
            console.log(searchNamaCourse)
        }  else {
            axios.get(`https://d1ef-36-80-143-111.ngrok-free.app/api/course`)
            .then((response) => {
                if (response.status === 200) {
                    // console.log(response.data)
                    setCourses(response.data)
                }
            })
        }
    }

    return (
        <View style={styles.searchCourseContainer}>
            <View style={styles.searchCourseInput}>
                <AntDesign name="search1" size={28} color="#fff" />
                <TextInput
                    placeholder="Cari Course"
                    placeholderTextColor="#fff"
                    style={{ fontWeight: '400', fontSize: 20, color: '#fff' }}
                    onChangeText={handleSearchCourse}
                    ref={searchCourseRef}
                />
            </View>
            <LinearGradient
                colors={['#A0DAFB', '#0079ff']}
                style={{ borderRadius: 20 }}
            >
                <TouchableOpacity style={styles.filterContainer}>
                    <AntDesign name="filter" size={30} color="#fff" />
                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
}

export default SearchInput;
