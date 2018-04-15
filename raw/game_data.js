"use strict";
var data = {};


// Topics
data.topics = [{
    id: "Sports",
    name: "Sports",
    genreWeightings: [1, 0.6, 0.6, 1, 0.7, 1],
    audienceWeightings: [1, 1, 0.8]
}, {
    id: "Military",
    name: "Military",
    genreWeightings: [1, 0.6, 0.8, 1, 1, 0.6],
    audienceWeightings: [0.7, 0.9, 1]
}, {
    id: "Medieval",
    name: "Medieval",
    genreWeightings: [1, 1, 1, 0.8,
        1, 0.7
    ],
    audienceWeightings: [1, 1, 0.9]
}, {
    id: "Space",
    name: "Space",
    genreWeightings: [1, 0.8, 0.6, 1, 1, 0.7],
    audienceWeightings: [0.8, 1, 1]
}, {
    id: "Racing",
    name: "Racing",
    genreWeightings: [0.9, 0.6, 0.8, 1, 0.7, 1],
    audienceWeightings: [1, 1, 0.9]
}, {
    id: "Fantasy",
    name: "Fantasy",
    genreWeightings: [1, 1, 1, 0.8, 1, 0.6],
    audienceWeightings: [1, 1, 1]
}, {
    id: "Pirate",
    name: "Pirate",
    genreWeightings: [0.8, 1, 0.9, 0.9, 0.7, 0.8],
    audienceWeightings: [1, 1, 0.8]
}, {
    id: "Sci-Fi",
    name: "Sci-Fi",
    genreWeightings: [1, 1, 1, 1, 1, 0.8],
    audienceWeightings: [0.8, 1, 1]
}, {
    id: "Airplane",
    name: "Airplane",
    genreWeightings: [1, 0.6, 0.8, 1, 1, 1],
    audienceWeightings: [1, 1, 0.9]
}, {
    id: "Dungeon",
    name: "Dungeon",
    genreWeightings: [1, 0.8, 1, 1, 1, 0.6],
    audienceWeightings: [0.8, 1, 1]
}, {
    id: "Mystery",
    name: "Mystery",
    genreWeightings: [0.6, 1, 1, 0.8, 0.6, 0.8],
    audienceWeightings: [0.8, 0.9, 1]
}, {
    id: "Martial Arts",
    name: "Martial Arts",
    genreWeightings: [1, 0.8, 1, 1, 0.7, 1],
    audienceWeightings: [0.7, 0.9, 1]
}, {
    id: "History",
    name: "History",
    genreWeightings: [0.8, 0.8, 0.8, 1, 1, 0.9],
    audienceWeightings: [0.8, 1, 0.9]
}, {
    id: "Horror",
    name: "Horror",
    genreWeightings: [1, 1, 0.8, 0.6, 0.7, 0.8],
    audienceWeightings: [0.6, 0.9, 1]
}, {
    id: "Business",
    name: "Business",
    genreWeightings: [0.6, 0.8, 0.8, 1, 1, 0.6],
    audienceWeightings: [0.9, 1, 0.7]
}, {
    id: "Transport",
    name: "Transport",
    genreWeightings: [0.6,
        0.6, 0.6, 1, 1, 0.6
    ],
    audienceWeightings: [0.9, 1, 0.7]
}, {
    id: "Comedy",
    name: "Comedy",
    genreWeightings: [0.6, 1, 0.8, 0.6, 0.6, 1],
    audienceWeightings: [0.8, 0.9, 1]
}, {
    id: "Ninja",
    name: "Ninja",
    genreWeightings: [1, 0.8, 0.8, 0.6, 0.8, 0.9],
    audienceWeightings: [1, 0.9, 0.9]
}, {
    id: "Romance",
    name: "Romance",
    genreWeightings: [0.6, 1, 0.8, 0.9, 0.6, 0.9],
    audienceWeightings: [0.8, 1, 1]
}, {
    id: "Movies",
    name: "Movies",
    genreWeightings: [0.8, 0.8, 0.6, 1, 0.6, 1],
    audienceWeightings: [0.9,
        1, 0.9
    ]
}, {
    id: "Spy",
    name: "Spy",
    genreWeightings: [1, 1, 1, 0.8, 0.7, 0.8],
    audienceWeightings: [0.8, 0.9, 1]
}, {
    id: "Detective",
    name: "Detective",
    genreWeightings: [0.6, 1, 1, 0.8, 0.6, 0.9],
    audienceWeightings: [0.9, 1, 0.8]
}, {
    id: "Cyberpunk",
    name: "Cyberpunk",
    genreWeightings: [1, 0.8, 1,
        0.8, 0.7, 0.6
    ],
    audienceWeightings: [0.7, 0.9, 1]
}, {
    id: "UFO",
    name: "UFO",
    genreWeightings: [1, 0.8, 0.6, 0.8, 1, 0.8],
    audienceWeightings: [0.8, 1, 0.9]
}, {
    id: "Hospital",
    name: "Hospital",
    genreWeightings: [0.6, 0.6, 0.8, 1, 0.8, 0.7],
    audienceWeightings: [0.7, 1, 0.8]
}, {
    id: "Evolution",
    name: "Evolution",
    genreWeightings: [0.7,
        0.6, 0.6, 1, 1, 0.6
    ],
    audienceWeightings: [0.8, 1, 0.7]
}, {
    id: "Time Travel",
    name: "Time Travel",
    genreWeightings: [0.9, 1, 1, 0.7, 0.6, 0.7],
    audienceWeightings: [0.9, 1, 0.8]
}, {
    id: "Life",
    name: "Life",
    genreWeightings: [0.6, 1, 0.9, 1, 0.6, 0.8],
    audienceWeightings: [1, 1, 0.8]
}, {
    id: "Virtual Pet",
    name: "Virtual Pet",
    genreWeightings: [0.6, 0.8, 0.9, 1, 0.9, 1],
    audienceWeightings: [1, 0.8, 0.7]
}, {
    id: "Vocabulary",
    name: "Vocabulary",
    genreWeightings: [0.6,
        0.6, 0.6, 1, 1, 1
    ],
    audienceWeightings: [0.9, 1, 0.6]
}, {
    id: "Hunting",
    name: "Hunting",
    genreWeightings: [1, 0.9, 0.9, 1, 0.7, 0.9],
    audienceWeightings: [0.9, 1, 0.9]
}, {
    id: "Law",
    name: "Law",
    genreWeightings: [0.6, 1, 0.9, 0.9, 0.9, 0.6],
    audienceWeightings: [0.8, 1, 0.7]
}, {
    id: "Game Dev",
    name: "Game Dev",
    genreWeightings: [0.6,
        0.7, 0.6, 1, 0.6, 0.8
    ],
    audienceWeightings: [0.9, 1, 0.7]
}, {
    id: "City",
    name: "City",
    genreWeightings: [0.7, 0.6, 0.7, 1, 1, 0.7],
    audienceWeightings: [0.9, 1, 0.8]
}, {
    id: "School",
    name: "School",
    genreWeightings: [0.8, 1, 1, 1, 1, 0.8],
    audienceWeightings: [1, 0.9, 0.7]
}, {
    id: "Fashion",
    name: "Fashion",
    genreWeightings: [0.6, 0.8, 1, 1, 0.6, 1],
    audienceWeightings: [1, 0.8, 0.6]
}, {
    id: "Zombies",
    name: "Zombies",
    genreWeightings: [1, 0.7, 0.9, 0.7, 0.9, 1],
    audienceWeightings: [0.9,
        0.8, 1
    ]
}, {
    id: "Hacking",
    name: "Hacking",
    genreWeightings: [0.7, 0.8, 0.7, 1, 1, 0.6],
    audienceWeightings: [0.7, 0.9, 1]
}, {
    id: "Government",
    name: "Government",
    genreWeightings: [0.6, 0.6, 0.6, 1, 1, 0.7],
    audienceWeightings: [0.6, 1, 0.8]
}, {
    id: "Prison",
    name: "Prison",
    genreWeightings: [1, 1, 0.8, 1, 0.8, 0.6],
    audienceWeightings: [0.7, 0.9, 1]
}, {
    id: "Surgery",
    name: "Surgery",
    genreWeightings: [0.8, 0.7, 0.6, 1, 0.7, 0.6],
    audienceWeightings: [0.8, 1, 0.9]
}, {
    id: "Music",
    name: "Music",
    genreWeightings: [1, 0.9, 0.6, 1, 0.6, 1],
    audienceWeightings: [1, 0.9, 0.8]
}, {
    id: "Rythm",
    name: "Rhythm",
    genreWeightings: [1, 0.7, 0.7, 1, 0.6, 1],
    audienceWeightings: [1, 0.9, 0.8]
}, {
    id: "Superheroes",
    name: "Superheroes",
    genreWeightings: [1, 0.6, 0.9, 0.6, 0.6, 0.7],
    audienceWeightings: [1, 1, 1]
}, {
    id: "Post Apocalyptic",
    name: "Post Apocalyptic",
    genreWeightings: [1, 0.8, 1, 0.6, 0.9, 0.6],
    audienceWeightings: [0.6, 0.9, 1]
}, {
    id: "Alternate History",
    name: "Alternate History",
    genreWeightings: [1, 0.8, 1, 0.8, 0.9, 0.6],
    audienceWeightings: [0.6, 1, 1]
}, {
    id: "Vampire",
    name: "Vampire",
    genreWeightings: [1, 0.8, 1, 0.6, 0.6, 0.7],
    audienceWeightings: [0.7, 1, 1]
}, {
    id: "Werewolf",
    name: "Werewolf",
    genreWeightings: [1, 0.8, 1, 0.6, 0.6, 0.7],
    audienceWeightings: [0.7, 0.9, 1]
}, {
    id: "Aliens",
    name: "Aliens",
    genreWeightings: [1, 0.8, 1, 0.6, 0.9, 0.7],
    audienceWeightings: [0.9, 1, 1]
}, {
    id: "Wild West",
    name: "Wild West",
    genreWeightings: [0.9, 0.7, 1, 0.6, 0.6, 0.7],
    audienceWeightings: [1, 0.9, 1]
}, {
    id: "Dance",
    name: "Dance",
    genreWeightings: [0.7, 0.6, 0.6, 1, 0.6, 1],
    audienceWeightings: [1, 0.9, 0.8]
}, {
    id: "Cooking",
    name: "Cooking",
    genreWeightings: [0.9, 0.7, 0.8, 1, 0.7, 1],
    audienceWeightings: [0.8, 1, 0.6]
}, {
    id: "Farming",
    name: "Farming",
    genreWeightings: [0.6, 0.7, 0.6, 1, 0.6, 1],
    audienceWeightings: [0.9, 1, 0.8]
}, {
    id: "Crime",
    name: "Crime",
    genreWeightings: [1, 0.7, 0.8, 0.9, 0.7, 0.6],
    audienceWeightings: [0.6, 0.8, 1]
}, {
    id: "Disasters",
    name: "Disasters",
    genreWeightings: [0.9, 0.8, 0.7, 1, 1, 0.7],
    audienceWeightings: [0.7, 0.9, 1]
}, {
    id: "Assassin",
    name: "Assassin",
    genreWeightings: [1, 0.7, 1, 0.8, 0.6, 0.6],
    audienceWeightings: [0.6, 0.8, 1]
}, {
    id: "Thief",
    name: "Thief",
    genreWeightings: [0.9, 0.8, 1, 0.9, 0.6, 0.9],
    audienceWeightings: [0.7, 1, 1]
}, {
    id: "Colonization",
    name: "Colonization",
    genreWeightings: [0.7, 0.6, 0.6, 1, 1, 0.7],
    audienceWeightings: [0.7, 1, 0.8]
}, {
    id: "Construction",
    name: "Construction",
    genreWeightings: [0.7, 0.6, 0.6, 1, 0.9, 0.8],
    audienceWeightings: [0.8, 1, 0.9]
}, {
    id: "Mythology",
    name: "Mythology",
    genreWeightings: [1, 0.8, 0.9, 0.9, 0.8, 0.7],
    audienceWeightings: [0.7, 1, 1]
}, {
    id: "Abstract",
    name: "Abstract",
    genreWeightings: [0.9, 1, 0.6, 0.6, 0.8, 0.6],
    audienceWeightings: [0.8, 0.9, 1]
}, {
    id: "Mad Science",
    name: "Mad Science",
    genreWeightings: [0.9, 1, 0.7, 0.9, 0.6, 0.6],
    audienceWeightings: [0.8, 0.9, 1]
}, {
    id: "Extreme Sports",
    name: "Extreme Sports",
    genreWeightings: [1, 0.6, 0.6, 1, 0.7, 0.9],
    audienceWeightings: [1, 0.7, 1]
}, {
    id: "Dystopian",
    name: "Dystopian",
    genreWeightings: [0.8, 0.9, 0.8, 1, 0.9, 0.6],
    audienceWeightings: [0.6, 0.8, 1]
}, {
    id: "Expedition",
    name: "Expedition",
    genreWeightings: [0.7, 0.9, 0.6, 0.9, 1, 0.6],
    audienceWeightings: [0.8, 1, 0.9]
}, {
    id: "Technology",
    name: "Technology",
    genreWeightings: [0.6, 0.7, 0.6, 1, 0.9, 0.6],
    audienceWeightings: [0.8, 1, 0.9]
}];

// Genres
data.genres = {
    Action: {
        id: "Action",
        name: "Action".localize("genre")
    },
    Adventure: {
        id: "Adventure",
        name: "Adventure".localize("genre")
    },
    RPG: {
        id: "RPG",
        name: "RPG".localize("genre")
    },
    Simulation: {
        id: "Simulation",
        name: "Simulation".localize("genre")
    },
    Strategy: {
        id: "Strategy",
        name: "Strategy".localize("genre")
    },
    Casual: {
        id: "Casual",
        name: "Casual".localize("genre")
    }
}

// Consoles
data.consoles = [{
        id: "PC",
        name: "PC",
        licencePrize: 0,
        published: "1/1/1",
        platformRetireDate: "260/12/4",
        developmentCosts: 5E3,
        genreWeightings: [0.9, 1, 0.9, 1, 1, 0.6],
        audienceWeightings: [0.8, 0.9, 1]
    }, {
        id: "G64",
        name: "G64",
        company: "Govodore",
        startAmount: 0.28,
        marketKeyPoints: [{
            date: "2/5/1",
            amount: 0.36
        }, {
            date: "3/1/1",
            amount: 0.38
        }, {
            date: "4/1/1",
            amount: 0.386
        }],
        unitsSold: 0.388,
        licencePrize: 0,
        published: "1/1/1",
        platformRetireDate: "4/6/2",
        developmentCosts: 2E4,
        genreWeightings: [0.9, 1, 0.9, 0.9, 1, 0.7],
        audienceWeightings: [0.8, 0.9, 1],
        techLevel: 1
    }, {
        id: "TES",
        name: "TES",
        company: "Ninvento",
        startAmount: 0.356,
        marketKeyPoints: [{
            date: "2/5/1",
            amount: 0.41
        }, {
            date: "3/1/1",
            amount: 0.444
        }, {
            date: "4/1/1",
            amount: 0.46
        }],
        unitsSold: 0.42,
        licencePrize: 8E4,
        published: "2/1/2",
        platformRetireDate: "6/6/2",
        developmentCosts: 3E4,
        genreWeightings: [0.8, 0.7, 0.8, 0.8, 0.7, 1],
        audienceWeightings: [1, 0.9, 0.6],
        techLevel: 2
    },
    {
        id: "Master V",
        name: "Master V",
        company: "Vena",
        startAmount: 0.43,
        marketKeyPoints: [{
            date: "4/1/1",
            amount: 0.456
        }, {
            date: "6/6/2",
            amount: 0.466
        }],
        unitsSold: 0.7,
        licencePrize: 8E4,
        published: "3/2/3",
        platformRetireDate: "11/3/4",
        developmentCosts: 3E4,
        genreWeightings: [0.9, 0.7, 0.8, 0.8, 0.7, 1],
        audienceWeightings: [0.9, 1, 0.7],
        techLevel: 2
    }, {
        id: "Gameling",
        name: "Gameling",
        company: "Ninvento",
        startAmount: 0.8,
        unitsSold: 1,
        licencePrize: 5E4,
        published: "3/9/2",
        platformRetireDate: "14/4/2",
        developmentCosts: 3E4,
        genreWeightings: [0.8,
            0.7, 0.9, 0.9, 0.6, 1
        ],
        audienceWeightings: [1, 0.9, 0.6],
        techLevel: 2
    },
    {
        id: "Vena Gear",
        name: "Vena Gear",
        company: "Vena",
        startAmount: 0.6,
        unitsSold: 0.84,
        licencePrize: 5E4,
        published: "4/2/4",
        platformRetireDate: "8/4/1",
        developmentCosts: 3E4,
        genreWeightings: [0.9, 0.8, 0.8, 0.9, 0.6, 1],
        audienceWeightings: [0.9, 1, 0.8],
        techLevel: 3
    }, {
        id: "Vena Oasis",
        name: "Vena Oasis",
        company: "Vena",
        startAmount: 0.62,
        unitsSold: 0.65,
        licencePrize: 1E5,
        published: "5/2/4",
        platformRetireDate: "10/11/1",
        developmentCosts: 5E4,
        genreWeightings: [1, 0.8, 0.8, 0.9, 0.6, 0.7],
        audienceWeightings: [0.8, 1, 0.9],
        techLevel: 3
    }, {
        id: "Super TES",
        name: "Super TES",
        company: "Ninvento",
        startAmount: 0.65,
        marketKeyPoints: [{
            date: "6/6/1",
            amount: 0.7
        }, {
            date: "8/10/1",
            amount: 0.73
        }],
        unitsSold: 0.8,
        licencePrize: 5E4,
        published: "5/12/4",
        platformRetireDate: "9/8/1",
        developmentCosts: 6E4,
        genreWeightings: [0.9, 0.9, 0.9, 1, 0.7, 0.9],
        audienceWeightings: [1, 0.9, 0.7],
        techLevel: 3
    }, {
        id: "Playsystem",
        name: "Playsystem",
        company: "Vonny",
        startAmount: 0.85,
        unitsSold: 1.22,
        licencePrize: 2E5,
        published: "7/7/1",
        platformRetireDate: "12/11/3",
        developmentCosts: 6E4,
        genreWeightings: [1, 0.8, 1, 0.9, 0.7, 0.6],
        audienceWeightings: [0.8, 1, 0.9],
        techLevel: 3
    }, {
        id: "TES 64",
        name: "TES 64",
        company: "Ninvento",
        startAmount: 0.7,
        marketKeyPoints: [{
            date: "9/7/1",
            amount: 0.85
        }],
        unitsSold: 1.25,
        licencePrize: 2E5,
        published: "9/2/1",
        platformRetireDate: "13/5/4",
        developmentCosts: 6E4,
        genreWeightings: [0.9, 0.8, 0.7, 0.8, 0.7, 0.9],
        audienceWeightings: [1, 0.9, 0.9],
        techLevel: 3
    },
    {
        id: "DreamVast",
        name: "DreamVast",
        company: "Vena",
        startAmount: 1.1,
        marketKeyPoints: [{
            date: "11/4/2",
            amount: 1.2
        }],
        unitsSold: 0.9,
        licencePrize: 25E4,
        published: "10/8/3",
        platformRetireDate: "14/1/4",
        developmentCosts: 6E4,
        genreWeightings: [1, 0.7, 0.8, 1, 0.7, 0.7],
        audienceWeightings: [0.7, 1, 1],
        techLevel: 4
    }, {
        id: "Playsystem 2",
        name: "Playsystem 2",
        company: "Vonny",
        startAmount: 1.3,
        unitsSold: 2.4,
        licencePrize: 35E4,
        published: "11/5/2",
        platformRetireDate: "18/6/3",
        developmentCosts: 7E4,
        genreWeightings: [1, 0.8, 1, 0.9, 0.7, 0.9],
        audienceWeightings: [0.9,
            1, 0.8
        ],
        techLevel: 4
    }, {
        id: "mBox",
        name: "mBox",
        company: "Mirconoft",
        startAmount: 1.35,
        marketKeyPoints: [{
            date: "12/10/1",
            amount: 1.6
        }, {
            date: "14/4/1",
            amount: 1.7
        }],
        unitsSold: 2.1,
        licencePrize: 35E4,
        published: "11/12/4",
        platformRetireDate: "17/2/3",
        developmentCosts: 7E4,
        genreWeightings: [1, 0.8, 0.9, 0.9, 0.7, 0.7],
        audienceWeightings: [0.8, 1, 0.9],
        techLevel: 4
    }, {
        id: "gameSphere",
        name: "Game Sphere",
        iconUri: "./images/platforms/superb/GameSphere.png",
        company: "Ninvento",
        startAmount: 1,
        unitsSold: 1.7,
        licencePrize: 45E4,
        published: "12/12/1",
        platformRetireDate: "17/2/3",
        developmentCosts: 9E4,
        genreWeightings: [0.8, 0.8, 0.7, 0.8, 0.7, 1],
        audienceWeightings: [0.9, 0.9, 0.8],
        techLevel: 3
    }, {
        id: "GS",
        name: "GS",
        company: "Ninvento",
        startAmount: 1.5,
        unitsSold: 3.8,
        licencePrize: 35E4,
        published: "13/8/4",
        marketKeyPoints: [{
            date: "26/12/4",
            amount: 3.8
        }],
        platformRetireDate: "260/12/4",
        developmentCosts: 5E4,
        genreWeightings: [0.9, 0.9, 1, 0.9, 0.9, 1],
        audienceWeightings: [1, 0.9, 0.8],
        techLevel: 3
    }, {
        id: "PPS",
        name: "PPS",
        company: "Vonny",
        startAmount: 1.44,
        unitsSold: 3.1,
        licencePrize: 35E4,
        published: "14/3/4",
        marketKeyPoints: [{
            date: "26/12/4",
            amount: 3.1
        }],
        platformRetireDate: "260/12/4",
        developmentCosts: 5E4,
        genreWeightings: [1, 0.7, 1, 0.8, 0.8, 0.8],
        audienceWeightings: [0.8, 0.9, 1],
        techLevel: 4
    }, {
        id: "mBox 360",
        name: "mBox 360",
        company: "Mirconoft",
        startAmount: 2.4,
        unitsSold: 3.7,
        licencePrize: 5E5,
        published: "16/8/4",
        platformRetireDate: "24/2/3",
        developmentCosts: 8E4,
        genreWeightings: [1, 0.9, 1, 0.9, 0.7, 0.9],
        audienceWeightings: [0.8, 0.9, 1],
        techLevel: 5
    }, {
        id: "Nuu",
        name: "Nuu",
        company: "Ninvento",
        startAmount: 2,
        unitsSold: 2.8,
        licencePrize: 5E5,
        published: "17/4/4",
        platformRetireDate: "21/6/3",
        developmentCosts: 8E4,
        genreWeightings: [0.8, 0.6, 0.7, 1, 0.7, 1],
        audienceWeightings: [1, 1, 0.7],
        techLevel: 4
    }, {
        id: "Playsystem 3",
        name: "Playsystem 3",
        company: "Vonny",
        startAmount: 2.5,
        unitsSold: 3.7,
        licencePrize: 5E5,
        published: "17/12/4",
        platformRetireDate: "24/9/3",
        developmentCosts: 8E4,
        genreWeightings: [1, 0.9, 0.9, 1, 0.7, 0.8],
        audienceWeightings: [0.8, 1, 0.9],
        techLevel: 5
    }, {
        id: "grPhone",
        name: "grPhone",
        company: "Grapple",
        startAmount: 2.3,
        unitsSold: 3.7,
        licencePrize: 5E5,
        published: "18/9/1",
        marketKeyPoints: [{
            date: "26/12/4",
            amount: 3.7
        }],
        platformRetireDate: "260/12/4",
        developmentCosts: 8E4,
        genreWeightings: [0.8, 0.8, 0.7, 0.9, 0.7, 1],
        audienceWeightings: [0.9, 1, 0.6],
        techLevel: 4
    }, {
        id: "grPad",
        name: "grPad",
        company: "Grapple",
        startAmount: 2.3,
        unitsSold: 3.8,
        licencePrize: 5E5,
        published: "19/7/4",
        marketKeyPoints: [{
            date: "26/12/4",
            amount: 3.8
        }],
        platformRetireDate: "260/12/4",
        developmentCosts: 8E4,
        genreWeightings: [0.8, 0.9, 0.7, 0.9, 0.9, 1],
        audienceWeightings: [0.9, 1, 0.6],
        techLevel: 4
    }, {
        id: "mPad",
        name: "mPad",
        company: "Mirconoft",
        startAmount: 2.2,
        unitsSold: 3.4,
        licencePrize: 5E5,
        published: "20/10/4",
        marketKeyPoints: [{
            date: "26/12/4",
            amount: 3.4
        }],
        platformRetireDate: "260/12/4",
        developmentCosts: 8E4,
        genreWeightings: [0.7, 0.9, 0.8, 0.9, 0.7, 0.9],
        audienceWeightings: [0.7, 0.9, 0.8],
        techLevel: 4
    }, {
        id: "Wuu",
        name: "Wuu",
        company: "Ninvento",
        startAmount: 3,
        unitsSold: 5,
        licencePrize: 1E6,
        published: "20/12/4",
        marketKeyPoints: [{
            date: "29/12/4",
            amount: 5
        }],
        platformRetireDate: "26/5/2",
        developmentCosts: 8E4,
        genreWeightings: [0.9,
            0.7, 0.8, 1, 0.7, 1
        ],
        audienceWeightings: [0.9, 1, 0.7],
        techLevel: 5
    }, {
        id: "OYA",
        name: "OYA",
        company: "KickIT",
        startAmount: 2.5,
        unitsSold: 4,
        licencePrize: 1E4,
        published: "22/10/4",
        marketKeyPoints: [{
            date: "29/12/4",
            amount: 4
        }],
        platformRetireDate: "260/12/4",
        developmentCosts: 4E4,
        genreWeightings: [0.9, 0.7, 0.8, 0.9, 0.8, 1],
        audienceWeightings: [0.8, 1, 0.9],
        techLevel: 4
    }, {
        id: "mBox One",
        name: "mBox One",
        company: "Mirconoft",
        startAmount: 3.6,
        marketKeyPoints: [{
            date: "23/9/1",
            amount: 4.1
        }, {
            date: "28/12/4",
            amount: 5.5
        }],
        unitsSold: 5.5,
        licencePrize: 1E6,
        published: "23/8/4",
        platformRetireDate: "29/12/4",
        developmentCosts: 1E5,
        genreWeightings: [1, 0.8, 0.9, 0.9, 0.7, 0.9],
        audienceWeightings: [0.7, 1, 0.8],
        techLevel: 6
    }, {
        id: "Playsystem 4",
        name: "Playsystem 4",
        company: "Vonny",
        startAmount: 3.7,
        unitsSold: 6,
        licencePrize: 1E6,
        published: "23/10/4",
        marketKeyPoints: [{
            date: "28/4/4",
            amount: 6
        }],
        platformRetireDate: "29/4/4",
        developmentCosts: 1E5,
        genreWeightings: [1, 0.8, 1, 0.9, 0.7, 0.9],
        audienceWeightings: [0.8, 1, 0.9],
        techLevel: 6
    }, {
        id: "Swap",
        name: "Swap",
        company: "Ninvento",
        startAmount: 4.5,
        unitsSold: 6,
        licencePrize: 125E4,
        published: "25/3/1",
        marketKeyPoints: [{
            date: "29/12/4",
            amount: 6
        }],
        platformRetireDate: "260/12/4",
        developmentCosts: 8E4,
        genreWeightings: [0.9, 0.8, 1, 0.8, 0.7, 1],
        audienceWeightings: [0.9, 1, 0.8],
        techLevel: 6
    }, {
        id: "mBox Next",
        name: "mBox Next",
        company: "Mirconoft",
        startAmount: 5.6,
        marketKeyPoints: [{
            date: "28/9/1",
            amount: 5.8
        }, {
            date: "29/12/4",
            amount: 6.6
        }],
        unitsSold: 6.6,
        licencePrize: 15E5,
        published: "27/8/4",
        platformRetireDate: "260/12/4",
        developmentCosts: 2E5,
        genreWeightings: [0.9, 0.9, 0.9, 0.8,
            0.7, 1
        ],
        audienceWeightings: [0.9, 1, 0.8],
        techLevel: 7
    }, {
        id: "Playsystem 5",
        name: "Playsystem 5",
        company: "Vonny",
        startAmount: 5.2,
        unitsSold: 6.4,
        licencePrize: 15E5,
        published: "27/10/4",
        marketKeyPoints: [{
            date: "29/12/4",
            amount: 6.4
        }],
        platformRetireDate: "260/12/4",
        developmentCosts: 2E5,
        genreWeightings: [1, 0.7, 0.9, 1, 0.7, 0.9],
        audienceWeightings: [0.8, 1, 0.9],
        techLevel: 7
    }
]