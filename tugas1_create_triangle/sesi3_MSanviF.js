// Define the number of rows for the pattern
let numberOfRows = 4

// Outer loop: Controls the number of rows
for (let i = 1; i <= numberOfRows; i++) {
    // Create an empty string to store stars
    let triangle = '';

    // Inner loop: Adds stars based on the row number
    for (let j = 1; j <= i; j++) {
        triangle += '*'; // Add one star at a time
    }

    // Print the stars for the current row
    console.log(triangle);
}
