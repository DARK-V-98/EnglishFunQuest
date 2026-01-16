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
  {
    id: "the-magical-seed",
    title: "The Magical Seed",
    description: "What happens when you plant a mysterious seed?",
    icon: "stories",
    color: "primary",
    content: [
      { id: 'p1', type: 'paragraph', text: "Lily found a shiny, rainbow-colored seed in her garden. 'What could this be?' she wondered.", emoji: "🌱", nextId: 'p2' },
      { id: 'p2', type: 'paragraph', text: "She planted the seed in a small pot and gave it some water. The next morning, a tiny sprout was already there!", emoji: "💧", nextId: 'p3' },
      { id: 'p3', type: 'paragraph', text: "The plant grew and grew, faster than any plant she had ever seen. Soon, it reached her window.", emoji: "🌿", nextId: 'p4' },
      { id: 'p4', type: 'paragraph', text: "One day, a beautiful flower bloomed. It sparkled in the sun and smelled like strawberries! It was a magical flower!", emoji: "🍓", isEnd: true }
    ]
  },
  {
    id: "the-brave-knight",
    title: "The Brave Little Knight",
    description: "A knight who is afraid of the dark.",
    icon: "stories",
    color: "secondary",
    content: [
      { id: 'start', type: 'paragraph', text: "Sir Leo was a brave knight, but he had a secret. He was afraid of the dark! One night, the Queen's cat went missing. 'You must find her!' said the Queen.", emoji: "🤺", nextId: 'p2' },
      { id: 'p2', type: 'paragraph', text: "Leo knew he had to go into the dark woods. He felt very scared. What should he take with him?", emoji: "🌲", choices: [{ text: "Take a shiny sword", nextId: 'sword' }, { text: "Take a bright lantern", nextId: 'lantern' }] },
      { id: 'sword', type: 'paragraph', text: "He took his shiny sword. It gleamed, but it didn't make the woods less dark. He wished he had a light.", emoji: "⚔️", nextId: 'p2' },
      { id: 'lantern', type: 'paragraph', text: "He took the bright lantern. The light danced on the trees and made the path clear. He wasn't scared anymore!", emoji: "🏮", nextId: 'p4' },
      { id: 'p4', type: 'paragraph', text: "With his lantern, he found the little cat hiding under a bush. He brought her back to the castle and became the bravest knight of all.", emoji: "🐱", isEnd: true }
    ]
  },
  {
    id: "talk-to-animals",
    title: "The Girl Who Talked to Animals",
    description: "Lily discovers a special secret.",
    icon: "stories",
    color: "accent",
    content: [
      { id: 'p1', type: 'paragraph', text: "Lily was walking in the park when she saw a squirrel chattering in a tree. 'Hello there!' she said.", emoji: "👧", nextId: 'p2' },
      { id: 'p2', type: 'paragraph', text: "To her surprise, the squirrel answered! 'Hello! I can't find my nuts!' said the squirrel.", emoji: "🐿️", nextId: 'p3' },
      { id: 'p3', type: 'paragraph', text: "Lily could understand him! She helped the squirrel find his nuts buried under a big leaf. The squirrel was very happy.", emoji: "🍁", nextId: 'p4' },
      { id: 'p4', type: 'paragraph', text: "From that day on, Lily had many animal friends. She could talk to all of them!", emoji: "❤️", isEnd: true }
    ]
  },
  {
    id: "missing-toy-mystery",
    title: "The Missing Toy Mystery",
    description: "Become a detective and find the lost teddy bear.",
    icon: "stories",
    color: "purple",
    content: [
      { id: 'start', type: 'paragraph', text: "Tom's favorite teddy bear, Barnaby, was gone! 'I must find him!' said Tom. He looked around his room. Where should he check first?", emoji: "🧸", choices: [{ text: "Look under the bed", nextId: 'bed' }, { text: "Look in the toy box", nextId: 'toybox' }] },
      { id: 'bed', type: 'paragraph', text: "Tom looked under his bed. He found a dusty sock and a red crayon, but no Barnaby. 'He's not here!' he sighed.", emoji: "🛏️", nextId: 'toybox' },
      { id: 'toybox', type: 'paragraph', text: "He looked in the toy box. He saw dolls, cars, and blocks. At the very bottom, under a pile of books, was Barnaby!", emoji: "📦", nextId: 'found' },
      { id: 'found', type: 'paragraph', text: "'Barnaby!' Tom shouted happily. He hugged his teddy bear tight. The mystery was solved!", emoji: "🥳", isEnd: true }
    ]
  },
  {
    id: "trip-to-the-moon",
    title: "A Trip to the Moon",
    description: "A child dreams of an adventure in space.",
    icon: "stories",
    color: "pink",
    content: [
      { id: 'start', type: 'paragraph', text: "Leo's new backpack had a strange dial on it. When he turned it, his room started to spin!", emoji: '🎒', nextId: 'p2' },
      { id: 'p2', type: 'paragraph', text: "WHOOSH! He was standing in a field next to a giant dinosaur! \"Wow!\" he said. \"I'm in the past!\"", emoji: '🦖', nextId: 'p3' },
      { id: 'p3', type: 'paragraph', text: 'He saw huge T-Rex and long-necked Brachiosaurus. He was careful not to get too close.', emoji: '🦕', nextId: 'p4' },
      { id: 'p4', type: 'paragraph', text: 'He turned the dial again and was back in his room, just in time for dinner. It was the most amazing secret ever.', emoji: '🤫', isEnd: true }
    ]
  },
   {
    id: 'sleepy-bear',
    title: 'The Sleepy Bear',
    description: 'A bear who doesn’t want to hibernate.',
    icon: 'stories',
    color: 'primary',
    content: [
      { id: 'start', type: 'paragraph', text: 'Barnaby the bear was supposed to sleep all winter. "But I want to see the snow!" he told his mom.', emoji: '🐻', nextId: 'p2' },
      { id: 'p2', type: 'paragraph', text: 'One morning, he snuck out of the den. The world was covered in white, sparkling snow!', emoji: '❄️', nextId: 'p3' },
      { id: 'p3', type: 'paragraph', text: 'He tried to play with a rabbit, but he was too sleepy. He tried to catch a fish, but he yawned a big yawn.', emoji: '🥱', nextId: 'p4' },
      { id: 'p4', type: 'paragraph', text: 'Finally, Barnaby curled up under a pine tree and fell fast asleep. Winter was for sleeping after all!', emoji: '😴', isEnd: true },
    ],
  },
  {
    id: 'rainbow-colors-story',
    title: 'The Colors of the Rainbow',
    description: 'A story about how the rainbow got its colors.',
    icon: 'stories',
    color: 'secondary',
    content: [
      { id: 'start', type: 'paragraph', text: 'Once, the colors were all separate. Red, Orange, Yellow, Green, Blue, and Purple all thought they were the best.', emoji: '🎨', nextId: 'p2' },
      { id: 'p2', type: 'paragraph', text: 'They argued all day long. "I am the color of the sun!" said Yellow. "I am the color of the sky!" said Blue.', emoji: '☀️', nextId: 'p3' },
      { id: 'p3', type: 'paragraph', text: 'The rain heard them arguing and had an idea. It started to rain while the sun was still shining.', emoji: '🌧️', nextId: 'p4' },
      { id: 'p4', type: 'paragraph', text: 'A beautiful arch appeared in the sky, with all the colors together in perfect harmony. They learned they were best when they were all together.', emoji: '🌈', isEnd: true },
    ],
  },
  {
    id: 'friendly-ghost',
    title: 'The Friendly Ghost',
    description: 'Gus the ghost just wants a friend.',
    icon: 'stories',
    color: 'accent',
    content: [
      { id: 'start', type: 'paragraph', text: 'Gus was a little ghost who lived in an old house. He was very lonely because everyone was scared of him.', emoji: '👻', nextId: 'p2' },
      { id: 'p2', type: 'paragraph', text: "One day, a girl named Lucy moved in. Gus floated shyly in the corner. Should he try to say hello?", emoji: '🤔', choices: [{ text: "Say 'BOO!' loudly", nextId: 'boo' }, { text: "Wave and whisper 'hello'", nextId: 'hello' }] },
      { id: 'boo', type: 'paragraph', text: "Gus shouted 'BOO!'. Lucy got scared and ran away. Gus felt even more lonely.", emoji: '😭', nextId: 'p2' },
      { id: 'hello', type: 'paragraph', text: "Gus waved and whispered 'hello'. Lucy smiled. 'You're not scary at all!' she said. 'Do you want to play?'", emoji: '👧', nextId: 'p4' },
      { id: 'p4', type: 'paragraph', text: "Gus and Lucy became best friends. They played hide-and-seek all day, and Gus was never lonely again.", emoji: '😊', isEnd: true },
    ],
  },
  {
    id: 'animals-talk-day',
    title: 'The Day the Animals Talked',
    description: 'For one day, all animals can speak English!',
    icon: 'stories',
    color: 'purple',
    content: [
      { id: 'start', type: 'paragraph', text: "One magical morning, Tim woke up and his dog, Sparky, said, 'Good morning, Tim!'", emoji: '🐶', nextId: 'p2' },
      { id: 'p2', type: 'paragraph', text: "Tim was shocked! All the animals could talk! A bird sang, 'The weather is lovely!' A cat complained, 'My food bowl is empty!'", emoji: '🐦', nextId: 'p3' },
      { id: 'p3', type: 'paragraph', text: "Tim spent the whole day listening to the animals' stories. He learned that squirrels are worried about winter and that frogs love to sing in the rain.", emoji: '🐸', nextId: 'p4' },
      { id: 'p4', type: 'paragraph', text: "The next day, the magic was gone. But Tim always remembered to be kind to his animal friends.", emoji: '❤️', isEnd: true },
    ],
  },
  {
    id: 'little-boat-adventure',
    title: "The Little Boat's Big Adventure",
    description: 'A small boat explores the big ocean.',
    icon: 'stories',
    color: 'pink',
    content: [
      { id: 'start', type: 'paragraph', text: 'A little blue boat named Finley dreamed of the big ocean. "I want to see a whale!" he told the other boats.', emoji: '⛵', nextId: 'p2' },
      { id: 'p2', type: 'paragraph', text: "One day, he sailed out of the safe harbor and into the deep blue sea. He saw playful dolphins and colorful fish.", emoji: '🐬', nextId: 'p3' },
      { id: 'p3', type: 'paragraph', text: "Suddenly, he saw a huge tail splash in the water! A giant, gentle whale swam by. 'Hello, little one,' the whale sang.", emoji: '🐳', nextId: 'p4' },
      { id: 'p4', type: 'paragraph', text: "Finley was so happy! He had seen a whale. He sailed back home, excited to tell everyone about his big adventure.", emoji: '🏡', isEnd: true },
    ],
  },
  {
    id: 'secret-old-tree',
    title: 'The Secret of the Old Tree',
    description: 'Kids find a treasure map in a tree.',
    icon: 'stories',
    color: 'primary',
    content: [
      { id: 'start', type: 'paragraph', text: "Leo and Mia loved to play near the giant old oak tree in the park. One day, they found a small, loose piece of bark.", emoji: '🌳', nextId: 'p2' },
      { id: 'p2', type: 'paragraph', text: "Behind the bark was a hidden hole. Inside, they found a rolled-up piece of old paper. It was a treasure map!", emoji: '🗺️', nextId: 'p3' },
      { id: 'p3', type: 'paragraph', text: "The map had a big 'X' on it. 'X marks the spot!' said Leo. Where did the map lead?", emoji: '🤔', choices: [{ text: "To the slide", nextId: 'slide' }, { text: "To the sandbox", nextId: 'sandbox' }] },
      { id: 'slide', type: 'paragraph', text: "They went to the slide, but there was nothing there. The map must be pointing somewhere else.", emoji: '🛝', nextId: 'p3' },
      { id: 'sandbox', type: 'paragraph', text: "They followed the map to the sandbox. They dug and dug until their shovel hit something hard. It was a wooden box filled with shiny chocolate coins!", emoji: '🍫', isEnd: true },
    ],
  },
  {
    id: 'penguin-wants-to-fly',
    title: 'The Penguin Who Wanted to Fly',
    description: 'Percy the penguin has a big dream.',
    icon: 'stories',
    color: 'secondary',
    content: [
      { id: 'start', type: 'paragraph', text: "Percy the penguin watched the seagulls soar in the sky. 'I want to fly, too!' he said.", emoji: '🐧', nextId: 'p2' },
      { id: 'p2', type: 'paragraph', text: "He flapped his little wings as hard as he could, but he just waddled on the ice. He didn't give up!", emoji: '💪', nextId: 'p3' },
      { id: 'p3', type: 'paragraph', text: "He ran to the edge of a cliff and jumped! He didn't fly... he dove! Splash! He shot through the water faster than any bird could fly in the air.", emoji: '🌊', nextId: 'p4' },
      { id: 'p4', type: 'paragraph', text: "Percy realized he couldn't fly in the sky, but he could fly through the water. And that was just as wonderful.", emoji: '😊', isEnd: true },
    ],
  },
  {
    id: 'grumpy-cloud',
    title: 'The Grumpy Cloud',
    description: 'A cloud that learns to be happy.',
    icon: 'stories',
    color: 'accent',
    content: [
      { id: 'start', type: 'paragraph', text: 'Colin was a big, gray, grumpy cloud. He floated around all day, blocking the sun and grumbling.', emoji: '☁️', nextId: 'p2' },
      { id: 'p2', type: 'paragraph', text: "One day, a little girl looked up at him. 'Mr. Cloud,' she said, 'my flowers are thirsty.'", emoji: '👧', nextId: 'p3' },
      { id: 'p3', type: 'paragraph', text: "Colin grumbled, but he let out a little rain. The girl cheered as the flowers drank the water and stood up tall.", emoji: '🌸', nextId: 'p4' },
      { id: 'p4', type: 'paragraph', text: "Seeing the happy flowers made Colin feel happy, too. He wasn't a grumpy cloud anymore. He was a helpful rain cloud!", emoji: '🌧️', isEnd: true },
    ],
  },
  {
    id: 'boy-plants-forest',
    title: 'The Boy Who Planted a Forest',
    description: 'One small boy can make a big difference.',
    icon: 'stories',
    color: 'purple',
    content: [
      { id: 'start', type: 'paragraph', text: 'Javi lived in a place where there were no trees. The land was dry and empty.', emoji: '👦', nextId: 'p2' },
      { id: 'p2', type: 'paragraph', text: 'He found a single seed and planted it. He watered it every day. A tiny tree began to grow.', emoji: '🌱', nextId: 'p3' },
      { id: 'p3', type: 'paragraph', text: 'Every year, he planted more seeds. Other people saw what he was doing and started to help.', emoji: '🤝', nextId: 'p4' },
      { id: 'p4', type: 'paragraph', text: 'After many years, the empty land was a beautiful green forest, full of birds and animals, all thanks to one little boy.', emoji: '🌳', isEnd: true },
    ],
  },
  {
    id: 'princess-saves-dragon',
    title: 'The Princess Who Saved the Dragon',
    description: 'A brave princess helps a dragon in trouble.',
    icon: 'stories',
    color: 'primary',
    content: [
      { id: 'start', type: 'paragraph', text: 'Princess Isabel was not afraid of anything. When she heard a dragon was stuck in a cave, she decided to help.', emoji: '👸', nextId: 'p2' },
      { id: 'p2', type: 'paragraph', text: "The dragon was big and green, with a kind face. His wing was caught under a heavy rock.", emoji: '🐲', nextId: 'p3' },
      { id: 'p3', type: 'paragraph', text: "Isabel and the dragon pushed the rock together. 'One, two, three, PUSH!' With a big effort, the rock moved and the dragon was free.", emoji: '💪', nextId: 'p4' },
      { id: 'p4', type: 'paragraph', text: "The dragon was so grateful, he gave her a ride through the clouds. They became the best of friends.", emoji: '☁️', isEnd: true },
    ],
  },
  {
    id: 'magical-paintbrush',
    title: 'The Magical Paintbrush',
    description: 'Whatever is painted comes to life.',
    icon: 'stories',
    color: 'secondary',
    content: [
      { id: 'start', type: 'paragraph', text: 'An old artist gave Maya a paintbrush. "This is magic," he whispered. "Whatever you paint, will become real."', emoji: '🎨', nextId: 'p2' },
      { id: 'p2', type: 'paragraph', text: "Maya didn't believe him at first. She decided to paint something simple. What should she paint?", emoji: '🤔', choices: [{ text: "A red apple", nextId: 'apple' }, { text: "A blue bird", nextId: 'bird' }] },
      { id: 'apple', type: 'paragraph', text: 'She painted a juicy red apple. As soon as she finished, the apple popped off the paper! She took a bite. It was delicious!', emoji: '🍎', nextId: 'p4' },
      { id: 'bird', type: 'paragraph', text: 'She painted a beautiful blue bird. The bird fluttered its wings, flew off the paper, and began to sing a lovely song.', emoji: '🐦', nextId: 'p4' },
      { id: 'p4', type: 'paragraph', text: 'Maya realized she had a great power. She decided to use the magic paintbrush to help people and make the world a more beautiful place.', emoji: '🌍', isEnd: true },
    ],
  },
  {
    id: 'first-day-of-school-story',
    title: 'The First Day of School',
    description: 'A story about being a little nervous but very excited.',
    icon: 'stories',
    color: 'accent',
    content: [
      { id: 'start', type: 'paragraph', text: "It was Sam's first day of school. He felt a little nervous. His tummy felt like it was full of butterflies.", emoji: '🏫', nextId: 'p2' },
      { id: 'p2', type: 'paragraph', text: 'His mom gave him a hug. "You will have so much fun and make new friends," she said.', emoji: '🤗', nextId: 'p3' },
      { id: 'p3', type: 'paragraph', text: 'At school, the teacher was very kind. They painted pictures, sang songs, and played with blocks.', emoji: '👩‍🏫', nextId: 'p4' },
      { id: 'p4', type: 'paragraph', text: "Sam met a boy named Ali and they shared their crayons. By the end of the day, Sam couldn't wait to come back tomorrow!", emoji: '😄', isEnd: true },
    ],
  },
  {
    id: 'super-fast-snail',
    title: 'The Super-Fast Snail',
    description: 'Sheldon the snail enters a race.',
    icon: 'stories',
    color: 'purple',
    content: [
      { id: 'start', type: 'paragraph', text: "Sheldon was a snail. He was very, very slow. But he had a dream: to win the annual garden race!", emoji: '🐌', nextId: 'p2' },
      { id: 'p2', type: 'paragraph', text: "The other bugs laughed. 'A snail can't win!' said the speedy beetle. But Sheldon didn't listen. He practiced every day.", emoji: '🏁', nextId: 'p3' },
      { id: 'p3', type: 'paragraph', text: 'On race day, the beetle zoomed ahead. But he got tired and took a nap. Sheldon kept going, slow and steady.', emoji: '😴', nextId: 'p4' },
      { id: 'p4', type: 'paragraph', text: "Slowly but surely, Sheldon crossed the finish line just as the beetle woke up. Sheldon had won! Slow and steady wins the race.", emoji: '🏆', isEnd: true },
    ],
  },
  {
    id: 'lost-star',
    title: 'The Lost Star',
    description: 'A little star falls from the sky.',
    icon: 'stories',
    color: 'pink',
    content: [
      { id: 'start', type: 'paragraph', text: 'Twinkle was a tiny star. One night, she slipped and fell all the way from the sky down to Earth.', emoji: '🌟', nextId: 'p2' },
      { id: 'p2', type: 'paragraph', text: "She landed softly in a field of fireflies. 'I need to get back home!' she cried. 'How can we help?' buzzed the fireflies.", emoji: '💡', nextId: 'p3' },
      { id: 'p3', type: 'paragraph', text: "All the fireflies gathered together. They glowed brighter and brighter, creating a shimmering ladder of light.", emoji: '✨', nextId: 'p4' },
      { id: 'p4', type: 'paragraph', text: "Twinkle climbed the ladder of light, all the way back to her spot in the night sky. She never forgot her kind firefly friends.", emoji: '🌌', isEnd: true },
    ],
  },
];
