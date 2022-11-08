const generatePassword = (countChars = 10, countSymbols = 3, countNumbers = 3) => {
    const shuffle = (array) => {
        let currentIndex = array.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
    
        return array;
    }

    if (countChars < 1 || countSymbols < 1 || countNumbers < 1) return '';
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const symbols = ['!', '$', '%', '&', '/', '(', ')', '=', '#', '+', '*', '@', ',', ';', '<', '>'];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    const passwordArr = [];

    for (let i = 0; i < countChars; i++) {
        const index = parseInt(Math.random() * alphabet.length);
        const letter = ((Math.random() * 10) < 5.0) ? alphabet[index].toUpperCase() : alphabet[index];
        passwordArr.push(letter);
    }

    for (let i = 0; i < countSymbols; i++) {
        const index = parseInt(Math.random() * symbols.length);
        passwordArr.push(symbols[index]);
    }

    for (let i = 0; i < countNumbers; i++) {
        const index = parseInt(Math.random() * numbers.length);
        passwordArr.push(numbers[index]);
    }

    return shuffle(passwordArr).join('');
}