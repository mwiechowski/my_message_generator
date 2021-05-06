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

// Function declarations

// Console logging the sign template
const logSigns = arr => {
    let random = Math.floor(Math.random() * arr.length);

    console.log(`Your sign is ${arr[random]}.`);
};

// Console logging the luck template
const logLuck = arr => {
    let random = Math.floor(Math.random() * arr.length);

    console.log(`You're having ${arr[random]} luck today.`);
};

// Console logging the doable stuff
const logStuff = arr => {
    let random = Math.floor(Math.random() * arr.length);

    console.log(`You should: ${arr[random]}.`)
};

logSigns(signs);
logLuck(adjectives);
logStuff(doableStuff);
