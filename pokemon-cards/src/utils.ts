const fire = "/assets/Fire.png";
const water = "/assets/Water.png";
const grass = "/assets/Grass.png";
const electric = "/assets/Electric.png";
const ice = "/assets/Ice.png";
const fighting = "/assets/Fighting.png";
const poison = "/assets/Poison.png";
const ground = "/assets/Ground.png";
const flying = "/assets/Flying.png";
const psychic = "/assets/Psychic.png";
const bug = "/assets/Bug.png";
const rock = "/assets/Rock.png";
const ghost = "/assets/Ghost.png";
const dragon = "/assets/Dragon.png";
const dark = "/assets/Dark.png";
const steel = "/assets/Steel.png";
const fairy = "/assets/Fairy.png";
const normal = "/assets/Normal.png";
// TODO: Import the types better?

const generateRandomGradients = (): string => {
    const gradients = [];
    for (let i = 0; i < 100; i++) {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const color = i % 2 === 0 ? 'rgba(211,211,211,1)' : 'rgba(50,205,50,1)';
        gradients.push(`radial-gradient(circle at ${x}% ${y}%, ${color} 0%, ${color.replace('1)', '0)')} 20%)`);
    }
    return gradients.join(', ');
}

const getTypeAndBackground = (type: string): { emblem: string; background: string; } => {
    switch (type) {
        case "fire":
            return { emblem: fire, background: 'bg-red-500' };
        case "water":
            return { emblem: water, background: 'bg-blue-500' };
        case "grass":
            return { emblem: grass, background: 'bg-green-500' };
        case "electric":
            return { emblem: electric, background: 'bg-yellow-500' };
        case "ice":
            return { emblem: ice, background: 'bg-blue-200' };
        case "fighting":
            return { emblem: fighting, background: 'bg-red-700' };
        case "poison":
            return { emblem: poison, background: 'bg-purple-500' };
        case "ground":
            return { emblem: ground, background: 'bg-yellow-700' };
        case "flying":
            return { emblem: flying, background: 'bg-blue-300' };
        case "psychic":
            return { emblem: psychic, background: 'bg-pink-500' };
        case "bug":
            return { emblem: bug, background: 'bg-green-700' };
        case "rock":
            return { emblem: rock, background: 'bg-gray-700' };
        case "ghost":
            return { emblem: ghost, background: 'bg-purple-700' };
        case "dragon":
            return { emblem: dragon, background: 'bg-indigo-500' };
        case "dark":
            return { emblem: dark, background: 'bg-gray-900' };
        case "steel":
            return { emblem: steel, background: 'bg-gray-500' };
        case "fairy":
            return { emblem: fairy, background: 'bg-pink-300' };
        default:
            return { emblem: normal, background: 'bg-gray-300' };
    }
};

const padWithZeroes = (num: number) => {
    return num.toString().padStart(3, "0");
}

const heightConversion = (height: number) => {
    const heightInFeet = height * 0.328084;
    const feet = Math.floor(heightInFeet);
    const inches = Math.round((heightInFeet - feet) * 12);
    return `${feet}' ${inches}"`;
};

export { generateRandomGradients, getTypeAndBackground, padWithZeroes, heightConversion };

