let Quiz, Choice, Answers;

function Gestion(){
    Quiz = [
        [//niveau 0
            "Quelle est la langue officielle du Japon ?",
            'Quel est l\'élément chimique dont le symbole est "O" ?',
            'Qui a peint "La Joconde" ?',
            "Quel est le plus grand océan du monde ?",
            "En quelle année l'homme a-t-il marché pour la première fois sur la Lune ?"
        ],
        [//niveau 1
            "Quel est l'animal terrestre le plus rapide ?",
            "Quel est le plus grand pays du monde en superficie ?",
            "Quelle est la monnaie officielle du Royaume-Uni ?",
            "Qui a été le premier empereur de Rome ?",
            "En quelle année la Révolution franéaise a-t-elle commencé ?",
            "Quel roi de France a été décapité pendant la Révolution ?",
            "Quel était le nom du navire sur lequel Christophe Colomb a traversé l'Atlantique en 1492 ?",
            "Quelle est la plus grande île du monde ?",
            "Dans quel océan se trouve l'île de Pâques ?",
            "Quel est le pays le plus peuplé du monde ?"
        ],
        [//niveau 3
            "Quel pays possède la plus grande superficie de forêts tropicales ?",
            "Quel fleuve traverse Paris ?",
            'Qui a ecrit Les Miserables" ?',
            'Quel auteur est célèbre pour sa série de livres "Harry Potter" ?',
            "Quel est le titre du roman de George Orwell qui décrit une société dystopique sous un régime totalitaire ?",
            "Dans quel livre trouve-t-on le personnage de Sherlock Holmes ?",
            'Qui a écrit "L\'étranger" ?',
            "Quel est l'organe principal de la respiration humaine ?",
            'Quel est l\'élément chimique dont le symbole est "Fe" ?',
            "Qui a formulé la théorie de la relativité ?",
            "Quel est le plus grand organe du corps humain ?",
            "De quel élément chimique est composé l'eau ?",
            "Quel est le nom du super-héros alter ego de Bruce Wayne ?",
            "Dans quel film le personnage de Jack Sparrow apparaît-il ?",
            'Qui est le créateur de la série télévisée "Game of Thrones" ?'
        ]
    ];
    
    Choice = [
        [//niveau 1
            ["Coréen", "Chinois", "Japonais"], //Réponse correcte: C) Japonais
            ["Oxygène", "Or", "Osmium"], //Réponse correcte: A) Oxygène
            ["Léonard de Vinci", "Pablo Picasso", "Claude Monet"], //Réponse correcte: A) Léonard de Vinci
            ["Atlantique", "Indien", "Pacifique"], //Réponse correcte: C) Pacifique
            ["1969", "1959", "1979"] //Réponse correcte: A) 1969
        ],
        [//niveau 2
            ["Guépard", "Lion", "Kangourou"], //Réponse correcte: A) Guépard
            ["Russie", "Canada", "Chine"], //Réponse correcte: A) Russie
            ["Dollar", "Livre sterling", "Euro"], //Réponse correcte: B) Livre sterling
            ["Jules César", "Néron", "Auguste"], //Réponse correcte: C) Auguste
            ["1789", "1776", "1804"], //Réponse correcte: A) 1789
            ["Louis XIV", "Louis XVI", "François Ier"], //Réponse correcte: B) Louis XVI
            ["La Santa Maria", "Le Mayflower", "Le Titanic"], //Réponse correcte: A) La Santa Maria
            ["Madagascar", "Groenland", "Australie"], //Réponse correcte: B) Groenland
            ["Océan Atlantique", "Océan Indien", "Océan Pacifique"], //Réponse correcte: C) Océan Pacifique
            ["Inde", "Chine", "états-Unis"] //Réponse correcte: B) Chine
        ],
        [//niveau 3
            ["Indonésie", "Brésil", "Congo"], //Réponse correcte: B) Brésil
            ["La Seine", "Le Rhône", "La Loire"], //Réponse correcte: A) La Seine
            ["Victor Hugo", "Emile Zola", "Albert Camus"], //Réponse correcte: A) Victor Hugo
            ["J.R.R. Tolkien", "J.K. Rowling", "C.S. Lewis"], //Réponse correcte: B) J.K. Rowling
            ["Le Meilleur des mondes", "1984", "Fahrenheit 451"], //Réponse correcte: B) 1984
            ["Les Aventures de Sherlock Holmes","Le Chien des Baskerville","Le Signe des Quatre",], //Réponse correcte: A) Les Aventures de Sherlock Holmes
            ["Albert Camus", "Jean-Paul Sartre", "André Gide"], //Réponse correcte: A) Albert Camus
            ["Le coeur", "Les poumons", "Le foie"], //Réponse correcte: B) Les poumons
            ["Fer", "Fluor", "Francium"], //Réponse correcte: A) Fer
            ["Isaac Newton", "Albert Einstein", "Galileo Galilei"], //Réponse correcte: B) Albert Einstein
            ["Le coeur", "La peau", "Le foie"], //Réponse correcte: B) La peau
            ["Oxygène et azote", "Oxygène et hydrogène", "Hydrogène et carbone"], //Réponse correcte: B) Oxygéne et hydrog�ne
            ["Superman", "Batman", "Spiderman"], //Réponse correcte: B) Batman
            ["Pirates des Caraibes","L'Empire contre-attaque","Les Aventuriers de l'Arche perdue",], //Réponse correcte: A) Pirates des Cara�bes
            [" J.R.R. Tolkien", "George R.R. Martin", "Stephen King"] //Réponse correcte: B) George R.R. Martin
        ]
    ];


    
    Answers = [
        [//niveau 1
            "Japonais",
            "Oxygène",
            "Léonard de Vinci",
            "Pacifique",
            "1969"
        ],
        [//niveau 2
            "Guépard",
            "Russie",
            "Livre sterling",
            "Auguste",
            "1789",
            "Louis XVI",
            "La Santa Maria",
            "Groenland",
            "Océan Pacifique",
            "Chine"
        ],
        [//niveau 3
            'Brésil',
            "La Seine",
            "Victor Hugo",
            "J.K. Rowling",
            "1984",
            "Les Aventures de Sherlock Holmes",
            "Albert Camus",
            "Les poumons",
            "Fer",
            "Albert Einstein",
            "La peau",
            "Oxygène et hydrogène",
            "Batman",
            "Pirates des Caraibes",
            "George R.R. Martin"
        ]
    ];
}