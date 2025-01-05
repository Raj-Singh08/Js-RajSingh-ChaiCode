// Immediately Invoked Function Expressions (IIFE)

// function namaste() {
//     console.log(`Namaste User`);
// }
// namaste();

// named IIFE  (write funtion)(pass argumnet if any);
// (function namaste() {
//     console.log(`Namaste User`);
// })();

// unnamed IIFE
((name) => {
    console.log(`Namaste ${name}`);
})('Chiranjeev');