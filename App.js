import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import Header from "./src/components/Header";
import Tabs from "./src/components/Tabs";

import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <View style={styles.content}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="md-cash" size={28} color="#666" />
            <Ionicons name="md-eye-off" size={28} color="#666" />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.title}>Saldo disponível</Text>
            <Text style={styles.description}>R$ 1.465,25</Text>
          </View>
          <View style={styles.cardFooter}>
            <Text style={styles.annotation}>Transferência de R$ 200,00 recebida de Luis Augusto Zamprogna hoje às 9am.</Text>
          </View>
        </View>
      </View>
      <Tabs></Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8B10AE",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    maxHeight: 400,
    zIndex: 5,
  },
  card: {
    flex: 1, 
    backgroundColor: "#FFF", 
    borderRadius: 4, 
    marginRight: 20, 
    marginLeft: 20, 
    height: Dimensions.get("window").height,
  },
  cardHeader: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center",
    padding: 30,
  },
  cardContent: {
    flex: 1, 
    paddingLeft: 30, 
    paddingRight: 30, 
    justifyContent: "center",
  },
  cardFooter: {
    padding: 30, 
    backgroundColor: "#EEE", 
    borderRadius: 4,
  },
  title: {
    fontSize: 13, 
    color: "#999",
  },
  description: {
    fontSize: 32, 
    marginTop: 3, 
    color: "#333",
  },
  annotation: {
    fontSize: 12, 
    color: "#333",
  },
});
