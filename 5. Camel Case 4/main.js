const input = `S;M;plasticCup()
C;V;mobile phone
C;C;coffee machine
S;C;LargeSoftwareBook
C;M;white sheet of paper
S;V;pictureFrame`;

const inputLines = input.split(/\r?\n/);
inputLines.forEach(line => {
  console.log(processOperation(line));
});

// Function to process each input line
function processOperation(inputLine) {
    const [operation, entityType, entity] = inputLine.split(';');
    
    if (operation === 'S') {
        return splitCamelCase(entity, entityType);
    } else if (operation === 'C') {
        return combineToCamelCase(entity, entityType);
    }
}

// Function to split a camel case string into words
function splitCamelCase(entity, entityType) {
    if (entityType === "M") {entity = entity.slice(0, -2)};
    const words = entity.replace(/([a-z])([A-Z])/g, '$1 $2').split(' ');
    return words.join(' ').toLowerCase();

}
// Function to combine space-separated words into camel case
function combineToCamelCase(words, entityType) {
    const wordArray = words.split(' ');

    if (entityType === 'V') {
        const vEntity = wordArray[0].toLowerCase() + wordArray.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
        return vEntity;
    } else if (entityType === 'M') {
        const mEntity = wordArray[0].toLowerCase() + wordArray.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('') + '()';
        return mEntity;
    } else if (entityType === 'C') {
        const cEntity = wordArray.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
        return cEntity;
    }
}
