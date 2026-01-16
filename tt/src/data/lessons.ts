export interface Lesson {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: "primary" | "secondary" | "accent" | "purple" | "pink";
  content: LessonContent[];
  quiz: QuizItem[];
}

export interface LessonContent {
  type: "text" | "example" | "list" | "tip";
  title?: string;
  content: string | string[];
  image?: string;
}

export interface QuizItem {
  question: string;
  options: string[];
  correctAnswer: number;
  image?: string;
}

import { basicsLessons } from "./lessons/basics";
import { animalsLessons } from "./lessons/animals";
import { timeLessons } from "./lessons/time";
import { peopleLessons } from "./lessons/people";
import { everydayLessons } from "./lessons/everyday";
import { placesLessons } from "./lessons/places";
import { languageLessons } from "./lessons/language";
import { funLessons } from "./lessons/fun";

export const lessons: Lesson[] = [
  ...basicsLessons,
  ...animalsLessons,
  ...timeLessons,
  ...peopleLessons,
  ...everydayLessons,
  ...placesLessons,
  ...languageLessons,
  ...funLessons,
];
