// Randomizer function declaration
const logPhrases = arr => {
    let random = Math.floor(Math.random() * arr.length);
    
    return arr[random];
};

// Arrays containing messages to be randomised later:

// Used for the "Your sign is X." template
const signs = [
    'aries',
    'taurus',
    'gemini',
    'cancer',
    'leo',
    'virgo',
    'libra',
    'scorpio',
    'sagittarius',
    'capricornus',
    'aquarius',
    'pisces'
];

// Used for the "You're having X luck today." template
const adjectives = [
    'good',
    'mediocre',
    'bad',
    'questionable',
    'worrying',
    'dodgy',
    'awesome',
    'extra',
    'crazy'
];

// Used for the "You should: X." template
const doableStuff = [
    'hug someone',
    'kiss someone',
    'drink some redbull',
    'take a nap',
    'eat something',
    'change your legal name to Geralt of Rivia',
    'tidy up your room',
    'wash the dishes',
    'load the dishwasher',
    'get drunk',
    'move to Hawaii'
];

// Phrases to be printed later
const phrases = [
    `Your sign is ${logPhrases(signs)}.`,
    `You're having ${logPhrases(adjectives)} luck today.`,
    `You should: ${logPhrases(doableStuff)}.`
];

for (let i = 0; i < phrases.length; i++) {
    console.log(phrases[i]);
};