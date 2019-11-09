import React from "react";

import { View, StyleSheet, Image, Text } from "react-native";
import logo from "../../../assets/Nubank_Logo.png";

import { Ionicons } from '@expo/vector-icons';

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Image source={logo} style={styles.logo}/>
                <Text style={styles.title}>Vítor</Text>
            </View>
            <Ionicons name="ios-arrow-down" size={20} color="#FFF" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: 40, 
        paddingHorizontal: 0, 
        paddingBottom: 30,
    },
    top: {
        flexDirection: "row", 
        alignItems: "center", 
        marginBottom: 10,
        paddingTop: 10,
    },
    logo: {

    },
    title: {
        fontSize: 18, 
        color: "#FFF", 
        marginLeft: 8,
        fontWeight: "bold",
    },
})