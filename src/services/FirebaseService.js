import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set, get, update } from 'firebase/database';

// Firebase Configuration
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  databaseURL: 'YOUR_DATABASE_URL',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

// Initialize Firebase
let app, auth, database;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  database = getDatabase(app);
} catch (error) {
  console.log('Firebase initialization error:', error);
}

// Authentication Service
export const AuthService = {
  signup: async (email, password, username) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user data to database
      await set(ref(database, 'users/' + user.uid), {
        username: username,
        email: email,
        score: 0,
        level: 1,
        totalGames: 0,
        wins: 0,
        createdAt: new Date().toISOString(),
      });

      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  login: async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  logout: async () => {
    try {
      await auth.signOut();
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

// Leaderboard Service
export const LeaderboardService = {
  updateScore: async (userId, newScore) => {
    try {
      const userRef = ref(database, 'users/' + userId);
      const snapshot = await get(userRef);
      const userData = snapshot.val();

      const updatedData = {
        score: userData.score + newScore,
        totalGames: userData.totalGames + 1,
        level: Math.floor((userData.score + newScore) / 500) + 1,
      };

      await update(userRef, updatedData);
      return updatedData;
    } catch (error) {
      console.log('Error updating score:', error);
    }
  },

  getLeaderboard: async (limit = 100) => {
    try {
      const usersRef = ref(database, 'users');
      const snapshot = await get(usersRef);

      if (snapshot.exists()) {
        const users = Object.entries(snapshot.val())
          .map(([id, data]) => ({
            id,
            ...data,
          }))
          .sort((a, b) => b.score - a.score)
          .slice(0, limit);

        return users;
      }
      return [];
    } catch (error) {
      console.log('Error fetching leaderboard:', error);
      return [];
    }
  },

  getUserRank: async (userId) => {
    try {
      const leaderboard = await LeaderboardService.getLeaderboard(1000);
      const rank = leaderboard.findIndex((user) => user.id === userId) + 1;
      return rank;
    } catch (error) {
      console.log('Error getting user rank:', error);
      return 0;
    }
  },
};

// Multiplayer Service
export const MultiplayerService = {
  createRoom: async (roomName, maxPlayers = 4) => {
    try {
      const roomId = Math.random().toString(36).substr(2, 9);
      await set(ref(database, 'rooms/' + roomId), {
        name: roomName,
        maxPlayers: maxPlayers,
        players: [],
        createdAt: new Date().toISOString(),
      });
      return roomId;
    } catch (error) {
      console.log('Error creating room:', error);
    }
  },

  joinRoom: async (roomId, userId, username) => {
    try {
      const roomRef = ref(database, 'rooms/' + roomId);
      const snapshot = await get(roomRef);
      const roomData = snapshot.val();

      if (roomData.players.length < roomData.maxPlayers) {
        const updatedPlayers = [
          ...roomData.players,
          { userId, username, score: 0 },
        ];
        await update(ref(database, 'rooms/' + roomId), {
          players: updatedPlayers,
        });
        return true;
      }
      return false;
    } catch (error) {
      console.log('Error joining room:', error);
      return false;
    }
  },

  getRooms: async () => {
    try {
      const roomsRef = ref(database, 'rooms');
      const snapshot = await get(roomsRef);

      if (snapshot.exists()) {
        return Object.entries(snapshot.val()).map(([id, data]) => ({
          id,
          ...data,
        }));
      }
      return [];
    } catch (error) {
      console.log('Error fetching rooms:', error);
      return [];
    }
  },
};

export default {
  AuthService,
  LeaderboardService,
  MultiplayerService,
};
