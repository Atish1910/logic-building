console.log(~5); // -6
console.log(~-1); //
console.log(~0); // -1
console.log(~true); // 2
console.log(~false); // 1
console.log(~~5.7); // 5
console.log(~~-5.7); // -5

// ~5 => -(x+1) = -6

// ~x = -(x + 1)
// It inverts all bits of the number and returns the two's complement.
