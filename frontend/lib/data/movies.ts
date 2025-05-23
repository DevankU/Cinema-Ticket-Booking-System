// Movie data types
export type Movie = {
  id: number
  title: string
  poster: string
  backdrop?: string
  rating: number
  genre: string
  duration: string
  releaseDate: string
  status: "Now Showing" | "Coming Soon"
  synopsis?: string
  director?: string
  cast?: string[]
  language?: string
}

// Generate 50 movies with different genres, titles, and posters
export const movies: Movie[] = [
  // Now Showing Movies (30)
  {
    id: 1,
    title: "Interstellar: Beyond Time",
    poster: "/placeholder.svg?height=450&width=300&text=&color=1a1a2e&background=0f3460",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=16213e&background=0f3460",
    rating: 4.8,
    genre: "Sci-Fi",
    duration: "2h 45m",
    releaseDate: "2023-11-15",
    status: "Now Showing",
    synopsis: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    language: "English",
  },
  {
    id: 2,
    title: "The Dark Knight Returns",
    poster: "/placeholder.svg?height=450&width=300&text=&color=0d1b2a&background=1b263b",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=0d1b2a&background=1b263b",
    rating: 4.9,
    genre: "Action",
    duration: "2h 30m",
    releaseDate: "2023-10-20",
    status: "Now Showing",
    synopsis: "Batman returns to Gotham City after a decade of absence to fight a new threat to the city.",
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    language: "English",
  },
  {
    id: 3,
    title: "Eternal Sunshine",
    poster: "/placeholder.svg?height=450&width=300&text=&color=ff9a8b&background=ff6a88",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=ff9a8b&background=ff6a88",
    rating: 4.7,
    genre: "Drama",
    duration: "2h 10m",
    releaseDate: "2023-12-05",
    status: "Now Showing",
    synopsis:
      "A couple undergoes a procedure to erase each other from their memories after their relationship turns sour.",
    director: "Michel Gondry",
    cast: ["Jim Carrey", "Kate Winslet", "Kirsten Dunst"],
    language: "English",
  },
  {
    id: 4,
    title: "Mystic River",
    poster: "/placeholder.svg?height=450&width=300&text=&color=2c3e50&background=34495e",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=2c3e50&background=34495e",
    rating: 4.5,
    genre: "Thriller",
    duration: "2h 15m",
    releaseDate: "2023-11-10",
    status: "Now Showing",
    synopsis:
      "The lives of three men who were childhood friends are shattered when one of them suffers a family tragedy.",
    director: "Clint Eastwood",
    cast: ["Sean Penn", "Tim Robbins", "Kevin Bacon"],
    language: "English",
  },
  {
    id: 5,
    title: "Laugh Out Loud",
    poster: "/placeholder.svg?height=450&width=300&text=&color=ffbe0b&background=fb5607",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=ffbe0b&background=fb5607",
    rating: 4.3,
    genre: "Comedy",
    duration: "1h 55m",
    releaseDate: "2023-11-05",
    status: "Now Showing",
    synopsis: "A group of friends embark on a hilarious adventure that tests their friendship and sanity.",
    director: "Judd Apatow",
    cast: ["Seth Rogen", "Jonah Hill", "Emma Stone"],
    language: "English",
  },
  {
    id: 6,
    title: "Haunted Mansion",
    poster: "/placeholder.svg?height=450&width=300&text=&color=240046&background=3c096c",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=240046&background=3c096c",
    rating: 4.2,
    genre: "Horror",
    duration: "2h 05m",
    releaseDate: "2023-10-31",
    status: "Now Showing",
    synopsis: "A family moves into a mansion only to discover it's haunted by malevolent spirits.",
    director: "James Wan",
    cast: ["Vera Farmiga", "Patrick Wilson", "Lili Taylor"],
    language: "English",
  },
  {
    id: 7,
    title: "Ocean's Depth",
    poster: "/placeholder.svg?height=450&width=300&text=&color=03045e&background=0077b6",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=03045e&background=0077b6",
    rating: 4.6,
    genre: "Adventure",
    duration: "2h 20m",
    releaseDate: "2023-11-12",
    status: "Now Showing",
    synopsis: "A team of deep-sea explorers discover an ancient civilization beneath the ocean's surface.",
    director: "James Cameron",
    cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
    language: "English",
  },
  {
    id: 8,
    title: "The Last Dance",
    poster: "/placeholder.svg?height=450&width=300&text=&color=ff0a54&background=ff477e",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=ff0a54&background=ff477e",
    rating: 4.4,
    genre: "Romance",
    duration: "2h 00m",
    releaseDate: "2023-11-08",
    status: "Now Showing",
    synopsis:
      "A professional dancer finds love in the most unexpected place as she prepares for her final performance.",
    director: "Damien Chazelle",
    cast: ["Emma Stone", "Ryan Gosling", "John Legend"],
    language: "English",
  },
  {
    id: 9,
    title: "Quantum Paradox",
    poster: "/placeholder.svg?height=450&width=300&text=&color=3a0ca3&background=4361ee",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=3a0ca3&background=4361ee",
    rating: 4.7,
    genre: "Sci-Fi",
    duration: "2h 25m",
    releaseDate: "2023-10-25",
    status: "Now Showing",
    synopsis: "A physicist discovers a way to manipulate time, leading to unforeseen consequences.",
    director: "Denis Villeneuve",
    cast: ["Hugh Jackman", "Rebecca Ferguson", "Paul Dano"],
    language: "English",
  },
  {
    id: 10,
    title: "Desert Storm",
    poster: "/placeholder.svg?height=450&width=300&text=&color=582f0e&background=7f4f24",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=582f0e&background=7f4f24",
    rating: 4.5,
    genre: "Action",
    duration: "2h 15m",
    releaseDate: "2023-11-01",
    status: "Now Showing",
    synopsis: "A special forces team is sent on a mission to rescue hostages in a war-torn desert region.",
    director: "Kathryn Bigelow",
    cast: ["Tom Hardy", "Idris Elba", "Jessica Chastain"],
    language: "English",
  },
  {
    id: 11,
    title: "The Heist",
    poster: "/placeholder.svg?height=450&width=300&text=&color=283618&background=606c38",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=283618&background=606c38",
    rating: 4.6,
    genre: "Thriller",
    duration: "2h 10m",
    releaseDate: "2023-10-15",
    status: "Now Showing",
    synopsis: "A group of skilled thieves plan the biggest bank heist in history, but things don't go as planned.",
    director: "Steven Soderbergh",
    cast: ["George Clooney", "Brad Pitt", "Matt Damon"],
    language: "English",
  },
  {
    id: 12,
    title: "Whispers in the Dark",
    poster: "/placeholder.svg?height=450&width=300&text=&color=10002b&background=240046",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=10002b&background=240046",
    rating: 4.3,
    genre: "Horror",
    duration: "1h 55m",
    releaseDate: "2023-10-28",
    status: "Now Showing",
    synopsis: "A woman begins to hear mysterious whispers in her new apartment, leading her to uncover dark secrets.",
    director: "Ari Aster",
    cast: ["Florence Pugh", "Jack Reynor", "William Jackson Harper"],
    language: "English",
  },
  {
    id: 13,
    title: "Mountain Peak",
    poster: "/placeholder.svg?height=450&width=300&text=&color=003049&background=d62828",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=003049&background=d62828",
    rating: 4.7,
    genre: "Adventure",
    duration: "2h 30m",
    releaseDate: "2023-11-18",
    status: "Now Showing",
    synopsis: "A group of climbers attempt to scale the world's most dangerous mountain peak.",
    director: "Baltasar Kormákur",
    cast: ["Jason Clarke", "Josh Brolin", "John Hawkes"],
    language: "English",
  },
  {
    id: 14,
    title: "City Lights",
    poster: "/placeholder.svg?height=450&width=300&text=&color=001219&background=005f73",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=001219&background=005f73",
    rating: 4.4,
    genre: "Drama",
    duration: "2h 05m",
    releaseDate: "2023-11-22",
    status: "Now Showing",
    synopsis: "A struggling artist finds inspiration in the bustling city and the people he meets.",
    director: "Greta Gerwig",
    cast: ["Saoirse Ronan", "Timothée Chalamet", "Florence Pugh"],
    language: "English",
  },
  {
    id: 15,
    title: "Funny Business",
    poster: "/placeholder.svg?height=450&width=300&text=&color=ff7b00&background=ff9500",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=ff7b00&background=ff9500",
    rating: 4.2,
    genre: "Comedy",
    duration: "1h 50m",
    releaseDate: "2023-11-25",
    status: "Now Showing",
    synopsis: "A stand-up comedian's life takes a turn when his jokes start coming true.",
    director: "Todd Phillips",
    cast: ["Bradley Cooper", "Zach Galifianakis", "Ed Helms"],
    language: "English",
  },
  {
    id: 16,
    title: "Eternal Love",
    poster: "/placeholder.svg?height=450&width=300&text=&color=ff5a5f&background=c1839f",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=ff5a5f&background=c1839f",
    rating: 4.5,
    genre: "Romance",
    duration: "2h 10m",
    releaseDate: "2023-11-14",
    status: "Now Showing",
    synopsis: "A love story that spans centuries as two souls find each other in different lifetimes.",
    director: "Richard Linklater",
    cast: ["Ethan Hawke", "Julie Delpy", "Vernon Dobtcheff"],
    language: "English",
  },
  {
    id: 17,
    title: "Digital Frontier",
    poster: "/placeholder.svg?height=450&width=300&text=&color=3a0ca3&background=7209b7",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=3a0ca3&background=7209b7",
    rating: 4.6,
    genre: "Sci-Fi",
    duration: "2h 20m",
    releaseDate: "2023-10-18",
    status: "Now Showing",
    synopsis: "A programmer creates an AI that becomes self-aware and challenges the boundaries of reality.",
    director: "Alex Garland",
    cast: ["Oscar Isaac", "Alicia Vikander", "Domhnall Gleeson"],
    language: "English",
  },
  {
    id: 18,
    title: "Shadow Warriors",
    poster: "/placeholder.svg?height=450&width=300&text=&color=000000&background=1a1a1a",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=000000&background=1a1a1a",
    rating: 4.7,
    genre: "Action",
    duration: "2h 15m",
    releaseDate: "2023-11-05",
    status: "Now Showing",
    synopsis: "An elite team of warriors must stop a terrorist organization from unleashing a deadly weapon.",
    director: "Chad Stahelski",
    cast: ["Keanu Reeves", "Halle Berry", "Ian McShane"],
    language: "English",
  },
  {
    id: 19,
    title: "Mind Games",
    poster: "/placeholder.svg?height=450&width=300&text=&color=2b2d42&background=8d99ae",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=2b2d42&background=8d99ae",
    rating: 4.4,
    genre: "Thriller",
    duration: "2h 05m",
    releaseDate: "2023-10-22",
    status: "Now Showing",
    synopsis: "A psychologist becomes entangled in a dangerous game of cat and mouse with a brilliant patient.",
    director: "David Fincher",
    cast: ["Jake Gyllenhaal", "Hugh Jackman", "Viola Davis"],
    language: "English",
  },
  {
    id: 20,
    title: "Nightmare House",
    poster: "/placeholder.svg?height=450&width=300&text=&color=320d3e&background=641a6b",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=320d3e&background=641a6b",
    rating: 4.3,
    genre: "Horror",
    duration: "1h 55m",
    releaseDate: "2023-10-30",
    status: "Now Showing",
    synopsis: "A family's dream home turns into a nightmare as supernatural events begin to occur.",
    director: "Mike Flanagan",
    cast: ["Elisabeth Moss", "Oliver Jackson-Cohen", "Harriet Dyer"],
    language: "English",
  },
  {
    id: 21,
    title: "Wild Expedition",
    poster: "/placeholder.svg?height=450&width=300&text=&color=004b23&background=38b000",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=004b23&background=38b000",
    rating: 4.5,
    genre: "Adventure",
    duration: "2h 25m",
    releaseDate: "2023-11-08",
    status: "Now Showing",
    synopsis: "An explorer leads an expedition into uncharted territory in search of a legendary lost city.",
    director: "James Gray",
    cast: ["Charlie Hunnam", "Robert Pattinson", "Sienna Miller"],
    language: "English",
  },
  {
    id: 22,
    title: "Family Ties",
    poster: "/placeholder.svg?height=450&width=300&text=&color=6b705c&background=a5a58d",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=6b705c&background=a5a58d",
    rating: 4.6,
    genre: "Drama",
    duration: "2h 15m",
    releaseDate: "2023-11-20",
    status: "Now Showing",
    synopsis: "A family reunion brings long-buried secrets to the surface, testing the bonds of blood.",
    director: "Noah Baumbach",
    cast: ["Adam Driver", "Scarlett Johansson", "Laura Dern"],
    language: "English",
  },
  {
    id: 23,
    title: "Office Chaos",
    poster: "/placeholder.svg?height=450&width=300&text=&color=ff9f1c&background=ffbf69",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=ff9f1c&background=ffbf69",
    rating: 4.2,
    genre: "Comedy",
    duration: "1h 45m",
    releaseDate: "2023-11-15",
    status: "Now Showing",
    synopsis: "A day in the life of office workers turns into a series of hilarious mishaps and adventures.",
    director: "Greg Daniels",
    cast: ["Steve Carell", "John Krasinski", "Jenna Fischer"],
    language: "English",
  },
  {
    id: 24,
    title: "First Love",
    poster: "/placeholder.svg?height=450&width=300&text=&color=ff5a5f&background=ff8a8a",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=ff5a5f&background=ff8a8a",
    rating: 4.4,
    genre: "Romance",
    duration: "2h 00m",
    releaseDate: "2023-11-12",
    status: "Now Showing",
    synopsis: "Two high school students navigate the complexities of first love and growing up.",
    director: "John Hughes",
    cast: ["Timothée Chalamet", "Zendaya", "Jacob Elordi"],
    language: "English",
  },
  {
    id: 25,
    title: "Time Warp",
    poster: "/placeholder.svg?height=450&width=300&text=&color=3a0ca3&background=560bad",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=3a0ca3&background=560bad",
    rating: 4.7,
    genre: "Sci-Fi",
    duration: "2h 30m",
    releaseDate: "2023-10-28",
    status: "Now Showing",
    synopsis: "A scientist accidentally creates a time machine and becomes trapped in a loop of alternate realities.",
    director: "Rian Johnson",
    cast: ["Joseph Gordon-Levitt", "Bruce Willis", "Emily Blunt"],
    language: "English",
  },
  {
    id: 26,
    title: "Urban Warfare",
    poster: "/placeholder.svg?height=450&width=300&text=&color=353535&background=5c5c5c",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=353535&background=5c5c5c",
    rating: 4.5,
    genre: "Action",
    duration: "2h 20m",
    releaseDate: "2023-11-02",
    status: "Now Showing",
    synopsis: "A police officer must navigate a city in chaos during a massive criminal uprising.",
    director: "Gareth Evans",
    cast: ["Iko Uwais", "Joe Taslim", "Yayan Ruhian"],
    language: "English",
  },
  {
    id: 27,
    title: "Perfect Crime",
    poster: "/placeholder.svg?height=450&width=300&text=&color=1a1a2e&background=16213e",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=1a1a2e&background=16213e",
    rating: 4.6,
    genre: "Thriller",
    duration: "2h 10m",
    releaseDate: "2023-10-25",
    status: "Now Showing",
    synopsis: "A detective races against time to solve what appears to be the perfect crime.",
    director: "Martin Scorsese",
    cast: ["Leonardo DiCaprio", "Robert De Niro", "Al Pacino"],
    language: "English",
  },
  {
    id: 28,
    title: "Paranormal Activity X",
    poster: "/placeholder.svg?height=450&width=300&text=&color=10002b&background=3a015c",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=10002b&background=3a015c",
    rating: 4.1,
    genre: "Horror",
    duration: "1h 50m",
    releaseDate: "2023-10-31",
    status: "Now Showing",
    synopsis: "A family documents strange occurrences in their new home, revealing a terrifying presence.",
    director: "Oren Peli",
    cast: ["Katie Featherston", "Micah Sloat", "Mark Fredrichs"],
    language: "English",
  },
  {
    id: 29,
    title: "Lost Treasure",
    poster: "/placeholder.svg?height=450&width=300&text=&color=774936&background=c69f7c",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=774936&background=c69f7c",
    rating: 4.5,
    genre: "Adventure",
    duration: "2h 15m",
    releaseDate: "2023-11-10",
    status: "Now Showing",
    synopsis:
      "An archaeologist and a treasure hunter team up to find a legendary artifact before it falls into the wrong hands.",
    director: "Steven Spielberg",
    cast: ["Harrison Ford", "Karen Allen", "Paul Freeman"],
    language: "English",
  },
  {
    id: 30,
    title: "The Prodigy",
    poster: "/placeholder.svg?height=450&width=300&text=&color=001233&background=023e8a",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=001233&background=023e8a",
    rating: 4.7,
    genre: "Drama",
    duration: "2h 20m",
    releaseDate: "2023-11-15",
    status: "Now Showing",
    synopsis: "A young musical prodigy struggles with the pressure of fame and the expectations of those around him.",
    director: "Damien Chazelle",
    cast: ["Miles Teller", "J.K. Simmons", "Melissa Benoist"],
    language: "English",
  },

  // Coming Soon Movies (20)
  {
    id: 31,
    title: "Galaxy Warriors",
    poster: "/placeholder.svg?height=450&width=300&text=&color=0b090a&background=161a1d",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=0b090a&background=161a1d",
    rating: 0,
    genre: "Sci-Fi",
    duration: "2h 20m",
    releaseDate: "2023-12-15",
    status: "Coming Soon",
    synopsis: "A team of intergalactic warriors must defend Earth from an alien invasion.",
    director: "J.J. Abrams",
    cast: ["John Boyega", "Daisy Ridley", "Oscar Isaac"],
    language: "English",
  },
  {
    id: 32,
    title: "Love in Paris",
    poster: "/placeholder.svg?height=450&width=300&text=&color=ff5a5f&background=f15bb5",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=ff5a5f&background=f15bb5",
    rating: 0,
    genre: "Romance",
    duration: "1h 55m",
    releaseDate: "2023-12-20",
    status: "Coming Soon",
    synopsis: "An American tourist falls in love with a French artist during a summer in Paris.",
    director: "Woody Allen",
    cast: ["Owen Wilson", "Rachel McAdams", "Marion Cotillard"],
    language: "English, French",
  },
  {
    id: 33,
    title: "The Last Stand",
    poster: "/placeholder.svg?height=450&width=300&text=&color=540b0e&background=9e2a2b",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=540b0e&background=9e2a2b",
    rating: 0,
    genre: "Action",
    duration: "2h 10m",
    releaseDate: "2024-01-05",
    status: "Coming Soon",
    synopsis: "A retired soldier is called back for one final mission to save his country.",
    director: "Michael Bay",
    cast: ["Dwayne Johnson", "Jason Statham", "Vin Diesel"],
    language: "English",
  },
  {
    id: 34,
    title: "Mystery Island",
    poster: "/placeholder.svg?height=450&width=300&text=&color=006466&background=065a60",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=006466&background=065a60",
    rating: 0,
    genre: "Adventure",
    duration: "2h 15m",
    releaseDate: "2024-01-15",
    status: "Coming Soon",
    synopsis: "A group of tourists become stranded on a mysterious island with supernatural properties.",
    director: "J.A. Bayona",
    cast: ["Chris Pratt", "Bryce Dallas Howard", "Jeff Goldblum"],
    language: "English",
  },
  {
    id: 35,
    title: "The Comedian",
    poster: "/placeholder.svg?height=450&width=300&text=&color=ff9e00&background=ff7b00",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=ff9e00&background=ff7b00",
    rating: 0,
    genre: "Comedy",
    duration: "1h 50m",
    releaseDate: "2024-01-25",
    status: "Coming Soon",
    synopsis: "A washed-up comedian attempts to revive his career while dealing with personal demons.",
    director: "Judd Apatow",
    cast: ["Bill Hader", "Amy Schumer", "LeBron James"],
    language: "English",
  },
  {
    id: 36,
    title: "Shadows of the Past",
    poster: "/placeholder.svg?height=450&width=300&text=&color=2b2d42&background=414361",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=2b2d42&background=414361",
    rating: 0,
    genre: "Thriller",
    duration: "2h 05m",
    releaseDate: "2024-02-10",
    status: "Coming Soon",
    synopsis: "A detective is haunted by a cold case from his past that suddenly becomes active again.",
    director: "David Fincher",
    cast: ["Jake Gyllenhaal", "Rebecca Ferguson", "Benedict Cumberbatch"],
    language: "English",
  },
  {
    id: 37,
    title: "Haunted Forest",
    poster: "/placeholder.svg?height=450&width=300&text=&color=230023&background=3c096c",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=230023&background=3c096c",
    rating: 0,
    genre: "Horror",
    duration: "1h 55m",
    releaseDate: "2024-02-20",
    status: "Coming Soon",
    synopsis: "A group of hikers get lost in a forest known for supernatural occurrences and disappearances.",
    director: "Mike Flanagan",
    cast: ["Anya Taylor-Joy", "Thomasin McKenzie", "Alex Wolff"],
    language: "English",
  },
  {
    id: 38,
    title: "Underwater Kingdom",
    poster: "/placeholder.svg?height=450&width=300&text=&color=03045e&background=0077b6",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=03045e&background=0077b6",
    rating: 0,
    genre: "Adventure",
    duration: "2h 25m",
    releaseDate: "2024-03-01",
    status: "Coming Soon",
    synopsis: "An expedition to the deepest part of the ocean discovers an advanced underwater civilization.",
    director: "James Cameron",
    cast: ["Kate Winslet", "Zoe Saldana", "Sam Worthington"],
    language: "English",
  },
  {
    id: 39,
    title: "The Inheritance",
    poster: "/placeholder.svg?height=450&width=300&text=&color=2b2d42&background=8d99ae",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=2b2d42&background=8d99ae",
    rating: 0,
    genre: "Drama",
    duration: "2h 15m",
    releaseDate: "2024-03-15",
    status: "Coming Soon",
    synopsis: "Siblings reunite after their father's death to claim their inheritance, uncovering family secrets.",
    director: "Rian Johnson",
    cast: ["Daniel Craig", "Chris Evans", "Ana de Armas"],
    language: "English",
  },
  {
    id: 40,
    title: "Laugh Factory",
    poster: "/placeholder.svg?height=450&width=300&text=&color=ff9f1c&background=ffbf69",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=ff9f1c&background=ffbf69",
    rating: 0,
    genre: "Comedy",
    duration: "1h 45m",
    releaseDate: "2024-03-25",
    status: "Coming Soon",
    synopsis: "Behind the scenes at a famous comedy club where aspiring comedians compete for a big break.",
    director: "Adam McKay",
    cast: ["Will Ferrell", "Steve Carell", "Tina Fey"],
    language: "English",
  },
  {
    id: 41,
    title: "Forever After",
    poster: "/placeholder.svg?height=450&width=300&text=&color=ff5a5f&background=ff8ba0",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=ff5a5f&background=ff8ba0",
    rating: 0,
    genre: "Romance",
    duration: "2h 00m",
    releaseDate: "2024-04-05",
    status: "Coming Soon",
    synopsis: "A couple's relationship is tested when one of them is offered a job opportunity across the world.",
    director: "Nancy Meyers",
    cast: ["Anne Hathaway", "Chris Hemsworth", "Rebel Wilson"],
    language: "English",
  },
  {
    id: 42,
    title: "Virtual Reality",
    poster: "/placeholder.svg?height=450&width=300&text=&color=3a0ca3&background=4361ee",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=3a0ca3&background=4361ee",
    rating: 0,
    genre: "Sci-Fi",
    duration: "2h 20m",
    releaseDate: "2024-04-15",
    status: "Coming Soon",
    synopsis: "A virtual reality game becomes too real when players start disappearing in the real world.",
    director: "Steven Spielberg",
    cast: ["Tye Sheridan", "Olivia Cooke", "Ben Mendelsohn"],
    language: "English",
  },
  {
    id: 43,
    title: "Urban Legend",
    poster: "/placeholder.svg?height=450&width=300&text=&color=240046&background=5a189a",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=240046&background=5a189a",
    rating: 0,
    genre: "Horror",
    duration: "1h 55m",
    releaseDate: "2024-04-25",
    status: "Coming Soon",
    synopsis:
      "College students begin to die in ways that resemble urban legends, leading to a race to uncover the killer.",
    director: "Jordan Peele",
    cast: ["Lupita Nyong'o", "Winston Duke", "Elisabeth Moss"],
    language: "English",
  },
  {
    id: 44,
    title: "Gladiator's Return",
    poster: "/placeholder.svg?height=450&width=300&text=&color=6a040f&background=9d0208",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=6a040f&background=9d0208",
    rating: 0,
    genre: "Action",
    duration: "2h 30m",
    releaseDate: "2024-05-05",
    status: "Coming Soon",
    synopsis: "A former gladiator returns to Rome seeking revenge against those who destroyed his family.",
    director: "Ridley Scott",
    cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
    language: "English",
  },
  {
    id: 45,
    title: "The Perfect Alibi",
    poster: "/placeholder.svg?height=450&width=300&text=&color=1a1a2e&background=16213e",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=1a1a2e&background=16213e",
    rating: 0,
    genre: "Thriller",
    duration: "2h 10m",
    releaseDate: "2024-05-15",
    status: "Coming Soon",
    synopsis:
      "A murder suspect with a perfect alibi forces a detective to question everything he knows about the case.",
    director: "Christopher Nolan",
    cast: ["Tom Hardy", "Cillian Murphy", "Florence Pugh"],
    language: "English",
  },
  {
    id: 46,
    title: "Jungle Expedition",
    poster: "/placeholder.svg?height=450&width=300&text=&color=004b23&background=007200",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=004b23&background=007200",
    rating: 0,
    genre: "Adventure",
    duration: "2h 15m",
    releaseDate: "2024-05-25",
    status: "Coming Soon",
    synopsis:
      "An expedition into the Amazon jungle to find a rare plant with healing properties faces unexpected dangers.",
    director: "Alejandro González Iñárritu",
    cast: ["Leonardo DiCaprio", "Tom Holland", "Zendaya"],
    language: "English",
  },
  {
    id: 47,
    title: "Family Reunion",
    poster: "/placeholder.svg?height=450&width=300&text=&color=6b705c&background=a5a58d",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=6b705c&background=a5a58d",
    rating: 0,
    genre: "Drama",
    duration: "2h 05m",
    releaseDate: "2024-06-05",
    status: "Coming Soon",
    synopsis: "Three generations of a family come together for a reunion, bringing old conflicts and new revelations.",
    director: "Barry Jenkins",
    cast: ["Viola Davis", "Regina King", "Mahershala Ali"],
    language: "English",
  },
  {
    id: 48,
    title: "Office Party",
    poster: "/placeholder.svg?height=450&width=300&text=&color=ff9f1c&background=ffbf69",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=ff9f1c&background=ffbf69",
    rating: 0,
    genre: "Comedy",
    duration: "1h 50m",
    releaseDate: "2024-06-15",
    status: "Coming Soon",
    synopsis: "An office Christmas party spirals out of control, leading to hilarious consequences for all involved.",
    director: "Paul Feig",
    cast: ["Melissa McCarthy", "Kristen Wiig", "Kate McKinnon"],
    language: "English",
  },
  {
    id: 49,
    title: "Summer Romance",
    poster: "/placeholder.svg?height=450&width=300&text=&color=ff5a5f&background=ff8ba0",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=ff5a5f&background=ff8ba0",
    rating: 0,
    genre: "Romance",
    duration: "1h 55m",
    releaseDate: "2024-06-25",
    status: "Coming Soon",
    synopsis: "A summer vacation leads to an unexpected romance between two people from very different worlds.",
    director: "Nora Ephron",
    cast: ["Tom Hanks", "Meg Ryan", "Bill Pullman"],
    language: "English",
  },
  {
    id: 50,
    title: "Future World",
    poster: "/placeholder.svg?height=450&width=300&text=&color=3a0ca3&background=4361ee",
    backdrop: "/placeholder.svg?height=600&width=1200&text=&color=3a0ca3&background=4361ee",
    rating: 0,
    genre: "Sci-Fi",
    duration: "2h 25m",
    releaseDate: "2024-07-04",
    status: "Coming Soon",
    synopsis:
      "In a dystopian future, a rebel group fights against an oppressive regime that controls all aspects of life.",
    director: "Lana Wachowski",
    cast: ["Keanu Reeves", "Carrie-Anne Moss", "Yahya Abdul-Mateen II"],
    language: "English",
  },
]

// Helper function to get movies by status
export const getMoviesByStatus = (status: "Now Showing" | "Coming Soon") => {
  return movies.filter((movie) => movie.status === status)
}

// Helper function to get movie by ID
export const getMovieById = (id: number) => {
  return movies.find((movie) => movie.id === id)
}

// Helper function to get featured movies (top rated)
export const getFeaturedMovies = (limit = 3) => {
  return movies
    .filter((movie) => movie.status === "Now Showing")
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit)
}

// Helper function to get movies by genre
export const getMoviesByGenre = (genre: string) => {
  return movies.filter((movie) => movie.genre.toLowerCase() === genre.toLowerCase())
}

// Helper function to search movies
export const searchMovies = (query: string) => {
  const lowercaseQuery = query.toLowerCase()
  return movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(lowercaseQuery) ||
      movie.genre.toLowerCase().includes(lowercaseQuery) ||
      (movie.director && movie.director.toLowerCase().includes(lowercaseQuery)),
  )
}
