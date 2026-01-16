import { Lesson, LessonContent } from "./lessons";

export type Story = {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: "primary" | "secondary" | "accent" | "purple" | "pink";
  content: StoryParagraph[];
};

export type StoryParagraph = {
  type: 'paragraph';
  text: string;
  emoji: string;
};


export const stories: Story[] = [
  {
    id: "the-lost-ball",
    title: "The Lost Ball",
    description: "A dog looks for his favorite toy.",
    icon: "stories",
    color: "primary",
    content: [
      { type: 'paragraph', text: "Max the dog loved to play. His favorite toy was a bright red ball.", emoji: "🐕" },
      { type: 'paragraph', text: "One sunny day, he played in the park. He threw his ball high in the air. Whoosh!", emoji: "☀️" },
      { type: 'paragraph', text: "The red ball went over a big, green tree. Max could not see it. 'Woof?' he barked. Where was his ball?", emoji: "🌳" },
      { type: 'paragraph', text: "He saw a cat sleeping. 'Meow,' said the cat. 'I did not see a ball.'", emoji: "🐱" },
      { type: 'paragraph', text: "He saw a little bird in a nest. 'Chirp, chirp,' said the bird. 'I see it! It is in the flowers!'", emoji: "🐦" },
      { type: 'paragraph', text: "Max ran to the pink and yellow flowers. There was his red ball! Max was so happy.", emoji: "🌸" },
      { type: 'paragraph', text: "He wagged his tail and took his ball home. It was a good day.", emoji: "🏠" },
    ]
  },
  {
    id: "the-hungry-caterpillar",
    title: "The Hungry Caterpillar",
    description: "A story about a very hungry caterpillar.",
    icon: "stories",
    color: "secondary",
    content: [
        { type: 'paragraph', text: "A tiny caterpillar hatched from an egg. He was very, very hungry.", emoji: "🐛" },
        { type: 'paragraph', text: "On Monday, he ate one red apple. But he was still hungry.", emoji: "🍎" },
        { type: 'paragraph', text: "On Tuesday, he ate two green leaves. But he was still hungry.", emoji: "🍃" },
        { type: 'paragraph', text: "On Wednesday, he ate three purple grapes. But he was still hungry.", emoji: "🍇" },
        { type: 'paragraph', text: "He ate and ate all week. Soon, he was a big, fat caterpillar.", emoji: "🐛" },
        { type: 'paragraph', text: "He built a small house, called a cocoon, and went to sleep inside.", emoji: "😴" },
        { type: 'paragraph', text: "After many days, he woke up. He was not a caterpillar anymore. He was a beautiful butterfly!", emoji: "🦋" },
    ]
  },
  {
    id: "the-day-at-the-beach",
    title: "A Day at the Beach",
    description: "What happens on a sunny day at the beach?",
    icon: "stories",
    color: "accent",
    content: [
        { type: 'paragraph', text: "The sun was hot and yellow. 'Let's go to the beach!' said Dad.", emoji: "☀️" },
        { type: 'paragraph', text: "At the beach, the sand was warm. The big, blue ocean went 'swoosh, swoosh'.", emoji: "🌊" },
        { type: 'paragraph', text: "A small crab walked sideways. 'Snip, snap!' went its claws.", emoji: "🦀" },
        { type: 'paragraph', text: "A happy dolphin jumped out of the water. 'Splash!'", emoji: "🐬" },
        { type: 'paragraph', text: "We built a big sandcastle with a tall tower and a small door.", emoji: "🏰" },
        { type: 'paragraph', text: "We ate cold ice cream. It was sweet and yummy.", emoji: "🍦" },
        { type: 'paragraph', text: "The beach is a fun place to be!", emoji: "🏖️" },
    ]
  },
];
