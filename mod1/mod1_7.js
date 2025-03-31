const rolls = parseInt(prompt("How many dice to roll?"));


let sum = 0;
for (let i = 0; i < rolls; i++) {
    sum += Math.floor(Math.random() * 6) + 1;
}

document.write(`Sum of ${rolls} dice rolls: ${sum}`);