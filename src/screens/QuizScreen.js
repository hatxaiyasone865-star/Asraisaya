import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ProgressBarAndroid,
  ProgressViewIOS,
  Platform,
  Alert,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import SocialService from '../services/SocialService';
import quizData from '../data/quizData';

const QuizScreen = ({ navigation, route }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  const mode = route?.params?.mode || 'solo';
  const category = route?.params?.category || 'general';

  useEffect(() => {
    loadQuestions();
  }, []);

  useEffect(() => {
    if (gameOver || answered) return;

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    if (timeLeft === 0) {
      handleNextQuestion();
    }

    return () => clearTimeout(timer);
  }, [timeLeft, gameOver, answered]);

  const loadQuestions = () => {
    let selectedQuestions = quizData.general;
    if (category === 'sports') selectedQuestions = quizData.sports;
    else if (category === 'history') selectedQuestions = quizData.history;
    else if (category === 'science') selectedQuestions = quizData.science;

    // Shuffle questions
    const shuffled = selectedQuestions.sort(() => 0.5 - Math.random()).slice(0, 10);
    setQuestions(shuffled);
  };

  const handleAnswerSelect = (index) => {
    if (answered) return;
    setSelectedAnswer(index);
    setAnswered(true);

    if (questions[currentQuestion].correctAnswer === index) {
      setScore((prev) => prev + 10);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
      setAnswered(false);
      setSelectedAnswer(null);
      setTimeLeft(30);
    } else {
      endGame();
    }
  };

  const endGame = async () => {
    setGameOver(true);
    try {
      const userData = await AsyncStorage.getItem('userData');
      const user = JSON.parse(userData);
      const newTotalGames = user.totalGames + 1;
      const newWins = user.wins + (score > 50 ? 1 : 0);
      const updatedUser = {
        ...user,
        score: user.score + score,
        totalGames: newTotalGames,
        wins: newWins,
      };
      await AsyncStorage.setItem('userData', JSON.stringify(updatedUser));
    } catch (error) {
      console.log('Error saving game:', error);
    }
  };

  const shareScore = async () => {
    try {
      await SocialService.shareToFacebook(
        `I scored ${score} points in Asraisaya! 🎮 Can you beat my score? Download now!`,
        'https://play.google.com/store/apps/details?id=com.asraisaya.quiz'
      );
    } catch (error) {
      Alert.alert('Share Error', 'Could not share to Facebook');
    }
  };

  if (!questions.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading questions...</Text>
      </View>
    );
  }

  if (gameOver) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.gameOverContainer}>
          <View style={styles.gameOverBox}>
            <Ionicons name="checkmark-circle" size={80} color="#00d4ff" />
            <Text style={styles.gameOverTitle}>Quiz Complete!</Text>
            <View style={styles.scoreBox}>
              <Text style={styles.scoreLabel}>Your Score</Text>
              <Text style={styles.scoreFinal}>{score}</Text>
              <Text style={styles.scoreMax}>out of 100</Text>
            </View>
            <Text style={styles.resultText}>
              {score >= 80
                ? '🎉 Excellent Performance!'
                : score >= 60
                ? '👍 Good Job!'
                : '💪 Keep Practicing!'}
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.shareButton} onPress={shareScore}>
              <Ionicons name="share-social" size={24} color="#fff" />
              <Text style={styles.shareButtonText}>Share on Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.playAgainButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.playAgainButtonText}>Play Again</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.homeButton}
              onPress={() => navigation.navigate('Home')}
            >
              <Text style={styles.homeButtonText}>Go Home</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  const progress = (currentQuestion + 1) / questions.length;
  const question = questions[currentQuestion];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          Question {currentQuestion + 1}/{questions.length}
        </Text>
        <View style={styles.scoreDisplay}>
          <Text style={styles.scoreText}>{score}</Text>
        </View>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
      </View>

      {/* Question */}
      <ScrollView style={styles.questionContainer}>
        <Text style={styles.questionText}>{question.question}</Text>
        <Text style={styles.categoryTag}>Category: {category.toUpperCase()}</Text>
      </ScrollView>

      {/* Timer */}
      <View style={styles.timerContainer}>
        <View
          style={[
            styles.timerCircle,
            { borderColor: timeLeft <= 10 ? '#e94560' : '#00d4ff' },
          ]}
        >
          <Text style={[styles.timerText, { color: timeLeft <= 10 ? '#e94560' : '#00d4ff' }]}>
            {timeLeft}s
          </Text>
        </View>
      </View>

      {/* Answer Options */}
      <View style={styles.answersContainer}>
        {question.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.answerButton,
              selectedAnswer === index &&
                (question.correctAnswer === index
                  ? styles.correctAnswer
                  : styles.wrongAnswer),
              answered && question.correctAnswer === index && styles.correctAnswer,
            ]}
            onPress={() => handleAnswerSelect(index)}
            disabled={answered}
          >
            <View style={styles.answerContent}>
              <View
                style={[
                  styles.answerLetter,
                  selectedAnswer === index &&
                    (question.correctAnswer === index
                      ? styles.correctLetter
                      : styles.wrongLetter),
                  answered && question.correctAnswer === index && styles.correctLetter,
                ]}
              >
                <Text style={styles.answerLetterText}>
                  {String.fromCharCode(65 + index)}
                </Text>
              </View>
              <Text style={styles.answerText}>{option}</Text>
              {answered && question.correctAnswer === index && (
                <Ionicons name="checkmark" size={20} color="#4caf50" />
              )}
              {answered && selectedAnswer === index && question.correctAnswer !== index && (
                <Ionicons name="close" size={20} color="#e94560" />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Next Button */}
      {answered && (
        <TouchableOpacity style={styles.nextButton} onPress={handleNextQuestion}>
          <Text style={styles.nextButtonText}>
            {currentQuestion + 1 === questions.length ? 'Finish' : 'Next'}
          </Text>
          <Ionicons name="arrow-forward" size={20} color="#fff" />
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  loadingText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#16213e',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    flex: 1,
    textAlign: 'center',
  },
  scoreDisplay: {
    backgroundColor: '#00d4ff',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 20,
  },
  scoreText: {
    fontWeight: 'bold',
    color: '#1a1a2e',
    fontSize: 14,
  },
  progressContainer: {
    height: 4,
    backgroundColor: '#16213e',
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#00d4ff',
  },
  questionContainer: {
    flex: 1,
    padding: 20,
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    lineHeight: 28,
  },
  categoryTag: {
    fontSize: 12,
    color: '#00d4ff',
    marginTop: 15,
    fontWeight: '500',
  },
  timerContainer: {
    alignItems: 'center',
    paddingVertical: 15,
  },
  timerCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  answersContainer: {
    paddingHorizontal: 15,
    paddingBottom: 15,
    gap: 10,
  },
  answerButton: {
    backgroundColor: '#16213e',
    borderRadius: 10,
    padding: 12,
    borderWidth: 2,
    borderColor: '#16213e',
  },
  correctAnswer: {
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    borderColor: '#4caf50',
  },
  wrongAnswer: {
    backgroundColor: 'rgba(233, 69, 96, 0.1)',
    borderColor: '#e94560',
  },
  answerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  answerLetter: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#0f3460',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 32,
  },
  correctLetter: {
    backgroundColor: '#4caf50',
  },
  wrongLetter: {
    backgroundColor: '#e94560',
  },
  answerLetterText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  answerText: {
    flex: 1,
    color: '#fff',
    fontSize: 14,
  },
  nextButton: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#00d4ff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  nextButtonText: {
    color: '#1a1a2e',
    fontSize: 16,
    fontWeight: 'bold',
  },
  gameOverContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  gameOverBox: {
    backgroundColor: '#16213e',
    borderRadius: 15,
    padding: 30,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#00d4ff',
    marginBottom: 20,
  },
  gameOverTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
  scoreBox: {
    alignItems: 'center',
    marginTop: 20,
  },
  scoreLabel: {
    fontSize: 14,
    color: '#888',
  },
  scoreFinal: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#00d4ff',
    marginTop: 5,
  },
  scoreMax: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
  resultText: {
    fontSize: 16,
    color: '#ffd700',
    marginTop: 15,
    fontWeight: '600',
  },
  buttonContainer: {
    gap: 10,
  },
  shareButton: {
    flexDirection: 'row',
    backgroundColor: '#4267b2',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  shareButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  playAgainButton: {
    backgroundColor: '#e94560',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  playAgainButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  homeButton: {
    backgroundColor: '#16213e',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#00d4ff',
  },
  homeButtonText: {
    color: '#00d4ff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default QuizScreen;
