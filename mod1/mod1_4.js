
const name = prompt("enter your name:");


const randomNumber = Math.floor(Math.random() * 4) + 1;


let house;

if (randomNumber === 1) { house = "Gryffindor";
} else if (randomNumber === 2) { house = "Slytherin";
} else if (randomNumber === 3) {house = "Hufflepuff";
} else { house = "Ravenclaw";
}


document.write(`${name}, you are ${house}.`);