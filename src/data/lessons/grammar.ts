import { Lesson } from "../lessons";

export const grammarLessons: Lesson[] = [
  {
    id: "nouns",
    title: "Nouns: People, Places, Things",
    description: "Learn about the building blocks of sentences.",
    icon: "grammar",
    color: "primary",
    content: [
      {
        type: "text",
        title: "What is a Noun?",
        content: "A noun is a word that names a person, place, thing, or idea. Nouns are fundamental to language, as they represent the subjects and objects of our sentences.",
      },
      {
        type: "list",
        title: "Types of Nouns",
        content: [
          "🧑‍🤝‍🧑 Person: 'teacher', 'doctor', 'Maria', 'boy'",
          "🏞️ Place: 'school', 'city', 'London', 'beach'",
          "📦 Thing: 'book', 'computer', 'chair', 'car'",
          "💡 Idea: 'love', 'happiness', 'freedom', 'knowledge'",
        ],
      },
      {
        type: "text",
        title: "Common vs. Proper Nouns",
        content: "A 'common noun' is a general name (like 'city' or 'river'), while a 'proper noun' is a specific name for a person or place (like 'Paris' or 'the Nile'). Proper nouns always start with a capital letter."
      },
       {
        type: "list",
        title: "Examples",
        content: [
          "Common: The 'girl' threw the 'ball'.",
          "Proper: 'Maria' threw the 'ball'.",
          "Common: We visited a 'city'.",
          "Proper: We visited 'Tokyo'.",
        ],
      },
      {
        type: "tip",
        title: "💡 Plural Nouns",
        content: "Most nouns can be made plural (more than one) by adding '-s' or '-es'. For example: one 'cat', two 'cats'; one 'box', two 'boxes'. Some are irregular, like one 'child', two 'children'.",
      },
    ],
    quiz: [
      { question: "Which of the following is a noun?", options: ["run", "happy", "book", "quickly"], correctAnswer: 2 },
      { question: "In the sentence 'The cat sat on the mat', how many nouns are there?", options: ["One", "Two", "Three", "Four"], correctAnswer: 1 },
      { question: "Which of these is a 'proper noun' and should be capitalized?", options: ["country", "france", "ocean", "river"], correctAnswer: 1 },
      { question: "What is the plural of 'child'?", options: ["childs", "childes", "children", "child's"], correctAnswer: 2 },
      { question: "A noun can be a person, place, thing, or...", options: ["action", "description", "idea", "sound"], correctAnswer: 2 },
      { question: "Which word is a noun representing a 'place'?", options: ["teacher", "happiness", "kitchen", "eat"], correctAnswer: 2 },
      { question: "What is the plural of 'mouse'?", options: ["mouses", "mice", "mouse", "meese"], correctAnswer: 1 },
      { question: "Identify the noun in this sentence: 'She has great knowledge.'", options: ["She", "has", "great", "knowledge"], correctAnswer: 3 },
      { question: "'Dog' is a common noun. What is a corresponding proper noun?", options: ["Animal", "Pet", "Fido", "Canine"], correctAnswer: 2 },
      { question: "Which of these is NOT a noun?", options: ["love", "jump", "house", "friendship"], correctAnswer: 1 },
    ],
  },
  {
    id: "verbs",
    title: "Verbs: Action and Being",
    description: "Understand the engine of a sentence.",
    icon: "grammar",
    color: "secondary",
    content: [
       {
        type: "text",
        title: "What is a Verb?",
        content: "A verb is a word that expresses action or a state of being. Every complete sentence must have a verb. They are the 'engine' of the sentence.",
      },
      {
        type: "list",
        title: "Types of Verbs",
        content: [
          "🏃 Action Verbs: Show a physical or mental action. (e.g., 'run', 'think', 'jump', 'study')",
          "🔗 Linking Verbs: Connect the subject to a word that describes it. (e.g., 'is', 'am', 'are', 'was', 'were', 'seems', 'feels')",
        ],
      },
      {
        type: "list",
        title: "Verb Tenses",
        content: [
          "Past: The action already happened. (e.g., 'I walked', 'She talked')",
          "Present: The action is happening now or happens regularly. (e.g., 'I walk', 'She talks')",
          "Future: The action will happen later. (e.g., 'I will walk', 'She will talk')",
        ],
      },
       {
        type: "tip",
        title: "💡 'To Be' Verbs",
        content: "The verb 'to be' (is, am, are, was, were) is the most common linking verb. It tells us what something *is*.",
      },
    ],
    quiz: [
      { question: "Which word is a verb?", options: ["quick", "jumped", "desk", "happily"], correctAnswer: 1 },
      { question: "What is the past tense of 'walk'?", options: ["walks", "walking", "walked", "will walk"], correctAnswer: 2 },
      { question: "Which is a linking verb in 'The sky is blue.'?", options: ["The", "sky", "is", "blue"], correctAnswer: 2 },
      { question: "What is the future tense of 'eat'?", options: ["ate", "eats", "will eat", "eating"], correctAnswer: 2 },
      { question: "'She thinks about the problem.' What is the verb?", options: ["She", "thinks", "about", "problem"], correctAnswer: 1 },
      { question: "Which sentence is in the present tense?", options: ["He will go.", "He is going.", "He went.", "He had gone."], correctAnswer: 1 },
      { question: "Identify the action verb: 'Birds fly high.'", options: ["Birds", "fly", "high", "None"], correctAnswer: 1 },
      { question: "What is the base form of the verb 'ran'?", options: ["run", "runs", "running", "ran"], correctAnswer: 0 },
      { question: "Which word completes the sentence with a future tense verb: 'Tomorrow, I ___ my room.'", options: ["clean", "cleaned", "will clean", "am cleaning"], correctAnswer: 2 },
      { question: "Which is NOT a verb?", options: ["seems", "beautiful", "become", "write"], correctAnswer: 1 },
    ],
  },
   {
    id: "adjectives",
    title: "Adjectives: Describing Words",
    description: "Add color and detail to your writing.",
    icon: "grammar",
    color: "accent",
    content: [
       {
        type: "text",
        title: "What is an Adjective?",
        content: "An adjective is a word that describes or modifies a noun or pronoun. It provides more information about its size, shape, age, color, origin, or material.",
      },
      {
        type: "list",
        title: "What Adjectives Tell Us",
        content: [
          "🎨 Color: 'blue' sky, 'red' car",
          "📏 Size: 'large' house, 'tiny' mouse",
          "🤔 Opinion: 'beautiful' flower, 'interesting' book",
          "🏃‍♀️ Quality: 'strong' person, 'brave' soldier",
          "🌡️ Temperature: 'hot' soup, 'cold' day",
        ],
      },
      {
        type: "text",
        title: "Order of Adjectives",
        content: "When using multiple adjectives, they usually go in a specific order: Opinion, Size, Age, Shape, Color, Origin, Material, Purpose. For example: 'a beautiful (opinion) old (age) Italian (origin) sports (purpose) car.'"
      },
       {
        type: "tip",
        title: "💡 Finding Adjectives",
        content: "Adjectives often answer questions like 'What kind?', 'How many?', 'Which one?', or 'Whose?'. Example: 'the tall man' (What kind of man?).",
      },
    ],
    quiz: [
      { question: "Which word is an adjective in 'The fast car sped away.'?", options: ["fast", "car", "sped", "away"], correctAnswer: 0 },
      { question: "Which of these words is an adjective?", options: ["run", "quickly", "speed", "quick"], correctAnswer: 3 },
      { question: "Which adjective describes color?", options: ["big", "soft", "green", "loud"], correctAnswer: 2 },
      { question: "Choose the adjective in the sentence: 'She wore a beautiful dress.'", options: ["She", "wore", "beautiful", "dress"], correctAnswer: 2 },
      { question: "An adjective describes a...", options: ["verb or adverb", "noun or pronoun", "preposition", "conjunction"], correctAnswer: 1 },
      { question: "Which is the correct order of adjectives?", options: ["a red big car", "a car big red", "a big red car", "a car red big"], correctAnswer: 2 },
      { question: "What question does the adjective answer in 'I have three books.'?", options: ["What kind?", "How many?", "Which one?", "Whose?"], correctAnswer: 1 },
      { question: "Which word is NOT an adjective?", options: ["happy", "sadly", "tall", "smart"], correctAnswer: 1 },
      { question: "Add an adjective: 'It was a ___ day.'", options: ["sun", "hotly", "sunny", "heat"], correctAnswer: 2 },
      { question: "Identify the adjective: 'The music was very loud.'", options: ["music", "was", "very", "loud"], correctAnswer: 3 },
    ],
  },
];
