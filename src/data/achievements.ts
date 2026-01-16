export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string; // emoji
}

export const achievementsList: Achievement[] = [
  { id: 'first_lesson', title: 'First Steps', description: 'Complete your first lesson.', icon: '👣' },
  { id: 'perfect_score_1', title: 'Perfect Start', description: 'Get a perfect score on one quiz.', icon: '⭐' },
  { id: 'complete_5', title: 'Curious Learner', description: 'Complete 5 different lessons.', icon: '🧐' },
  { id: 'perfect_score_5', title: 'Quiz Whiz', description: 'Get 5 perfect scores.', icon: '🧠' },
  { id: 'complete_10', title: 'Bookworm', description: 'Complete 10 different lessons.', icon: '🐛' },
  { id: 'perfect_score_10', title: 'Unstoppable!', description: 'Get 10 perfect scores.', icon: '🚀' },
  { id: 'all_basics', title: 'Basics Master', description: 'Complete all "Basics" lessons.', icon: '🎓' },
  { id: 'all_animals', title: 'Animal Expert', description: 'Complete all "Animals" lessons.', icon: '🐘' },
  { id: 'all_people', title: 'People Person', description: 'Complete all "People" lessons.', icon: '👨‍👩‍👧‍👦' },
  { id: 'all_places', title: 'World Explorer', description: 'Complete all "Places" lessons.', icon: '🗺️' },
  { id: 'all_time', title: 'Time Traveler', description: 'Complete all "Time" lessons.', icon: '⌛' },
  { id: 'all_fun', title: 'Fun Expert', description: 'Complete all "Fun" lessons.', icon: '🎉' },
  { id: 'all_language', title: 'Language Pro', description: 'Complete all "Language" lessons.', icon: '🗣️' },
  { id: 'all_everyday', title: 'Everyday Hero', description: 'Complete all "Everyday" lessons.', icon: '🦸' },
  { id: 'completionist', title: 'Grand Master', description: 'Complete all available lessons!', icon: '🏆' },
];
