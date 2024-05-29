function longestCommonPrefix(strs) {
    if (strs.length === 0)
        return "";
    var prefix = strs[0];
    for (var i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "")
                return "";
        }
    }
    return prefix;
}
// Test with user input
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter strings separated by commas: ", (input) => {
    const strs = input.split(",").map(str => str.trim());
    console.log("Input:", strs);
    console.log("Output:", longestCommonPrefix(strs));
    readline.close();
});
