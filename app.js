//let two = 2;
// let three = 3;
// function points(valtwo, valthree) {
//     let two = valtwo * 2;
//     let three = valthree * 3
//     console.log(two + three);
// }
// points(1, 1);
// points(7, 5);
// points(38, 8);
// points(0, 1);
// points(0, 0);

// function splitOnDoubleLetter(word) {
//     prevChar = null;
//     prevSliceIndex = 0;
//     let array = [];
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === prevChar) {
//             array.push(word.slice(prevSliceIndex, i));
//             prevSliceIndex = i;
//         }
//         prevChar = word[i];
//     }
//     // if (prevSliceIndex != 0) {
//     //     array.push(word.slice(prevSliceIndex, word.length));
//     // }
//     console.log(array);
// }
// splitOnDoubleLetter("letter");
// splitOnDoubleLetter("really");
// splitOnDoubleLetter("happy");
// splitOnDoubleLetter("shall");
// splitOnDoubleLetter("tool");
// splitOnDoubleLetter("mississippi");
// splitOnDoubleLetter("Omar");

const number = 101;
function fizzbuzz(number) {
    for (let i = 0; i < number; i++) {
        if (i % 15 === 0) {
            console.log("fizzbuzz");
        }else if (i % 3 === 0) {
            console.log("fizz");
        }else if (i % 5 === 0) {
            console.log("buzz");
        }
        console.log(i);
    }

}
fizzbuzz(number);