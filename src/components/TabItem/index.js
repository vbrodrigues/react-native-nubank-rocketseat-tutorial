import React from "react";

import { View, StyleSheet, ScrollView, Text } from "react-native";

import { Ionicons } from '@expo/vector-icons';

export default function TabItem(props) {
    return (
        <View style={styles.tabItem}>
            <Ionicons name={props.icon} size={24} color="#FFF" />
            <Text style={styles.tabText}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    tabItem: {
        width: 100, 
        height: 100, 
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: 3, 
        marginLeft: 10, 
        padding: 10, 
        justifyContent: "space-between",
    },
    tabText: {
        fontSize: 13, 
        color: "#FFF",
    },
})