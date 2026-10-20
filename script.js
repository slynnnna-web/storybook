// ========== ALL 30 BOOKS DATA ==========
const books = [
    {
        id: 1,
        title: "Where the Wild Things Are",
        author: "Maurice Sendak",
        genre: "Children's Fantasy",
        cover: "image/wherethewildthingsare_mauricesendak_01.jpg",
        chapter: "Chapter 1: The Wild Rumpus",
        story: "Max is a young boy with a wild imagination who spends his day wearing a wolf costume and causing trouble at home. After misbehaving and upsetting his mother, he is sent to his bedroom without supper. While sitting alone, Max imagines that his room has transformed into a huge forest with tall trees and a mysterious ocean. He sails across the sea until he reaches an island inhabited by enormous creatures called the Wild Things. Although the creatures look frightening, Max uses his confidence to become their king, and they celebrate by having a wild rumpus together. After enjoying his adventures, Max begins to miss home and the comfort of his family. He sails back to his bedroom and discovers that his supper is still waiting for him, reminding him that he is loved even when he makes mistakes."
    },
    {
        id: 2,
        title: "The Wizard of Oz",
        author: "L. Frank Baum",
        genre: "Classic Fantasy",
        cover: "image/wizaedofoz_frankbaum_02.jpg",
        chapter: "Chapter 1: The Cyclone",
        story: "Dorothy Gale lives with her Aunt Em and Uncle Henry in Kansas, where life is simple but sometimes difficult. One day, a powerful cyclone carries Dorothy and her dog, Toto, far away from home and drops their house into the magical Land of Oz. After accidentally killing the Wicked Witch of the East, Dorothy receives magical shoes and learns that the Wizard of Oz may be able to help her return to Kansas. She follows the Yellow Brick Road toward the Emerald City and meets a Scarecrow who wants a brain, a Tin Woodman who wishes for a heart, and a Cowardly Lion who longs for courage. Together, they travel through dangerous forests and face many challenges while trying to reach the Wizard. When they discover that the Wizard is not as powerful as they expected, they must find another way to achieve their wishes. Dorothy eventually learns that the power to return home has been with her all along, and she discovers how important family and home truly are."
    },
    {
        id: 3,
        title: "Charlie and the Chocolate Factory",
        author: "Roald Dahl",
        genre: "Children's Fiction",
        cover: "image/charlieandthechocolatefactory_ Roald Dahl_03.jpg",
        chapter: "Chapter 1: Here Comes Charlie",
        story: "Charlie Bucket is a kind and humble boy who lives with his parents and four grandparents in a small, poor house. Although his family has very little money, Charlie dreams of visiting the famous chocolate factory owned by the mysterious Willy Wonka. When Wonka announces that five Golden Tickets have been hidden inside chocolate bars, children everywhere begin searching for them. Against all odds, Charlie finds the last ticket and earns the chance to visit the factory with his Grandpa Joe. Inside, the visitors discover incredible inventions, including a chocolate river, unusual candies, and rooms filled with amazing creations. However, the other children repeatedly get into trouble because they cannot control their greed, pride, or bad habits. Charlie remains respectful and honest throughout the adventure, and Wonka eventually reveals that the visit was also a test of character. Because Charlie proves himself worthy, he receives an extraordinary opportunity that could change his family's life forever."
    },
    {
        id: 4,
        title: "The Wild Robot",
        author: "Peter Brown",
        genre: "Sci-Fi / Adventure",
        cover: "image/TheWildRobot_PeterBrown_04.jpg",
        chapter: "Chapter 1: The Ocean",
        story: "Roz is a robot who unexpectedly arrives on a remote island after a cargo ship carrying robots is destroyed during a storm. At first, the island's animals are frightened by her strange appearance and mechanical movements, so they avoid her whenever possible. Roz slowly learns to survive by observing nature, understanding animal behavior, and adapting to her surroundings. Her life changes when she discovers an orphaned gosling named Brightbill and decides to protect him as if he were her own child. She asks other animals for help and learns how to care for the young bird, even though she does not understand everything about being a parent. As Brightbill grows, he learns to fly and eventually joins other geese on their seasonal migration. During this time, Roz builds friendships with the island's creatures and becomes an important member of their community. However, her peaceful life is threatened when robots from the outside world come looking for her, forcing her to confront her origins and the meaning of belonging."
    },
    {
        id: 5,
        title: "Paddington",
        author: "Michael Bond",
        genre: "Children's Literature",
        cover: "image/Paddington_MichaelBond_05.jpg",
        chapter: "Chapter 1: Please Look After This Bear",
        story: "A small bear from Peru travels to London after leaving his home in search of a safer life. When he arrives at Paddington Station, he wears an old hat and carries a suitcase, along with a label asking someone to look after him. Mr. and Mrs. Brown discover the lonely bear and decide to take him home, naming him Paddington after the station where they found him. Paddington tries his best to behave politely and learn the customs of human society, but even ordinary activities often lead to funny accidents. Whether he is shopping, exploring the city, or enjoying a meal, his curiosity creates unexpected situations for the Brown family. Despite these mishaps, Paddington is honest, thoughtful, and always willing to help others. The people around him gradually realize that his unusual behavior comes from his unfamiliarity with human life rather than bad intentions. Through his adventures, Paddington brings laughter and warmth into the Brown household and shows that a stranger can quickly become part of a family."
    },
    {
        id: 6,
        title: "The Polar Express",
        author: "Chris Van Allsburg",
        genre: "Holiday Fantasy",
        cover: "image/The Polar Express_Chris Van Allsburg06.jpg",
        chapter: "Chapter 1: The Train",
        story: "On Christmas Eve, a young boy lies awake in bed, wondering whether Santa Claus truly exists. Just before midnight, he hears a loud train outside his house and discovers that it is the Polar Express, a magical train traveling to the North Pole. The boy climbs aboard and joins other children who are also making the extraordinary journey. Along the way, they experience the wonder of the snowy landscape and the excitement of traveling toward Santa's home. When the train finally reaches the North Pole, the children see Santa preparing to deliver presents around the world. Santa allows the boy to choose the first gift of Christmas, and he asks for a small silver bell from a reindeer's harness. However, the bell later disappears through a hole in his pocket, leaving the boy disappointed until he discovers it has been found. As he grows older, the boy continues to hear the bell ring, while many others can no longer hear its magical sound. The experience reminds him that belief and wonder can remain important even as people grow up."
    },
    {
        id: 7,
        title: "How to Train Your Dragon",
        author: "Cressida Cowell",
        genre: "Fantasy / Comedy",
        cover: "image/How to Train Your Dragon by Cressida Cowell_07.jpg",
        chapter: "Chapter 1: First Catch Your Dragon",
        story: "Hiccup Horrendous Haddock III is a young Viking living on the island of Berk, where boys are expected to prove their courage by capturing and training dragons. Unlike the strongest members of his tribe, Hiccup is small and often struggles to meet the expectations placed upon him. During his dragon-training initiation, he captures a small dragon named Toothless and begins trying to teach him to obey commands. Hiccup discovers that dragons are more complicated than the Vikings believe and that understanding their language and behavior can be more useful than relying on strength. When the training challenge becomes dangerous and the dragons begin causing serious trouble, Hiccup must use his intelligence to help protect his tribe. His unusual skills and willingness to understand the creatures become essential to the survival of his people. Through this adventure, Hiccup learns that a true hero does not have to be the biggest or strongest person in the room. His courage, cleverness, and compassion help him prove that he can become a great Viking in his own way."
    },
    {
        id: 8,
        title: "Jumanji",
        author: "Chris Van Allsburg",
        genre: "Adventure / Fantasy",
        cover: "image/Jumanji by Chris Van Allsburg_08.jpg",
        chapter: "Chapter 1: The Board Game",
        story: "Peter and Judy Shepherd are two children who discover a mysterious board game called Jumanji while spending time in a park. Curious about the game, they bring it home and begin playing without realizing that its instructions describe real dangers. Every turn creates a strange event inside their house, transforming their ordinary afternoon into a frightening adventure. Wild animals appear, a lion causes chaos, and other unexpected dangers make it difficult for the children to continue playing. Peter and Judy soon understand that the only way to stop the strange events is to finish the game. They must stay calm, follow the rules, and help each other even when the situation becomes overwhelming. As the adventure grows more chaotic, the children race to complete the game and restore their home to normal. When they finally finish, everything returns to its proper place, but the experience leaves them with a reminder that some games should never be taken lightly."
    },
    {
        id: 9,
        title: "Mary Poppins",
        author: "P. L. Travers",
        genre: "Fantasy",
        cover: "image/MaryPoppinsbyPLTRAVERS_09.jpg",
        chapter: "Chapter 1: East Wind",
        story: "Jane and Michael Banks live in London with their parents, but their household changes when a mysterious nanny named Mary Poppins arrives. She carries an umbrella, speaks firmly, and seems to possess magical abilities that make ordinary situations extraordinary. Under her care, the children experience adventures that take them beyond the limits of everyday life. They meet unusual characters, visit strange places, and discover that the world is much more interesting than they previously imagined. Mary Poppins can be strict and difficult to understand, but she also teaches the children valuable lessons about behavior, kindness, and imagination. Each adventure reveals a different side of the world and helps the children become more curious and thoughtful. Even when the children cannot explain the magical events they experience, the memories stay with them. Eventually, Mary Poppins leaves as mysteriously as she arrived, reminding the children that some extraordinary experiences cannot last forever."
    },
    {
        id: 10,
        title: "The BFG",
        author: "Roald Dahl",
        genre: "Fantasy",
        cover: "image/thebfg_RoaldDahl_10.jpg",
        chapter: "Chapter 1: The Witching Hour",
        story: "Sophie is a young orphan who cannot sleep one night and looks out of her window to see a giant walking through the streets. The giant notices her and carries her away to Giant Country, where Sophie initially fears that she will be eaten. However, she soon discovers that he is the Big Friendly Giant, a gentle creature who refuses to eat humans and instead collects dreams. The BFG explains that the other giants are much more dangerous because they travel to human lands to eat people, especially children. Sophie becomes determined to help stop them before more innocent people are harmed. Together, she and the BFG develop a plan to warn the Queen of England and convince her that the giants are real. With the Queen's assistance, they organize a way to capture the dangerous giants and protect the people they threaten. Through their friendship, Sophie and the BFG demonstrate that even someone small can make a great difference when they show courage and think creatively."
    },
    {
        id: 11,
        title: "The Bad Guys",
        author: "Aaron Blabey",
        genre: "Comedy / Graphic Novel",
        cover: "image/thebadguys_Aaron Blabey_11.jpg",
        chapter: "Chapter 1: The Good Deed",
        story: "Mr. Wolf has a reputation for being frightening, but he wants to prove that he and his friends can do something good for the world. He brings together Mr. Snake, Mr. Shark, and Mr. Piranha to form a group known as the Bad Guys. Wolf convinces the others to attempt a heroic mission by rescuing animals in trouble instead of frightening people. Their first major mission involves freeing dogs from a dangerous pound, which requires the group to work together despite their very different personalities. The mission quickly becomes chaotic because the animals and the rescuers do not always behave as expected. Each member must use their own abilities, even when their old habits make it difficult to act like heroes. Although their plan does not go perfectly, the group begins to understand that doing good requires more than simply calling themselves good people. Their adventure marks the beginning of a series of missions in which they try to prove that anyone can choose to change."
    },
    {
        id: 12,
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        cover: "image/harrypottersorcerersstine_JKRowlings_12.jpg",
        chapter: "Chapter 1: The Boy Who Lived",
        story: "Harry Potter grows up living with the Dursleys, relatives who treat him poorly and hide the truth about his parents. On his eleventh birthday, Harry discovers that he is a wizard when Hagrid arrives and explains that his parents were also part of the magical world. Harry receives an invitation to Hogwarts School of Witchcraft and Wizardry, where he learns spells, makes friends, and discovers more about his mysterious past. He becomes especially close to Ron Weasley and Hermione Granger, who help him navigate the challenges of school life. During the school year, the three friends uncover clues about a powerful object called the Sorcerer's Stone, which can grant its owner extraordinary abilities. Suspecting that someone is trying to steal it, they investigate the mystery despite the dangers involved. Their search leads them through a series of magical obstacles that test their courage, intelligence, and loyalty. Harry eventually faces a dangerous enemy and learns that love, friendship, and sacrifice are more powerful than the desire for immortality."
    },
    {
        id: 13,
        title: "Bridge to Terabithia",
        author: "Katherine Paterson",
        genre: "Young Adult / Drama",
        cover: "image/bridgetotherabithia_Katherine Paterson_13.jpg",
        chapter: "Chapter 1: Jesse Oliver Aarons, Jr.",
        story: "Jesse Aarons is a young boy who dreams of becoming the fastest runner in his school and finding a place where he can feel special. His life changes when Leslie Burke moves into the neighborhood and becomes his friend despite their different personalities. Leslie is imaginative and confident, while Jesse is more reserved and often struggles with his own insecurities. Together, they discover a wooded area across a creek and create an imaginary kingdom called Terabithia, where they rule as king and queen. Their secret world becomes a place where they can escape their everyday problems, face imaginary enemies, and develop a stronger friendship. As Jesse grows closer to Leslie, he begins to see himself and the world around him differently. However, a tragic accident takes Leslie's life while Jesse is away on a trip, leaving him overwhelmed by grief. With time and the support of his family, Jesse learns to accept his loss and decides to build a bridge to Terabithia, sharing the magical place with his younger sister and keeping Leslie's memory alive."
    },
    {
        id: 14,
        title: "Diary of a Wimpy Kid",
        author: "Jeff Kinney",
        genre: "Humor / Graphic Novel",
        cover: "image/diaryofwimpykid_jeffinney_14.jpg",
        chapter: "Chapter 1: September",
        story: "Greg Heffley begins writing in a journal to record the funny, embarrassing, and frustrating experiences of his daily life. As he starts another year of middle school, he hopes to become popular and avoid the social problems that make school difficult. His best friend, Rowley Jefferson, often gets caught up in Greg's plans, even when their friendship is tested by jealousy and misunderstandings. Greg also struggles with his older brother Rodrick, who enjoys teasing him, and his younger brother Manny, who often receives special treatment from their parents. Throughout the school year, Greg tries different ways to improve his reputation, but his selfish choices and unrealistic expectations frequently lead to trouble. He discovers that popularity is not as simple as he imagined and that trying too hard to impress people can damage important relationships. His journal records these failures with humor, showing how awkward and confusing growing up can be. Despite his mistakes, Greg continues trying to find his place among his classmates and family."
    },
    {
        id: 15,
        title: "The Spiderwick Chronicles",
        author: "Tony DiTerlizzi and Holly Black",
        genre: "Fantasy / Adventure",
        cover: "image/spiderwickchronicles_Tony DiterLizzi_15.jpg",
        chapter: "Chapter 1: The Grace Children",
        story: "Jared, Simon, and Mallory Grace move into the old Spiderwick Estate with their mother and begin noticing strange events around the house. Jared discovers a hidden field guide written by Arthur Spiderwick, which describes magical creatures that ordinary people cannot usually see. Although the guide warns readers about the dangers of interacting with these beings, the children become curious about the mysterious world around them. They soon encounter creatures such as goblins and other supernatural beings, discovering that some are helpful while others can be extremely dangerous. Their adventures become more serious when they realize that the guide contains knowledge that powerful creatures want to control. The siblings must use their different strengths to protect themselves and understand the secrets of the estate. Along the way, they learn to trust one another despite their disagreements and personal struggles. Their discovery transforms their new home into the center of a dangerous adventure filled with magic, mystery, and family teamwork."
    },
    {
        id: 16,
        title: "The Lorax",
        author: "Dr. Seuss",
        genre: "Children's Fable",
        cover: "image/thelorax_DrSeuss_16.jpg",
        chapter: "Chapter 1: The Street of the Lifted Lorax",
        story: "The Once-ler arrives in a beautiful land filled with colorful Truffula Trees and discovers that their soft tops can be used to manufacture a popular product called Thneeds. As his business grows, he begins cutting down more trees to produce additional goods and earn more money. The Lorax, a small creature who speaks for the trees, warns him that his actions are destroying the environment and harming the animals that depend on it. Despite these warnings, the Once-ler continues expanding his factory until the forests disappear and the air and water become polluted. The animals are eventually forced to leave because they can no longer find the food and clean surroundings they need to survive. With the last Truffula Tree gone, the Once-ler's business collapses, leaving him alone among the ruins of the land. Years later, he tells his story to a young boy and gives him the final Truffula seed. He hopes the boy will plant it, grow new trees, and inspire others to protect the environment before it is too late."
    },
    {
        id: 17,
        title: "The Hunger Games",
        author: "Suzanne Collins",
        genre: "Dystopian / Action",
        cover: "image/thehungergames_suzzanecollins_17.jpg",
        chapter: "Chapter 1: The Reaping",
        story: "Katniss Everdeen lives in District 12, one of the poorest districts in Panem, where the Capitol maintains control through fear and strict punishment. When her younger sister Prim is selected for the Hunger Games, Katniss volunteers to take her place, knowing that the competition could cost her life. She travels to the Capitol with fellow tribute Peeta Mellark and receives training before entering an arena where young competitors must fight to survive. Inside the arena, Katniss relies on her hunting skills, resourcefulness, and ability to recognize danger. She forms an alliance with Rue, a young tribute whose death deeply affects her and strengthens her determination to challenge the Games. As the competition becomes more brutal, Katniss and Peeta attempt to survive together rather than simply defeat each other. Their decision to threaten a double death forces the organizers to allow both of them to win. By refusing to follow the Capitol's expectations completely, Katniss becomes a symbol of resistance and gives hope to people who are tired of being controlled."
    },
    {
        id: 18,
        title: "Twilight",
        author: "Stephenie Meyer",
        genre: "Young Adult / Romance",
        cover: "image/twilight_stepheniemeyer_18.jpg",
        chapter: "Chapter 1: First Impressions",
        story: "Bella Swan moves from sunny Phoenix to the rainy town of Forks, Washington, to live with her father, Charlie. At her new school, she meets Edward Cullen, a mysterious student whose unusual behavior and striking appearance make her curious about him. After several strange encounters, Bella discovers that Edward is a vampire who possesses extraordinary speed and strength. Although Edward tries to keep his distance because he fears that his nature could put Bella in danger, their feelings for each other continue to grow. Bella learns more about Edward's family and the difficulties they face while trying to live peacefully among humans. Their relationship becomes more dangerous when James, a tracking vampire, decides to hunt Bella for sport. Edward and his family work to protect her, but Bella must face the terrifying reality of being targeted by a supernatural enemy. Through these events, Bella discovers that loving someone can require courage, trust, and difficult choices."
    },
    {
        id: 19,
        title: "The Maze Runner",
        author: "James Dashner",
        genre: "Dystopian / Sci-Fi",
        cover: "image/themazerunner_jamesdasner_19.jpg",
        chapter: "Chapter 1: The Box",
        story: "Thomas wakes up inside a strange elevator with no memory of his past, and he is taken to a place called the Glade. There, he meets a group of boys who have created their own community while living inside enormous stone walls. Beyond those walls lies a dangerous maze that changes its layout and is filled with terrifying creatures known as Grievers. Each day, a group of runners enters the maze to search for an exit, but nobody has successfully escaped. Thomas feels a strong desire to understand the maze and begins questioning the rules that the Gladers have followed for years. His arrival is followed by the unexpected appearance of Teresa, the first girl to reach the Glade, carrying a mysterious message. As strange events threaten the community, Thomas and his friends realize that they must take greater risks to discover the truth. Their attempts to solve the maze's secrets lead them into a dangerous escape plan that could reveal why they were placed there in the first place."
    },
    {
        id: 20,
        title: "Divergent",
        author: "Veronica Roth",
        genre: "Dystopian / Action",
        cover: "image/divergent_veronica_roth_20.jpg",
        chapter: "Chapter 1: The Choosing Ceremony",
        story: "Beatrice Prior lives in a future version of Chicago, where society is divided into five factions based on qualities such as honesty, bravery, intelligence, kindness, and selflessness. When she reaches the age of sixteen, she must choose which faction will shape the rest of her life. Although she was raised in Abnegation, Beatrice chooses Dauntless, the faction known for its courage and willingness to face danger. During her initiation, she changes her name to Tris and begins training alongside other new members. She struggles through physical challenges, simulations, and difficult tests that reveal both her fears and her strengths. Tris also learns that she is Divergent, meaning she does not fit neatly into a single faction, a discovery that could put her life at risk. As she grows closer to her instructor Four, she uncovers a dangerous political plan that threatens the people around her. Tris must use her intelligence, bravery, and ability to think independently to survive and protect those she loves."
    },
    {
        id: 21,
        title: "The Perks of Being a Wallflower",
        author: "Stephen Chbosky",
        genre: "Coming-of-Age / Drama",
        cover: "image/theperksofbeingwallflower_stephenchbosky_21.jpg",
        chapter: "Chapter 1: Dear Friend",
        story: "Charlie is a quiet teenager who begins writing letters to an unnamed recipient as he enters high school and tries to understand his place in the world. Still struggling with the loss of his best friend, he finds it difficult to connect with other students and often feels invisible. His life begins to change when he meets Patrick and Sam, two older students who welcome him into their friendship group. Through their friendship, Charlie experiences new things, including music, parties, first love, and the challenges of growing up. He becomes more comfortable expressing his feelings and starts to recognize the importance of meaningful relationships. However, Charlie continues to struggle with painful memories and emotions that he does not fully understand. As his relationships become more complicated, he must confront parts of his past that have affected his mental and emotional well-being. Through these experiences, Charlie begins a difficult journey toward understanding himself, accepting support, and finding hope for the future."
    },
    {
        id: 22,
        title: "The Golden Compass",
        author: "Philip Pullman",
        genre: "Fantasy / Adventure",
        cover: "image/thegoldencompass_philippullman_22.jpg",
        chapter: "Chapter 1: The Decanter of Tokay",
        story: "Lyra Belacqua grows up at Jordan College in a world where people have animal companions called dæmons that represent part of their souls. When children begin disappearing, Lyra becomes determined to uncover the truth, especially after her friend Roger goes missing. She receives a mysterious instrument called an alethiometer, which can reveal answers to important questions when used correctly. Her search takes her north, where she encounters the mysterious Gobblers, armored bears, witches, and other people connected to the growing danger. Lyra gradually discovers that the disappearances are linked to experiments involving a mysterious force called Dust. Along the way, she learns to rely on her intelligence, courage, and ability to understand people whose motives are not always clear. She forms important friendships and becomes increasingly determined to rescue the missing children. Her journey eventually leads her toward a discovery that could change her understanding of her world and the forces controlling it."
    },
    {
        id: 23,
        title: "Eragon",
        author: "Christopher Paolini",
        genre: "Epic Fantasy",
        cover: "image/eragorn_christopherpaolini_23.jpg",
        chapter: "Chapter 1: Discovery",
        story: "Eragon is a young farm boy living in the village of Carvahall when he discovers a strange blue stone while hunting in the mountains. The stone later hatches into a dragon named Saphira, making Eragon the first new Dragon Rider in many years. His discovery attracts the attention of the dangerous King Galbatorix, who wants to control the power of the Dragon Riders. After tragedy strikes his family, Eragon leaves his home with Saphira and begins a journey to understand his new abilities. He is guided by Brom, an experienced storyteller who teaches him about magic, sword fighting, and the history of the Riders. As Eragon travels across Alagaësia, he encounters enemies, discovers secrets about his past, and learns that his choices affect more than his own future. He also meets people who oppose the king and begins to understand the importance of the growing rebellion. Eragon must learn to control his powers and accept the responsibilities that come with being a Dragon Rider."
    },
    {
        id: 24,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "High Fantasy",
        cover: "image/thehobbit_jrrtolkien_24.jpg",
        chapter: "Chapter 1: An Unexpected Party",
        story: "Bilbo Baggins is a hobbit who enjoys a quiet life filled with good food, comfort, and familiar routines. His peaceful existence changes when the wizard Gandalf and thirteen dwarves arrive at his home and invite him on an adventure. The dwarves want to reclaim their lost kingdom beneath the Lonely Mountain, where the dragon Smaug guards their treasure. Although Bilbo initially doubts that he is suited for the journey, he agrees to join them and gradually discovers that he is more resourceful than he expected. Along the way, the group faces trolls, goblins, giant spiders, and other dangers that test their courage. Bilbo's life changes especially when he encounters Gollum and finds a mysterious ring that grants its wearer invisibility. As the company approaches the Lonely Mountain, Bilbo uses his intelligence and bravery to help the dwarves with their mission. Their journey leads to a major conflict over the treasure and teaches Bilbo that adventure can reveal strengths hidden beneath an ordinary appearance."
    },
    {
        id: 25,
        title: "Peter Pan",
        author: "J.M. Barrie",
        genre: "Classic Fantasy",
        cover: "image/peterpan_jmbarrie_25.jpg",
        chapter: "Chapter 1: Peter Breaks Through",
        story: "Peter Pan is a boy who refuses to grow up and lives in the magical land of Neverland with the Lost Boys. One night, he visits the Darling children's home and meets Wendy, John, and Michael, inviting them to travel with him. With the help of fairy dust and their belief in magic, the children fly away to an island filled with mermaids, fairies, and other extraordinary creatures. Wendy becomes a caring figure for the Lost Boys, while Peter continues to lead them through exciting adventures. Their happiness is threatened by Captain Hook, a dangerous pirate who wants revenge against Peter after losing his hand to a crocodile. The children must face the pirates and survive the dangers of Neverland while learning to trust one another. As the adventure continues, Wendy begins to realize that she misses her parents and the security of home. Eventually, the children return to the real world, discovering that growing up is a natural part of life even though the memories of childhood can remain magical."
    },
    {
        id: 26,
        title: "Ready Player One",
        author: "Ernest Cline",
        genre: "Sci-Fi / Cyberpunk",
        cover: "image/readyplayerone_ernestcline_26.jpg",
        chapter: "Chapter 1: The OASIS",
        story: "Wade Watts lives in a difficult future where many people escape their problems by spending time in a virtual world called the OASIS. When the creator of the OASIS, James Halliday, dies, he leaves behind a challenge that promises his fortune and control of the virtual world to whoever solves a series of puzzles. Wade becomes obsessed with the challenge because the clues are based on Halliday's interests, including old video games, films, music, and popular culture. After years of searching, Wade discovers the first major clue and begins a dangerous competition against other players. He also meets other contestants who become important allies, even though the competition makes it difficult to know whom to trust. A powerful corporation called IOI wants to win the challenge so it can control the OASIS for profit. Wade must use his knowledge, problem-solving skills, and courage to stay ahead of the corporation. As the final challenges approach, he learns that winning requires more than understanding a virtual world; it also requires making responsible choices in the real one."
    },
    {
        id: 27,
        title: "Ender's Game",
        author: "Orson Scott Card",
        genre: "Sci-Fi / Military",
        cover: "image/ender_orsonscottcard_27.jpg",
        chapter: "Chapter 1: Third",
        story: "Ender Wiggin is a gifted child selected by military leaders to train at Battle School because humanity fears another invasion by an alien species known as the Formics. From a young age, Ender demonstrates unusual intelligence and strategic thinking, making him an important candidate for future military leadership. At Battle School, he participates in increasingly difficult games that test his ability to lead teams and defeat stronger opponents. Although he becomes successful, Ender struggles with loneliness, pressure, and the knowledge that his commanders are constantly evaluating him. His instructors place him in difficult situations to see whether he can make decisions under extreme stress. Eventually, Ender moves into advanced training where the challenges become more intense and realistic. He believes he is participating in a final series of simulations designed to prepare him for war. After achieving what he thinks is another victory in training, Ender discovers the shocking truth about the battles he has been fighting and must confront the moral consequences of his actions."
    },
    {
        id: 28,
        title: "Dune",
        author: "Frank Herbert",
        genre: "Sci-Fi / Epic",
        cover: "image/dune_frankherbert_28.jpg",
        chapter: "Chapter 1: Arrakis",
        story: "Paul Atreides is the son of Duke Leto Atreides and Lady Jessica, whose family is ordered to take control of the desert planet Arrakis. Although Arrakis appears harsh and nearly lifeless, it is the only source of the valuable spice melange, which is essential to space travel and political power. The Atreides family soon becomes trapped in a dangerous conflict involving rival House Harkonnen and the emperor. When their enemies betray them, Paul's life changes dramatically, forcing him and his mother to escape into the desert. There, they encounter the Fremen, a people who have developed remarkable skills for surviving in the unforgiving environment. Paul begins learning their customs while discovering that he may have abilities and a destiny far greater than he imagined. As he gains influence among the Fremen, he faces difficult questions about leadership, revenge, and the future he may bring about. His journey becomes a struggle for survival and power that could reshape the entire universe."
    },
    {
        id: 29,
        title: "Catching Fire",
        author: "Suzanne Collins",
        genre: "Dystopian / Action",
        cover: "image/thehungergamescatchingfire_suzannecollins_29.jpg",
        chapter: "Chapter 1: The Victory Tour",
        story: "After winning the Hunger Games, Katniss Everdeen returns to District 12 with Peeta Mellark, hoping to live peacefully with her family. However, their survival has inspired people across Panem to resist the Capitol, making President Snow view Katniss as a dangerous symbol of rebellion. Snow threatens the people she loves and demands that she convince the districts that her actions were not intended to challenge his authority. As unrest spreads, the Capitol announces a special Hunger Games in which previous victors must compete again. Katniss and Peeta are forced back into the arena, where they encounter experienced opponents and face new dangers. Katniss begins to suspect that some of the tributes are working together as part of a secret plan. During the competition, she forms unexpected alliances and discovers that the rebellion is more organized than she realized. The arena becomes the center of a larger struggle, and Katniss must make a decision that could determine not only her own future but also the fate of the districts."
    },
    {
        id: 30,
        title: "The Iron Giant",
        author: "Ted Hughes",
        genre: "Sci-Fi / Fable",
        cover: "image/theirongiant_tedhughes_30.jpg",
        chapter: "Chapter 1: The Coming of the Iron Man",
        story: "A mysterious giant made of metal arrives on Earth and frightens the people who encounter him because of his enormous size and strange behavior. A young boy named Hogarth discovers the giant and begins to understand that the creature is not simply a mindless machine. Rather than treating him as a monster, Hogarth tries to protect him and help him understand the world around him. As their friendship develops, the giant learns more about human behavior and begins to respond to the kindness shown to him. However, the giant's unusual appearance and destructive capabilities cause fear among people who believe he may be dangerous. When the situation becomes more serious, Hogarth must find a way to prevent others from attacking his friend. The story explores the difference between being feared and actually being evil, showing how understanding can change the way people see something unfamiliar. Through their relationship, Hogarth discovers that compassion and courage can help overcome fear, even when the danger seems impossible to control."
    }
];

// ========== CREATE BOOK CARDS ON HOME PAGE ==========
function showBooks() {
    const grid = document.getElementById("book-grid");
    if (!grid) return;

    books.forEach(function(book) {
        const card = document.createElement("article");
        card.className = "book-card";

        card.innerHTML = `
            <img src="${book.cover}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p class="author">By ${book.author}</p>
            <a href="story.html?id=${book.id}" class="read-btn">Read Story</a>
        `;

        grid.appendChild(card);
    });
}

// ========== LOAD THE CORRECT STORY ==========
function loadStory() {
    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get("id"));

    const book = books.find(function(b) {
        return b.id === id;
    });

    if (!book) return;

    document.getElementById("story-cover").src = book.cover;
    document.getElementById("story-title").textContent = book.title;
    document.getElementById("story-author").textContent = "By " + book.author;
    document.getElementById("story-genre").textContent = "Genre: " + book.genre;
    document.getElementById("chapter-title").textContent = book.chapter;
    document.getElementById("story-text").textContent = book.story;

    document.title = book.title + " - Tales & Books Shelf";
}

// ========== THEME TOGGLE ==========
function setupTheme() {
    const button = document.getElementById("theme-toggle");

    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
    }

    if (button) {
        button.addEventListener("click", function() {
            document.body.classList.toggle("light-mode");

            if (document.body.classList.contains("light-mode")) {
                localStorage.setItem("theme", "light");
            } else {
                localStorage.setItem("theme", "dark");
            }
        });
    }
}

// ========== RUN EVERYTHING WHEN PAGE LOADS ==========
document.addEventListener("DOMContentLoaded", function() {
    showBooks();
    loadStory();
    setupTheme();
});
