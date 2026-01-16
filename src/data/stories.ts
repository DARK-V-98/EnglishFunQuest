import { Lesson, LessonContent } from "./lessons";

export type StoryChoice = {
  text: string;
  nextId: string;
};

export type StoryParagraph = {
  id: string;
  type: 'paragraph';
  text: string;
  emoji: string;
  choices?: StoryChoice[];
  nextId?: string;
  isEnd?: boolean;
};


export type Story = {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: "primary" | "secondary" | "accent" | "purple" | "pink";
  content: StoryParagraph[];
};


export const stories: Story[] = [
  {
    id: "the-lost-ball",
    title: "The Lost Ball",
    description: "An interactive story where you help Max find his favorite toy.",
    icon: "stories",
    color: "primary",
    content: [
      { id: 'start', type: 'paragraph', text: "Max the dog loved his bright red ball. One day, he threw it high in the air. Whoosh! It disappeared. Where should Max look first?", emoji: "🐕", choices: [ { text: "Look near the big tree", nextId: 'tree' }, { text: "Look by the sleeping cat", nextId: 'cat' } ] },
      
      { id: 'tree', type: 'paragraph', text: "Max ran to the big, green tree. He saw a little bird in a nest. 'Chirp, chirp,' said the bird. 'I see it! It is in the flowers!'", emoji: "🌳", nextId: 'flowers' },
      
      { id: 'cat', type: 'paragraph', text: "Max went to the sleeping cat. 'Meow,' said the cat, waking up. 'I didn't see a ball. Maybe ask the bird in the tree?'", emoji: "🐱", choices: [ { text: "Go to the tree", nextId: 'tree' } ] },

      { id: 'flowers', type: 'paragraph', text: "Max ran to the pink and yellow flowers. There was his red ball! Max was so happy. He wagged his tail and took his ball home.", emoji: "🌸", isEnd: true },
    ]
  },
  {
    id: "the-hungry-caterpillar",
    title: "The Hungry Caterpillar",
    description: "A story about a very hungry caterpillar.",
    icon: "stories",
    color: "secondary",
    content: [
        { id: 'p1', type: 'paragraph', text: "A tiny caterpillar hatched from an egg. He was very, very hungry.", emoji: "🐛", nextId: 'p2' },
        { id: 'p2', type: 'paragraph', text: "On Monday, he ate one red apple. But he was still hungry.", emoji: "🍎", nextId: 'p3' },
        { id: 'p3', type: 'paragraph', text: "On Tuesday, he ate two green leaves. But he was still hungry.", emoji: "🍃", nextId: 'p4' },
        { id: 'p4', type: 'paragraph', text: "On Wednesday, he ate three purple grapes. But he was still hungry.", emoji: "🍇", nextId: 'p5' },
        { id: 'p5', type: 'paragraph', text: "He ate and ate all week. Soon, he was a big, fat caterpillar.", emoji: "🐛", nextId: 'p6' },
        { id: 'p6', type: 'paragraph', text: "He built a small house, called a cocoon, and went to sleep inside.", emoji: "😴", nextId: 'p7' },
        { id: 'p7', type: 'paragraph', text: "After many days, he woke up. He was not a caterpillar anymore. He was a beautiful butterfly!", emoji: "🦋", isEnd: true },
    ]
  },
  {
    id: "the-day-at-the-beach",
    title: "A Day at the Beach",
    description: "What happens on a sunny day at the beach?",
    icon: "stories",
    color: "accent",
    content: [
        { id: 'p1', type: 'paragraph', text: "The sun was hot and yellow. 'Let's go to the beach!' said Dad.", emoji: "☀️", nextId: 'p2' },
        { id: 'p2', type: 'paragraph', text: "At the beach, the sand was warm. The big, blue ocean went 'swoosh, swoosh'.", emoji: "🌊", nextId: 'p3' },
        { id: 'p3', type: 'paragraph', text: "A small crab walked sideways. 'Snip, snap!' went its claws.", emoji: "🦀", nextId: 'p4' },
        { id: 'p4', type: 'paragraph', text: "A happy dolphin jumped out of the water. 'Splash!'", emoji: "🐬", nextId: 'p5' },
        { id: 'p5', type: 'paragraph', text: "We built a big sandcastle with a tall tower and a small door.", emoji: "🏰", nextId: 'p6' },
        { id: 'p6', type: 'paragraph', text: "We ate cold ice cream. It was sweet and yummy.", emoji: "🍦", nextId: 'p7' },
        { id: 'p7', type: 'paragraph', text: "The beach is a fun place to be!", emoji: "🏖️", isEnd: true },
    ]
  },
];
