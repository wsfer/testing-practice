// Convert a character to a number or a number to a character
const converter = {
    letters: 'abcdefghijklmnopqrstuvwxyz'.split(''),
    numbers: new Map(
        (() => {
            let count = 0;
            return 'abcdefghijklmnopqrstuvwxyz'
                .split('')
                .map((letter) => [letter, count++]);
        })()
    ),

    getNumber(letter) {
        return this.numbers.get(letter);
    },

    getLetter(number) {
        return this.letters[number % 26];
    },
};

// Takes a string and a shift factor and returns it with each character “shifted”
const caesarCipher = (str, sh) => {
    const letters = str.split('').map((letter) => {
        if (/[a-zA-Z]/.test(letter)) {
            const number = converter.getNumber(letter.toLowerCase());
            const newLetter = converter.getLetter(number + sh);
            if (/[A-Z]/.test(letter)) return newLetter.toUpperCase();
            return newLetter;
        }
        return letter;
    });
    return letters.join('');
};

export default caesarCipher;
