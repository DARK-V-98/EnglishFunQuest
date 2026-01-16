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
        content: "A noun is a word that names a person, place, thing, or idea. Nouns are the fundamental subjects and objects in sentences, telling us who or what we are talking about.",
      },
      {
        type: "list",
        title: "Types of Nouns",
        content: [
          "🧑‍🤝‍🧑 Person: 'teacher', 'doctor', 'Maria', 'boy', 'team'",
          "🏞️ Place: 'school', 'city', 'London', 'beach', 'kitchen'",
          "📦 Thing: 'book', 'computer', 'chair', 'car', 'tree'",
          "💡 Idea: 'love', 'happiness', 'freedom', 'knowledge', 'courage'",
        ],
      },
      {
        type: "text",
        title: "Common vs. Proper Nouns",
        content: "A 'common noun' is a general name for a person, place, thing, or idea (e.g., 'city', 'river', 'author'). A 'proper noun' is the specific name of a particular person, place, or thing (e.g., 'Paris', 'the Nile', 'Jane Austen'). Proper nouns always start with a capital letter."
      },
       {
        type: "list",
        title: "Singular and Plural Nouns",
        content: [
          "Most nouns are made plural (more than one) by adding '-s' or '-es'. Example: 'cat' → 'cats'; 'box' → 'boxes'.",
          "For nouns ending in '-y' after a consonant, change 'y' to 'ies'. Example: 'baby' → 'babies'.",
          "Some nouns have irregular plurals that don't follow a rule. Example: 'child' → 'children'; 'man' → 'men'; 'mouse' → 'mice'; 'foot' → 'feet'.",
          "Some nouns stay the same whether singular or plural. Example: 'sheep' → 'sheep'; 'fish' → 'fish'."
        ],
      },
      {
        type: "tip",
        title: "💡 Possessive Nouns",
        content: "To show that something belongs to a noun, we usually add an apostrophe (') and an 's'. For example: 'the dog's toy' (the toy belongs to the dog); 'Maria's book' (the book belongs to Maria). For plural nouns ending in 's', just add an apostrophe: 'the students' classroom'.",
      },
    ],
    quiz: [
      { question: "Which of the following is a proper noun?", sinhala_translation: "පහත දැක්වෙන ඒවායින් නාම පදයක් වන්නේ කුමක්ද?", options: ["city", "mountain", "Amazon River", "continent"], correctAnswer: 2 },
      { question: "What is the plural of 'woman'?", sinhala_translation: "'woman' යන්නෙහි බහු වචනය කුමක්ද?", options: ["womans", "womanes", "womens", "women"], correctAnswer: 3 },
      { question: "In 'The children's toys were scattered,' which is the possessive noun?", sinhala_translation: "'The children's toys were scattered,' යන්නෙහි සන්තක නාම පදය කුමක්ද?", options: ["children's", "toys", "scattered", "The"], correctAnswer: 0 },
      { question: "Which noun is an 'idea'?", sinhala_translation: "කුමන නාම පදය 'අදහසක්' ද?", options: ["library", "pencil", "justice", "engineer"], correctAnswer: 2 },
      { question: "What is the correct plural of 'wolf'?", sinhala_translation: "'wolf' යන්නෙහි නිවැරදි බහු වචනය කුමක්ද?", options: ["wolfs", "wolfes", "wolves", "wolve"], correctAnswer: 2 },
      { question: "Which sentence uses a proper noun correctly?", sinhala_translation: "කුමන වාක්‍යය නාම පදයක් නිවැරදිව භාවිතා කරයිද?", options: ["We visited the City of paris.", "We visited the city of Paris.", "we visited the City of Paris.", "We visited the city of paris."], correctAnswer: 1 },
      { question: "Which of these nouns can be the same in both singular and plural form?", sinhala_translation: "මෙම නාම පදවලින් ඒක වචන සහ බහු වචන දෙකෙහිම එකම විය හැක්කේ කුමක්ද?", options: ["deer", "house", "car", "apple"], correctAnswer: 0 },
      { question: "Choose the sentence with the correct possessive noun.", sinhala_translation: "නිවැරදි සන්තක නාම පදය සහිත වාක්‍යය තෝරන්න.", options: ["The cats's bowl is empty.", "The cat's bowl is empty.", "The cats bowl is empty.", "The cat is bowl empty."], correctAnswer: 1 },
      { question: "How many common nouns are in this sentence: 'The student left his book on the bus.'?", sinhala_translation: "මෙම වාක්‍යයේ පොදු නාම පද කීයක් තිබේද: 'The student left his book on the bus.'?", options: ["One", "Two", "Three", "Four"], correctAnswer: 2 },
      { question: "What is the plural of 'potato'?", sinhala_translation: "'potato' යන්නෙහි බහු වචනය කුමක්ද?", options: ["potatos", "potato's", "potatoes", "potato"], correctAnswer: 2 },
      { question: "Which word is NOT a noun?", sinhala_translation: "නාම පදයක් නොවන වචනය කුමක්ද?", options: ["education", "beautiful", "computer", "friendship"], correctAnswer: 1 },
      { question: "Identify the proper noun in 'My favorite author is Mark Twain.'", sinhala_translation: "'My favorite author is Mark Twain.' හි නාම පදය හඳුනා ගන්න.", options: ["author", "favorite", "Mark Twain", "My"], correctAnswer: 2 },
      { question: "What is the possessive form for multiple dogs? 'The ___ leashes are tangled.'", sinhala_translation: "බල්ලන් කිහිප දෙනෙකු සඳහා සන්තක ස්වරූපය කුමක්ද? 'The ___ leashes are tangled.'", options: ["dogs'", "dog's", "dogses", "dogs's"], correctAnswer: 0 },
      { question: "What is the plural of 'leaf'?", sinhala_translation: "'leaf' යන්නෙහි බහු වචනය කුමක්ද?", options: ["leafs", "leaves", "leafes", "leavs"], correctAnswer: 1 },
      { question: "Which of the following is a 'common noun'?", sinhala_translation: "පහත දැක්වෙන ඒවායින් 'පොදු නාම පදයක්' වන්නේ කුමක්ද?", options: ["Mr. Smith", "teacher", "England", "January"], correctAnswer: 1 }
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
        content: "A verb is a word that expresses a physical or mental action or a state of being. Every complete sentence must have a verb. They are the 'engine' that powers the sentence.",
      },
      {
        type: "list",
        title: "Action vs. Linking Verbs",
        content: [
          "🏃 Action Verbs: Show something you can 'do'. (e.g., 'run', 'think', 'jump', 'study', 'write', 'create').",
          "🔗 Linking Verbs: Connect the subject to a word that describes or renames it. They don't show action. (e.g., 'is', 'am', 'are', 'was', 'were', 'seems', 'feels', 'becomes'). Example: 'He 'is' a doctor.' ('is' links 'He' and 'doctor')."
        ],
      },
      {
        type: "list",
        title: "Verb Tenses: Simple and Continuous",
        content: [
          "Simple Present: For habits or facts. (e.g., 'I walk to school every day.')",
          "Present Continuous: For actions happening right now. (e.g., 'I am walking to school.')",
          "Simple Past: For finished actions in the past. (e.g., 'I walked to school yesterday.')",
          "Past Continuous: For ongoing actions in the past. (e.g., 'I was walking when it started to rain.')",
          "Simple Future: For actions that will happen. (e.g., 'I will walk to school tomorrow.')"
        ],
      },
       {
        type: "tip",
        title: "💡 Helping (Auxiliary) Verbs",
        content: "Helping verbs like 'be' (am, is, are), 'do' (do, does, did), and 'have' (have, has, had) work with the main verb to create different tenses and moods. Example: 'She 'is' reading.' ('is' helps the main verb 'reading').",
      },
    ],
    quiz: [
      { question: "Which sentence is in the Present Continuous tense?", sinhala_translation: "වර්තමාන අඛණ්ඩ කාලයෙන් ඇති වාක්‍යය කුමක්ද?", options: ["She reads a book.", "She will read a book.", "She is reading a book.", "She read a book."], correctAnswer: 2 },
      { question: "Identify the linking verb: 'The soup tastes delicious.'", sinhala_translation: "සම්බන්ධක ක්‍රියා පදය හඳුනා ගන්න: 'The soup tastes delicious.'", options: ["soup", "tastes", "delicious", "The"], correctAnswer: 1 },
      { question: "What is the Simple Past tense of 'go'?", sinhala_translation: "'go' හි සරල අතීත කාලය කුමක්ද?", options: ["goed", "gone", "went", "will go"], correctAnswer: 2 },
      { question: "Which is the auxiliary (helping) verb in 'We have finished our homework.'?", sinhala_translation: "'We have finished our homework.' හි සහායක ක්‍රියා පදය කුමක්ද?", options: ["We", "have", "finished", "homework"], correctAnswer: 1 },
      { question: "What is the Simple Future tense of 'study'?", sinhala_translation: "'study' හි සරල අනාගත කාලය කුමක්ද?", options: ["studied", "studies", "is studying", "will study"], correctAnswer: 3 },
      { question: "Which of these is an action verb?", sinhala_translation: "මේවායින් ක්‍රියා පදයක් වන්නේ කුමක්ද?", options: ["is", "seems", "feels", "writes"], correctAnswer: 3 },
      { question: "Choose the correct verb: 'Yesterday, they ___ to the cinema.'", sinhala_translation: "නිවැරදි ක්‍රියා පදය තෝරන්න: 'Yesterday, they ___ to the cinema.'", options: ["go", "are going", "went", "will go"], correctAnswer: 2 },
      { question: "What is the base form of the verb 'spoken'?", sinhala_translation: "'spoken' ක්‍රියා පදයේ මූලික ස්වරූපය කුමක්ද?", options: ["speak", "spoke", "speaks", "speaking"], correctAnswer: 0 },
      { question: "Which sentence uses a linking verb?", sinhala_translation: "සම්බන්ධක ක්‍රියා පදයක් භාවිතා කරන වාක්‍යය කුමක්ද?", options: ["He runs fast.", "He felt tired.", "He ate the apple.", "He will sing a song."], correctAnswer: 1 },
      { question: "Change to Past Continuous: 'I play soccer.'", sinhala_translation: "අතීත අඛණ්ඩයට වෙනස් කරන්න: 'I play soccer.'", options: ["I played soccer.", "I will play soccer.", "I was playing soccer.", "I have played soccer."], correctAnswer: 2 },
      { question: "Which of these is NOT a verb?", sinhala_translation: "මේවායින් ක්‍රියා පදයක් නොවන වචනය කුමක්ද?", options: ["analyze", "creative", "construct", "imagine"], correctAnswer: 1 },
      { question: "What does an auxiliary verb do?", sinhala_translation: "සහායක ක්‍රියා පදයක් කරන්නේ කුමක්ද?", options: ["It is the main action.", "It describes a noun.", "It helps the main verb.", "It connects two sentences."], correctAnswer: 2 },
      { question: "Find the main verb in: 'You should listen carefully.'", sinhala_translation: "'You should listen carefully.' හි ප්‍රධාන ක්‍රියා පදය සොයන්න.", options: ["You", "should", "listen", "carefully"], correctAnswer: 2 },
      { question: "Which sentence is in the Simple Present tense?", sinhala_translation: "සරල වර්තමාන කාලයෙන් ඇති වාක්‍යය කුමක්ද?", options: ["The sun is shining.", "The sun shined.", "The sun shines brightly.", "The sun will shine."], correctAnswer: 2 },
      { question: "What is the past tense of 'bring'?", sinhala_translation: "'bring' හි අතීත කාලය කුමක්ද?", options: ["brang", "bringed", "brought", "brung"], correctAnswer: 2 },
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
        content: "An adjective is a word that describes or modifies a noun or a pronoun. It provides more information, making your sentences more vivid and specific. Adjectives answer questions like 'What kind?', 'How many?', 'Which one?', and 'Whose?'.",
      },
      {
        type: "list",
        title: "Comparative and Superlative Adjectives",
        content: [
          "Adjectives can compare things. A 'comparative' adjective compares two things (usually ends in '-er' or uses 'more'). Example: 'This box is 'bigger' than that one.'",
          "A 'superlative' adjective compares three or more things (usually ends in '-est' or uses 'most'). Example: 'This is the 'biggest' box of all.'",
          "Irregular Adjectives: Some change completely. Good → better → best. Bad → worse → worst.",
        ],
      },
      {
        type: "text",
        title: "Order of Adjectives",
        content: "When using multiple adjectives before a noun, they usually follow a specific order: Opinion (beautiful), Size (large), Age (old), Shape (round), Color (blue), Origin (Italian), Material (wooden), and Purpose (dining). Example: 'a 'beautiful, large, old, round, blue, Italian, wooden, dining' table.'"
      },
       {
        type: "tip",
        title: "💡 Adverbs are Different!",
        content: "Be careful not to confuse adjectives with adverbs. Adjectives describe nouns ('a 'quick' runner'), while adverbs describe verbs, adjectives, or other adverbs, often ending in '-ly' ('He runs 'quickly'').",
      },
    ],
    quiz: [
      { question: "What is the superlative form of 'good'?", sinhala_translation: "'good' හි සුපිරි ස්වරූපය කුමක්ද?", options: ["gooder", "goodest", "better", "best"], correctAnswer: 3 },
      { question: "Which word is an adjective? 'She sang a beautiful song.'", sinhala_translation: "නාම විශේෂණයක් වන වචනය කුමක්ද? 'She sang a beautiful song.'", options: ["She", "sang", "beautiful", "song"], correctAnswer: 2 },
      { question: "What is the comparative form of 'intelligent'?", sinhala_translation: "'intelligent' හි සංසන්දනාත්මක ස්වරූපය කුමක්ද?", options: ["intelligent-er", "more intelligent", "most intelligent", "intelligenter"], correctAnswer: 1 },
      { question: "Which is the correct order? 'She bought a ___ car.'", sinhala_translation: "නිවැරදි අනුපිළිවෙල කුමක්ද? 'She bought a ___ car.'", options: ["red new sports", "new sports red", "new red sports", "sports new red"], correctAnswer: 2 },
      { question: "An adjective modifies (describes) a ___.", sinhala_translation: "නාම විශේෂණයක් ___ වෙනස් කරයි (විස්තර කරයි).", options: ["verb or adverb", "noun or pronoun", "preposition only", "sentence"], correctAnswer: 1 },
      { question: "What is the superlative form of 'bad'?", sinhala_translation: "'bad' හි සුපිරි ස්වරූපය කුමක්ද?", options: ["badder", "baddest", "worse", "worst"], correctAnswer: 3 },
      { question: "Which of these is NOT an adjective?", sinhala_translation: "මේවායින් නාම විශේෂණයක් නොවන වචනය කුමක්ද?", options: ["friendly", "lonely", "lovely", "quickly"], correctAnswer: 3 },
      { question: "Choose the sentence with the correct adjective form: 'This is the ___ book I have ever read.'", sinhala_translation: "නිවැරදි නාම විශේෂණ ස්වරූපය සහිත වාක්‍යය තෝරන්න: 'This is the ___ book I have ever read.'", options: ["interesting", "more interesting", "most interesting", "interestingest"], correctAnswer: 2 },
      { question: "Which adjective answers the question 'How many?'", sinhala_translation: "'කීයක්ද?' යන ප්‍රශ්නයට පිළිතුරු දෙන නාම විශේෂණය කුමක්ද?", options: ["blue", "several", "heavy", "that"], correctAnswer: 1 },
      { question: "What is the comparative form of 'heavy'?", sinhala_translation: "'heavy' හි සංසන්දනාත්මක ස්වරූපය කුමක්ද?", options: ["heavy-er", "heavier", "more heavy", "most heavy"], correctAnswer: 1 },
      { question: "In 'The wooden fence was old and gray,' how many adjectives are there?", sinhala_translation: "'The wooden fence was old and gray,' හි නාම විශේෂණ කීයක් තිබේද?", options: ["One", "Two", "Three", "Four"], correctAnswer: 2 },
      { question: "Which word correctly completes the sentence? 'My brother is ___ than me.'", sinhala_translation: "වාක්‍යය නිවැරදිව සම්පූර්ණ කරන වචනය කුමක්ද? 'My brother is ___ than me.'", options: ["tall", "taller", "tallest", "more tall"], correctAnswer: 1 },
      { question: "Which of these describes 'Origin'?", sinhala_translation: "මේවායින් 'සම්භවය' විස්තර කරන්නේ කුමක්ද?", options: ["leather", "French", "huge", "antique"], correctAnswer: 1 },
      { question: "What is the opposite of a 'wide' street?", sinhala_translation: "'පුළුල්' වීදියක විරුද්ධ පදය කුමක්ද?", options: ["long", "broad", "narrow", "big"], correctAnswer: 2 },
      { question: "Which adjective would you use to describe a sound?", sinhala_translation: "ශබ්දයක් විස්තර කිරීමට ඔබ භාවිතා කරන නාම විශේෂණය කුමක්ද?", options: ["delicious", "bright", "smooth", "melodious"], correctAnswer: 3 }
    ],
  },
];
