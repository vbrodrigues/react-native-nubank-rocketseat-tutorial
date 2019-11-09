import React from "react";

import { View, StyleSheet, ScrollView, Text } from "react-native";
import TabItem from "../TabItem";
import { Ionicons } from '@expo/vector-icons';

export default function Tabs() {
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingLeft: 10, paddingRight: 20}}>
                <TabItem name="Adicionar amigos" icon="md-person-add" />
                <TabItem name="Cobrar" icon="md-chatbubbles" />
                <TabItem name="Depositar" icon="md-arrow-down" />
                <TabItem name="Transferir" icon="md-arrow-up" />
                <TabItem name="Bloquear cartão" icon="md-lock" />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 100, 
        marginTop: 20
    }, 
    tabsContainer: {

    },
})