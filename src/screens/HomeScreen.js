import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [dailyReward, setDailyReward] = useState(false);

  useEffect(() => {
    loadUserData();
    checkDailyReward();
  }, []);

  const loadUserData = async () => {
    try {
      const data = await AsyncStorage.getItem('userData');
      if (data) {
        setUserData(JSON.parse(data));
      } else {
        // Create new user
        const newUser = {
          id: Date.now().toString(),
          username: 'Player' + Math.floor(Math.random() * 9999),
          score: 0,
          level: 1,
          totalGames: 0,
          wins: 0,
          achievements: [],
          createdAt: new Date().toISOString(),
        };
        await AsyncStorage.setItem('userData', JSON.stringify(newUser));
        setUserData(newUser);
      }
    } catch (error) {
      console.log('Error loading user data:', error);
    }
  };

  const checkDailyReward = async () => {
    try {
      const lastRewardDate = await AsyncStorage.getItem('lastRewardDate');
      const today = new Date().toDateString();
      if (lastRewardDate !== today) {
        setDailyReward(true);
      }
    } catch (error) {
      console.log('Error checking daily reward:', error);
    }
  };

  const claimDailyReward = async () => {
    try {
      const rewardPoints = 100;
      const updatedUser = { ...userData, score: userData.score + rewardPoints };
      await AsyncStorage.setItem('userData', JSON.stringify(updatedUser));
      await AsyncStorage.setItem('lastRewardDate', new Date().toDateString());
      setUserData(updatedUser);
      setDailyReward(false);
      alert(`🎉 Daily Reward Claimed! +${rewardPoints} Points`);
    } catch (error) {
      console.log('Error claiming reward:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.appTitle}>🎮 ASRAISAYA</Text>
          <Text style={styles.subtitle}>Multiplayer Quiz Challenge</Text>
        </View>

        {/* User Card */}
        {userData && (
          <View style={styles.userCard}>
            <View style={styles.userInfo}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{userData.username.charAt(0).toUpperCase()}</Text>
              </View>
              <View>
                <Text style={styles.username}>{userData.username}</Text>
                <Text style={styles.level}>Level {userData.level}</Text>
              </View>
            </View>
            <View style={styles.scoreBox}>
              <Text style={styles.scoreLabel}>Score</Text>
              <Text style={styles.scoreValue}>{userData.score.toLocaleString()}</Text>
            </View>
          </View>
        )}

        {/* Daily Reward */}
        {dailyReward && (
          <TouchableOpacity style={styles.dailyRewardCard} onPress={claimDailyReward}>
            <Ionicons name="gift" size={32} color="#ffd700" />
            <Text style={styles.rewardText}>Claim Daily Reward!</Text>
            <Text style={styles.rewardSubtext}>+100 Points</Text>
          </TouchableOpacity>
        )}

        {/* Main Menu Buttons */}
        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={[styles.menuButton, styles.soloButton]}
            onPress={() => navigation.navigate('Quiz', { mode: 'solo' })}
          >
            <Ionicons name="person" size={40} color="#fff" />
            <Text style={styles.menuButtonText}>Solo Quiz</Text>
            <Text style={styles.menuButtonSubtext}>Challenge Yourself</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.menuButton, styles.multiplayerButton]}
            onPress={() => navigation.navigate('MultiplayerLobby')}
          >
            <Ionicons name="people" size={40} color="#fff" />
            <Text style={styles.menuButtonText}>Multiplayer</Text>
            <Text style={styles.menuButtonSubtext}>Play with Friends</Text>
          </TouchableOpacity>
        </View>

        {/* Secondary Buttons */}
        <View style={styles.secondaryButtonContainer}>
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => navigation.navigate('Leaderboard')}
          >
            <Ionicons name="trophy" size={24} color="#ffd700" />
            <Text style={styles.secondaryButtonText}>Leaderboard</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => navigation.navigate('Profile')}
          >
            <Ionicons name="person-circle" size={24} color="#00d4ff" />
            <Text style={styles.secondaryButtonText}>Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Stats Section */}
        <View style={styles.statsSection}>
          <Text style={styles.statsTitle}>Your Stats</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>{userData?.totalGames || 0}</Text>
              <Text style={styles.statLabel}>Games Played</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>{userData?.wins || 0}</Text>
              <Text style={styles.statLabel}>Wins</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>{userData?.achievements.length || 0}</Text>
              <Text style={styles.statLabel}>Achievements</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#16213e',
  },
  appTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00d4ff',
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
  userCard: {
    flexDirection: 'row',
    margin: 15,
    padding: 15,
    backgroundColor: '#16213e',
    borderRadius: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: '#00d4ff',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#00d4ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatarText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a2e',
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  level: {
    fontSize: 12,
    color: '#00d4ff',
    marginTop: 3,
  },
  scoreBox: {
    alignItems: 'center',
  },
  scoreLabel: {
    fontSize: 12,
    color: '#888',
  },
  scoreValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00d4ff',
    marginTop: 3,
  },
  dailyRewardCard: {
    margin: 15,
    padding: 20,
    backgroundColor: '#2a5c4d',
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ffd700',
  },
  rewardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  rewardSubtext: {
    fontSize: 12,
    color: '#ffd700',
    marginTop: 5,
  },
  menuContainer: {
    flexDirection: 'row',
    margin: 15,
    gap: 10,
  },
  menuButton: {
    flex: 1,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  soloButton: {
    backgroundColor: '#e94560',
  },
  multiplayerButton: {
    backgroundColor: '#6c5ce7',
  },
  menuButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  menuButtonSubtext: {
    fontSize: 11,
    color: '#ccc',
    marginTop: 5,
  },
  secondaryButtonContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
    gap: 10,
    marginBottom: 20,
  },
  secondaryButton: {
    flex: 1,
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#16213e',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  secondaryButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
  statsSection: {
    margin: 15,
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 10,
  },
  statCard: {
    flex: 1,
    padding: 15,
    backgroundColor: '#16213e',
    borderRadius: 8,
    alignItems: 'center',
    borderTopWidth: 3,
    borderTopColor: '#00d4ff',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00d4ff',
  },
  statLabel: {
    fontSize: 11,
    color: '#888',
    marginTop: 5,
  },
});

export default HomeScreen;
