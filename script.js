// function checkUrl(url) {
//     if (url.length && url.includes('.') || url.includes('com') || url.includes('ru')) {
//         return 'Correct url'
//     } else {
//         return 'Error'
//     }
// }
// console.log(checkUrl("545324.com"))

// function checkWord(word) {
//     if (word.length >= 4 && word.length <= 8 && (word.length % 2 == 0)) {
//         return 'Correct'
//     } else {
//         return 'In correct'
//     }
// }
// console.log(checkWord ('gfggg3'))


// function checkWord(word) {
//     return [...word].map((letter, index) => {
//         if (index % 2 == 0) {
//             return letter
//         } else {
//             return 'E'
//         }
//     })
// }
//
// console.log(checkWord('bekzat'))


// function checkWord(word1, word2) {
//     if(word1[0] === " " || word2[0] === " " || word1 !== word2) {
//         return 'In Correct'
//     } else {
//         return 'Correct'
//     }
// }
// // console.log(checkWord("medet", "medet"))


// let Num = 1;
// function haha() {
//
//     if (Num % 3 == 0 && Num % 5 == 0) {
//         console.log('FizzBuzz')
//     }
//
//     if (Num % 3 == 0 &&Num % 5 != 0) {
//         console.log('Fizz')
//     }
//
//     if (Num % 5 == 0 && Num % 3 != 0) {
//         console.log('Buzz')
//     }
//
//     if (Num % 3 != 0 && Num % 5 != 0) {
//         console.log(Num)
//     }
//     Num += 1;
//     if (Num <= 100) {
//         haha();
//     }
// }
// haha()                                                                fizz buzz



