// Utility functions for the app

export const calculateLevel = (score) => {
  return Math.floor(score / 500) + 1;
};

export const formatScore = (score) => {
  return score.toLocaleString();
};

export const getScoreColor = (score) => {
  if (score >= 80) return '#4caf50';
  if (score >= 60) return '#ff9800';
  return '#e94560';
};

export const getScoreMessage = (score) => {
  if (score >= 80) return '🎉 Excellent!';
  if (score >= 60) return '👍 Good job!';
  if (score >= 40) return '💪 Keep trying!';
  return '📚 Study more!';
};

export const generateRoomCode = () => {
  return 'ROOM' + Math.random().toString(36).substr(2, 6).toUpperCase();
};

export const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
