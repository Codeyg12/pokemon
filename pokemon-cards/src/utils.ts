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
// TODO: Proper return type

const generateRandomGradients = (bgColor: string): string => {

    const gradients = [];
    for (let i = 0; i < 100; i++) {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const color = i % 2 === 0 ? 'rgba(211,211,211,1)' : bgColor;
        gradients.push(`radial-gradient(circle at ${x}% ${y}%, ${color} 0%, ${color.replace('1)', '0)') } 20%)`);
    }
    return gradients.join(', ');
}
const getTypeAndBackground = (type: string): { emblem: string; background: string; color: string } => {
    switch (type) {
        case "fire":
            return { emblem: fire, background: 'bg-red-500', color: 'rgba(255, 69, 0, 1)' };
        case "water":
            return { emblem: water, background: 'bg-blue-500', color: 'rgba(30, 144, 255, 1)' };
        case "grass":
            return { emblem: grass, background: 'bg-green-500', color: 'rgba(34, 139, 34, 1)' };
        case "electric":
            return { emblem: electric, background: 'bg-yellow-500', color: 'rgba(255, 215, 0, 1)' };
        case "ice":
            return { emblem: ice, background: 'bg-blue-200', color: 'rgba(173, 216, 230, 1)' };
        case "fighting":
            return { emblem: fighting, background: 'bg-red-700', color: 'rgba(173, 34, 34, 1)' };
        case "poison":
            return { emblem: poison, background: 'bg-purple-500', color: 'rgba(148, 0, 211, 1)' };
        case "ground":
            return { emblem: ground, background: 'bg-yellow-700', color: 'rgba(210, 180, 140, 1)' };
        case "flying":
            return { emblem: flying, background: 'bg-blue-300', color: 'rgba(135, 206, 235, 1)' };
        case "psychic":
            return { emblem: psychic, background: 'bg-pink-500', color: 'rgba(255, 105, 180, 1)' };
        case "bug":
            return { emblem: bug, background: 'bg-green-700', color: 'rgba(154, 205, 50, 1)' };
        case "rock":
            return { emblem: rock, background: 'bg-gray-700', color: 'rgba(139, 69, 19, 1)' };
        case "ghost":
            return { emblem: ghost, background: 'bg-purple-700', color: 'rgba(72, 61, 139, 1)' };
        case "dragon":
            return { emblem: dragon, background: 'bg-indigo-500', color: 'rgba(106, 90, 205, 1)' };
        case "dark":
            return { emblem: dark, background: 'bg-gray-900', color: 'rgba(0, 0, 0, 1)' };
        case "steel":
            return { emblem: steel, background: 'bg-gray-500', color: 'rgba(192, 192, 192, 1)' };
        case "fairy":
            return { emblem: fairy, background: 'bg-pink-300', color: 'rgba(255, 192, 203, 1)' };
        default:
            return { emblem: normal, background: 'bg-gray-300', color: 'rgba(169, 169, 169, 1)' };
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

  const multipleOfFive = (): number => {
    const randomNum = Math.floor(Math.random() * 20);
    return randomNum * 5;
  }

export { generateRandomGradients, getTypeAndBackground, padWithZeroes, heightConversion, multipleOfFive };

