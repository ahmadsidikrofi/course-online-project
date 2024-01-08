import React from "react";
import { StyleSheet, View, Text } from "react-native";
import LottieView from "lottie-react-native";
import { useState } from "react";

const LotieLoader = () => {
    return (
        <View style={{ marginHorizontal: 100 }}>
            <LottieView
                source={require("../assets/Animation - 1704357414266.json")}
                style={styles.animation}
                autoPlay
            />
            <View><Text style={{ fontWeight: 'bold', fontSize: 25, }}>Sedang Loading...</Text></View>
        </View>
    );
}

export default LotieLoader;

const styles = StyleSheet.create({
    animation: {
        width: 100,
        height: 100,
    },
});