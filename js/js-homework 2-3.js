  
// Задача 2-3
// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку 
// (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// function findLongestWord (string = " ") {
//     // Write code under this line
    
//     const strSplit = string.split(' ');
//     let LongestWord = '';

//     console.log(strSplit);

//     for (let i = 0; i < strSplit.length; i += 1) {

//     if (strSplit[i].length > LongestWord.length) {
//         LongestWord = strSplit[i];
//           }
//     }
//       return LongestWord;
      
//   }
  
//   console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
//   // 'jumped'
  
//   console.log(findLongestWord('Google do a roll'));
//   // 'Google'
  
//   console.log(findLongestWord('May the force be with you'));
//   // 'force'



 

function findLongestWord (string = " ") {
       // Write code under this line        
    const stringSplit = string.split(' ');
    let longestWord = "";

      for (const word of stringSplit) {
        if (word.length > longestWord.length) {
        longestWord = word;
    }
    }
      return longestWord; }
  



  console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
  // 'jumped'
  
  console.log(findLongestWord('Google do a roll'));
  // 'Google'
  
  console.log(findLongestWord('May the force be with you'));
  // 'force'
  

  
// function findLongestWord (string = "") {
//       // Write code under this line
//     const words = string.split(" ");
//     let longestWord = "";

//     for (const word of words) {
//       if (word.length > longestWord.length) {
//         longestWord = word;
//       }
//     }
//     return longestWord;  }