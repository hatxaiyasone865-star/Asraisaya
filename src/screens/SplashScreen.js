import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Ionicons name="game-controller" size={80} color="#00d4ff" />
        <Text style={styles.appTitle}>ASRAISAYA</Text>
        <Text style={styles.tagline}>Multiplayer Quiz Challenge</Text>
        <View style={styles.loader}>
          <View style={[styles.dot, styles.dot1]} />
          <View style={[styles.dot, styles.dot2]} />
          <View style={[styles.dot, styles.dot3]} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#00d4ff',
    marginTop: 20,
    letterSpacing: 2,
  },
  tagline: {
    fontSize: 14,
    color: '#888',
    marginTop: 10,
  },
  loader: {
    flexDirection: 'row',
    marginTop: 40,
    gap: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#00d4ff',
  },
  dot1: {
    opacity: 0.3,
  },
  dot2: {
    opacity: 0.6,
  },
  dot3: {
    opacity: 1,
  },
});

export default SplashScreen;
