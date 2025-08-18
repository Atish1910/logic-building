// Function to find the largest word in a given string
function largeWords(iStr) {
    let i = 0, iCnt = 0, iLarge = 0;
    let maxWord = "", currentWord = "";

    while (iStr[i] !== undefined) {
        // If it's not a space, build the current word
        if (iStr[i] !== " ") {
            currentWord += iStr[i];
            iCnt++;
        } else {
            // When a space is encountered, check if the current word is the largest
            if (iCnt > iLarge) {
                iLarge = iCnt;
                maxWord = currentWord;
            }
            // Reset word length counter and current word
            iCnt = 0;
            currentWord = "";
        }
        i++;
    }

    // Check for the last word (if it's the largest)
    if (iCnt > iLarge) {
        iLarge = iCnt;
        maxWord = currentWord;
    }

    console.log(iLarge + " " + maxWord);
}

// Test cases
largeWords("Ati sh Vinayak Ka mb le"); // Output: 7 Vinayak
largeWords("madhavrao Kamble");       // Output: 9 madhavrao
