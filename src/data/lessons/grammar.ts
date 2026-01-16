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
        content: "A noun is a word that names a person, place, thing, or idea. Nouns are the fundamental subjects and objects in sentences, telling us who or what we are talking about. Everything we can see, touch, or think about has a name, and that name is a noun.",
      },
      {
        type: "list",
        title: "Types of Nouns",
        content: [
          "🧑‍🤝‍🧑 Person: 'teacher', 'doctor', 'Maria', 'boy', 'team', 'artist', 'president'",
          "🏞️ Place: 'school', 'city', 'London', 'beach', 'kitchen', 'country', 'continent'",
          "📦 Thing: 'book', 'computer', 'chair', 'car', 'tree', 'phone', 'planet'",
          "💡 Idea: 'love', 'happiness', 'freedom', 'knowledge', 'courage', 'democracy', 'sadness'",
        ],
      },
      {
        type: "list",
        title: "Common vs. Proper Nouns",
        content: [
          "A 'common noun' is a general, non-specific name for a person, place, thing, or idea. Examples: 'city', 'river', 'author', 'movie', 'company'.",
          "A 'proper noun' is the specific, official name of a particular person, place, or thing. Proper nouns always start with a capital letter. Examples: 'Paris', 'the Nile River', 'Jane Austen', 'Star Wars', 'Google'."
        ],
      },
      {
        type: "list",
        title: "Singular and Plural Nouns",
        content: [
          "A 'singular noun' refers to one person, place, thing, or idea (e.g., 'cat', 'house', 'idea').",
          "A 'plural noun' refers to more than one (e.g., 'cats', 'houses', 'ideas').",
          "Most nouns are made plural by adding '-s' ('dog' → 'dogs') or '-es' for words ending in s, x, z, ch, sh ('box' → 'boxes').",
          "For nouns ending in '-y' after a consonant, change 'y' to 'ies' ('baby' → 'babies'). If the 'y' follows a vowel, just add '-s' ('boy' → 'boys').",
          "For nouns ending in '-f' or '-fe', often change 'f' to 'ves' ('leaf' → 'leaves', 'wife' → 'wives').",
          "Some nouns have irregular plurals: 'child' → 'children', 'man' → 'men', 'mouse' → 'mice', 'foot' → 'feet', 'person' → 'people'.",
          "Some nouns stay the same whether singular or plural: 'sheep' → 'sheep', 'fish' → 'fish', 'deer' → 'deer', 'species' → 'species'."
        ],
      },
      {
        type: "list",
        title: "Countable vs. Uncountable Nouns",
        content: [
          "'Countable nouns' (or count nouns) are things we can count using numbers. They have both a singular and a plural form (e.g., 'one chair', 'two chairs').",
          "'Uncountable nouns' (or mass nouns) are for things we cannot count with numbers. They are often substances, concepts, or liquids. They usually do not have a plural form. Examples: 'water', 'music', 'advice', 'information', 'rice', 'furniture'.",
          "To quantify uncountable nouns, we use phrases like 'a piece of', 'a bottle of', 'a lot of'. For example, you can't say 'two waters', but you can say 'two bottles of water'."
        ]
      },
      {
        type: "tip",
        title: "💡 Possessive Nouns",
        content: "To show that something belongs to a noun (possession), we usually add an apostrophe (') and an 's'. For example: 'the dog's toy' (the toy belongs to the dog); 'Maria's book'. For plural nouns already ending in 's', just add an apostrophe after the 's': 'the students' classroom'. For irregular plural nouns that don't end in 's', add an apostrophe and 's': 'the children's games'.",
      },
    ],
    quiz: [
      { question: "Which of the following is a proper noun?", sinhala_translation: "Which of the following is a proper noun?", options: ["city", "mountain", "Amazon River", "continent"], correctAnswer: 2 },
      { question: "What is the plural of 'woman'?", sinhala_translation: "What is the plural of 'woman'?", options: ["womans", "womanes", "womens", "women"], correctAnswer: 3 },
      { question: "In 'The children's toys were scattered,' which is the possessive noun?", sinhala_translation: "In 'The children's toys were scattered,' which is the possessive noun?", options: ["children's", "toys", "scattered", "The"], correctAnswer: 0 },
      { question: "Which noun represents an idea or concept?", sinhala_translation: "Which noun represents an idea or concept?", options: ["library", "pencil", "justice", "engineer"], correctAnswer: 2 },
      { question: "What is the correct plural of 'wolf'?", sinhala_translation: "What is the correct plural of 'wolf'?", options: ["wolfs", "wolfes", "wolves", "wolve"], correctAnswer: 2 },
      { question: "Which sentence uses a proper noun correctly?", sinhala_translation: "Which sentence uses a proper noun correctly?", options: ["We visited the City of paris.", "We visited the city of Paris.", "we visited the City of Paris.", "We visited the city of paris."], correctAnswer: 1 },
      { question: "Which of these nouns can be the same in both singular and plural form?", sinhala_translation: "Which of these nouns can be the same in both singular and plural form?", options: ["deer", "house", "car", "apple"], correctAnswer: 0 },
      { question: "Choose the sentence with the correct possessive noun.", sinhala_translation: "Choose the sentence with the correct possessive noun.", options: ["The cats's bowl is empty.", "The cat's bowl is empty.", "The cats bowl is empty.", "The cat is bowl empty."], correctAnswer: 1 },
      { question: "How many common nouns are in this sentence: 'The student left his book on the bus.'?", sinhala_translation: "How many common nouns are in this sentence: 'The student left his book on the bus.'?", options: ["One", "Two", "Three", "Four"], correctAnswer: 2 },
      { question: "What is the plural of 'potato'?", sinhala_translation: "What is the plural of 'potato'?", options: ["potatos", "potato's", "potatoes", "potato"], correctAnswer: 2 },
      { question: "Which word is NOT a noun?", sinhala_translation: "Which word is NOT a noun?", options: ["education", "beautiful", "computer", "friendship"], correctAnswer: 1 },
      { question: "Identify the proper noun in 'My favorite author is Mark Twain.'", sinhala_translation: "Identify the proper noun in 'My favorite author is Mark Twain.'", options: ["author", "favorite", "Mark Twain", "My"], correctAnswer: 2 },
      { question: "What is the possessive form for multiple dogs? 'The ___ leashes are tangled.'", sinhala_translation: "What is the possessive form for multiple dogs? 'The ___ leashes are tangled.'", options: ["dogs'", "dog's", "dogses", "dogs's"], correctAnswer: 0 },
      { question: "What is the plural of 'leaf'?", sinhala_translation: "What is the plural of 'leaf'?", options: ["leafs", "leaves", "leafes", "leavs"], correctAnswer: 1 },
      { question: "Which of the following is a 'common noun'?", sinhala_translation: "Which of the following is a 'common noun'?", options: ["Mr. Smith", "teacher", "England", "January"], correctAnswer: 1 },
      { question: "Which of the following is an uncountable noun?", sinhala_translation: "Which of the following is an uncountable noun?", options: ["bottle", "coin", "water", "chair"], correctAnswer: 2 },
      { question: "How would you make 'advice' plural?", sinhala_translation: "How would you make 'advice' plural?", options: ["advices", "advisees", "You can't; it's uncountable", "advice's"], correctAnswer: 2 },
      { question: "What is the plural of 'goose'?", sinhala_translation: "What is the plural of 'goose'?", options: ["gooses", "geese", "goose", "geeses"], correctAnswer: 1 },
      { question: "Which sentence shows correct possession for 'the babies'?", sinhala_translation: "Which sentence shows correct possession for 'the babies'?", options: ["The babies's toys are new.", "The babies' toys are new.", "The baby's toys are new.", "The babies toy's are new."], correctAnswer: 1 },
      { question: "A 'herd' of cattle is an example of what type of noun?", sinhala_translation: "A 'herd' of cattle is an example of what type of noun?", options: ["Proper Noun", "Collective Noun", "Abstract Noun", "Uncountable Noun"], correctAnswer: 1 }
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
        content: "A verb is a word that expresses a physical or mental action or a state of being. Every complete sentence must have a verb. They are the 'engine' that powers the sentence, telling us what the subject is doing or what it is.",
      },
      {
        type: "list",
        title: "Action vs. Linking Verbs",
        content: [
          "🏃 Action Verbs: These show a physical or mental action that you can 'do'. Examples: 'run', 'think', 'jump', 'study', 'write', 'create', 'analyze', 'imagine'.",
          "🔗 Linking Verbs: These do not show action. Instead, they connect the subject of the sentence to a word or phrase that describes or renames it. Common linking verbs include 'is', 'am', 'are', 'was', 'were', 'seems', 'feels', 'becomes', 'appears'. Example: 'He 'is' a doctor.' ('is' links 'He' to his description, 'doctor'). Example: 'The music 'sounds' beautiful.' ('sounds' links 'music' to its description, 'beautiful')."
        ],
      },
      {
        type: "list",
        title: "Regular vs. Irregular Verbs",
        content: [
            "Most verbs are 'regular'. They form their past tense and past participle by adding '-d' or '-ed'. Examples: 'walk' → 'walked', 'play' → 'played', 'arrive' → 'arrived'.",
            "'Irregular verbs' do not follow this pattern and change in unpredictable ways. You must memorize them. Examples: 'go' → 'went' → 'gone'; 'eat' → 'ate' → 'eaten'; 'begin' → 'began' → 'begun'; 'is' → 'was' → 'been'."
        ]
      },
      {
        type: "list",
        title: "Understanding Verb Tenses",
        content: [
          "Simple Present: For habits, repeated actions, or general facts. (e.g., 'She 'walks' to school every day.' 'The Earth 'revolves' around the Sun.')",
          "Present Continuous: For actions happening right now or around the current time. (e.g., 'I 'am walking' to school now.' 'They 'are studying' for their exams this week.')",
          "Simple Past: For actions that started and finished at a specific time in the past. (e.g., 'I 'walked' to school yesterday.')",
          "Past Continuous: For ongoing actions in the past that were interrupted by another event. (e.g., 'I 'was walking' when it started to rain.')",
          "Present Perfect: For actions that happened at an unspecified time in the past or that began in the past and continue to the present. (e.g., 'I 'have walked' this path many times.' 'She 'has lived' here for ten years.')",
          "Simple Future: For actions that will happen in the future. (e.g., 'I 'will walk' to school tomorrow.')"
        ],
      },
       {
        type: "tip",
        title: "💡 Helping (Auxiliary) and Modal Verbs",
        content: "Helping verbs like 'be' (am, is, are), 'do' (do, does, did), and 'have' (have, has, had) work with the main verb to create different tenses and moods (e.g., 'She 'is' reading.'). Modal verbs are a special type of helping verb that express ability, possibility, permission, or obligation. Common modals include 'can', 'could', 'may', 'might', 'must', 'shall', 'should', 'will', and 'would'. (e.g., 'You 'should' finish your homework.')",
      },
    ],
    quiz: [
      { question: "Which sentence is in the Present Continuous tense?", sinhala_translation: "Which sentence is in the Present Continuous tense?", options: ["She reads a book.", "She will read a book.", "She is reading a book.", "She read a book."], correctAnswer: 2 },
      { question: "Identify the linking verb: 'The soup tastes delicious.'", sinhala_translation: "Identify the linking verb: 'The soup tastes delicious.'", options: ["soup", "tastes", "delicious", "The"], correctAnswer: 1 },
      { question: "What is the Simple Past tense of 'go'?", sinhala_translation: "What is the Simple Past tense of 'go'?", options: ["goed", "gone", "went", "will go"], correctAnswer: 2 },
      { question: "Which is the auxiliary (helping) verb in 'We have finished our homework.'?", sinhala_translation: "Which is the auxiliary (helping) verb in 'We have finished our homework.'?", options: ["We", "have", "finished", "homework"], correctAnswer: 1 },
      { question: "What is the Simple Future tense of 'study'?", sinhala_translation: "What is the Simple Future tense of 'study'?", options: ["studied", "studies", "is studying", "will study"], correctAnswer: 3 },
      { question: "Which of these is an action verb?", sinhala_translation: "Which of these is an action verb?", options: ["is", "seems", "feels", "writes"], correctAnswer: 3 },
      { question: "Choose the correct verb: 'Yesterday, they ___ to the cinema.'", sinhala_translation: "Choose the correct verb: 'Yesterday, they ___ to the cinema.'", options: ["go", "are going", "went", "will go"], correctAnswer: 2 },
      { question: "What is the base form of the verb 'spoken'?", sinhala_translation: "What is the base form of the verb 'spoken'?", options: ["speak", "spoke", "speaks", "speaking"], correctAnswer: 0 },
      { question: "Which sentence uses a linking verb?", sinhala_translation: "Which sentence uses a linking verb?", options: ["He runs fast.", "He felt tired.", "He ate the apple.", "He will sing a song."], correctAnswer: 1 },
      { question: "Change to Past Continuous: 'I play soccer.'", sinhala_translation: "Change to Past Continuous: 'I play soccer.'", options: ["I played soccer.", "I will play soccer.", "I was playing soccer.", "I have played soccer."], correctAnswer: 2 },
      { question: "Which of these is NOT a verb?", sinhala_translation: "Which of these is NOT a verb?", options: ["analyze", "creative", "construct", "imagine"], correctAnswer: 1 },
      { question: "What does an auxiliary verb do?", sinhala_translation: "What does an auxiliary verb do?", options: ["It is the main action.", "It describes a noun.", "It helps the main verb.", "It connects two sentences."], correctAnswer: 2 },
      { question: "Find the main verb in: 'You should listen carefully.'", sinhala_translation: "Find the main verb in: 'You should listen carefully.'", options: ["You", "should", "listen", "carefully"], correctAnswer: 2 },
      { question: "Which sentence is in the Simple Present tense?", sinhala_translation: "Which sentence is in the Simple Present tense?", options: ["The sun is shining.", "The sun shined.", "The sun shines brightly.", "The sun will shine."], correctAnswer: 2 },
      { question: "What is the past tense of 'bring'?", sinhala_translation: "What is the past tense of 'bring'?", options: ["brang", "bringed", "brought", "brung"], correctAnswer: 2 },
      { question: "Which sentence is in the Present Perfect tense?", sinhala_translation: "Which sentence is in the Present Perfect tense?", options: ["I see the movie.", "I saw the movie.", "I will see the movie.", "I have seen the movie."], correctAnswer: 3 },
      { question: "Which of the following is a modal verb?", sinhala_translation: "Which of the following is a modal verb?", options: ["is", "do", "have", "can"], correctAnswer: 3 },
      { question: "What is the past participle of 'eat'?", sinhala_translation: "What is the past participle of 'eat'?", options: ["ate", "eaten", "eat", "eats"], correctAnswer: 1 },
      { question: "The verb 'became' is an example of a...", sinhala_translation: "The verb 'became' is an example of a...", options: ["Action Verb", "Helping Verb", "Linking Verb", "Modal Verb"], correctAnswer: 2 },
      { question: "Complete the sentence: 'She ___ her keys yesterday.'", sinhala_translation: "Complete the sentence: 'She ___ her keys yesterday.'", options: ["loses", "has lost", "lost", "is losing"], correctAnswer: 2 }
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
        content: "An adjective is a word that describes or modifies a noun or a pronoun. It provides more information, making your sentences more vivid and specific. Adjectives answer questions like 'What kind?' (a 'red' car), 'How many?' ('several' cars), 'Which one?' ('that' car), and 'Whose?' ('her' car).",
      },
      {
        type: "list",
        title: "Comparative and Superlative Adjectives",
        content: [
          "Adjectives can compare things. For one-syllable adjectives, add '-er' for the 'comparative' and '-est' for the 'superlative'. (e.g., 'big' → 'bigger' → 'biggest').",
          "For adjectives with two or more syllables, use 'more' for the comparative and 'most' for the superlative. (e.g., 'beautiful' → 'more beautiful' → 'most beautiful').",
          "For two-syllable adjectives ending in 'y', change 'y' to 'i' and add '-er' or '-est'. (e.g., 'happy' → 'happier' → 'happiest').",
          "Irregular Adjectives change completely and must be memorized: 'good' → 'better' → 'best'; 'bad' → 'worse' → 'worst'; 'far' → 'further' → 'furthest'."
        ],
      },
      {
        type: "list",
        title: "Order of Adjectives (OSASCOMP)",
        content: [
          "When using multiple adjectives before a noun, they usually follow a specific order. A common mnemonic is OSASCOMP:",
          "1. Opinion: 'beautiful', 'ugly', 'interesting', 'lovely'",
          "2. Size: 'large', 'small', 'tiny', 'huge'",
          "3. Age: 'old', 'new', 'young', 'ancient'",
          "4. Shape: 'round', 'square', 'triangular'",
          "5. Color: 'blue', 'red', 'green', 'black'",
          "6. Origin: 'Italian', 'American', 'Chinese'",
          "7. Material: 'wooden', 'metal', 'cotton', 'plastic'",
          "8. Purpose: 'dining' (table), 'sleeping' (bag)",
          "Example: 'She sat at a 'beautiful, large, old, round, brown, Italian, wooden, dining' table.'"
        ]
      },
       {
        type: "tip",
        title: "💡 Adverbs vs. Adjectives",
        content: "Be careful not to confuse adjectives with adverbs. Adjectives describe nouns or pronouns ('a 'quick' runner'). Adverbs describe verbs, adjectives, or other adverbs, and often (but not always) end in '-ly' ('He runs 'quickly'').",
      },
    ],
    quiz: [
      { question: "What is the superlative form of 'good'?", sinhala_translation: "What is the superlative form of 'good'?", options: ["gooder", "goodest", "better", "best"], correctAnswer: 3 },
      { question: "Which word is an adjective? 'She sang a beautiful song.'", sinhala_translation: "Which word is an adjective? 'She sang a beautiful song.'", options: ["She", "sang", "beautiful", "song"], correctAnswer: 2 },
      { question: "What is the comparative form of 'intelligent'?", sinhala_translation: "What is the comparative form of 'intelligent'?", options: ["intelligent-er", "more intelligent", "most intelligent", "intelligenter"], correctAnswer: 1 },
      { question: "Which is the correct order? 'She bought a ___ car.'", sinhala_translation: "Which is the correct order? 'She bought a ___ car.'", options: ["red new sports", "new sports red", "new red sports", "sports new red"], correctAnswer: 2 },
      { question: "An adjective modifies (describes) a ___.", sinhala_translation: "An adjective modifies (describes) a ___.", options: ["verb or adverb", "noun or pronoun", "preposition only", "sentence"], correctAnswer: 1 },
      { question: "What is the superlative form of 'bad'?", sinhala_translation: "What is the superlative form of 'bad'?", options: ["badder", "baddest", "worse", "worst"], correctAnswer: 3 },
      { question: "Which of these is NOT an adjective?", sinhala_translation: "Which of these is NOT an adjective?", options: ["friendly", "lonely", "lovely", "quickly"], correctAnswer: 3 },
      { question: "Choose the sentence with the correct adjective form: 'This is the ___ book I have ever read.'", sinhala_translation: "Choose the sentence with the correct adjective form: 'This is the ___ book I have ever read.'", options: ["interesting", "more interesting", "most interesting", "interestingest"], correctAnswer: 2 },
      { question: "Which adjective answers the question 'How many?'", sinhala_translation: "Which adjective answers the question 'How many?'", options: ["blue", "several", "heavy", "that"], correctAnswer: 1 },
      { question: "What is the comparative form of 'heavy'?", sinhala_translation: "What is the comparative form of 'heavy'?", options: ["heavy-er", "heavier", "more heavy", "most heavy"], correctAnswer: 1 },
      { question: "In 'The wooden fence was old and gray,' how many adjectives are there?", sinhala_translation: "In 'The wooden fence was old and gray,' how many adjectives are there?", options: ["One", "Two", "Three", "Four"], correctAnswer: 2 },
      { question: "Which word correctly completes the sentence? 'My brother is ___ than me.'", sinhala_translation: "Which word correctly completes the sentence? 'My brother is ___ than me.'", options: ["tall", "taller", "tallest", "more tall"], correctAnswer: 1 },
      { question: "Which of these describes 'Origin'?", sinhala_translation: "Which of these describes 'Origin'?", options: ["leather", "French", "huge", "antique"], correctAnswer: 1 },
      { question: "What is the opposite of a 'wide' street?", sinhala_translation: "What is the opposite of a 'wide' street?", options: ["long", "broad", "narrow", "big"], correctAnswer: 2 },
      { question: "Which adjective would you use to describe a sound?", sinhala_translation: "Which adjective would you use to describe a sound?", options: ["delicious", "bright", "smooth", "melodious"], correctAnswer: 3 },
      { question: "Which sentence follows the correct order of adjectives?", sinhala_translation: "Which sentence follows the correct order of adjectives?", options: ["He has a leather old black jacket.", "He has an old black leather jacket.", "He has a black leather old jacket.", "He has an old leather black jacket."], correctAnswer: 1 },
      { question: "What is the comparative form of 'far'?", sinhala_translation: "What is the comparative form of 'far'?", options: ["farrer", "more far", "farther", "farest"], correctAnswer: 2 },
      { question: "In the phrase 'those green apples,' what type of adjective is 'those'?", sinhala_translation: "In the phrase 'those green apples,' what type of adjective is 'those'?", options: ["Descriptive", "Demonstrative", "Interrogative", "Possessive"], correctAnswer: 1 },
      { question: "Which adjective is made from a verb? (A participle)", sinhala_translation: "Which adjective is made from a verb? (A participle)", options: ["The 'running' water.", "The 'blue' water.", "The 'cold' water.", "The 'clear' water."], correctAnswer: 0 },
      { question: "Which word is an adverb, not an adjective?", sinhala_translation: "Which word is an adverb, not an adjective?", options: ["The music was 'loud'.", "He is a 'fast' runner.", "She spoke 'softly'.", "It was a 'hard' test."], correctAnswer: 2 }
    ],
  },
];
