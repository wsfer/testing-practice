// Takes a string and returns it reversed

const reverseString = (str) => {
    if (str.length < 2) return str;
    const mid = Math.floor(str.length / 2);
    return ''.concat(
        reverseString(str.slice(mid + 1)),
        str.charAt(mid),
        reverseString(str.slice(0, mid))
    );
};

export default reverseString;
