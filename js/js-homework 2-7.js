/*Задача 2-7
Создание нового массива на основе отбора из исходного массива
Напиши функцию filterArray(array), принимающую 1 параметр array - массив.
Функция проверяет каждое значение массива - является ли значение конечным числом (Number.isFinite).
Для проверки используй цикл for. 
Числа добавляются в новый массив numbers с помощью метода push, а не числа - игнорируются. 
По завершению проверки массива array возвращается массив numbers.

Результаты : 
Для аргумента - массива [-2, 0, 2] результатом будет массив [-2, 0, 2]
Для аргумента - массива [1, NaN, Infinity] результатом будет массив [1]
Для аргумента - массива [ 0, -0, 100, '100'] результатом будет массив [0, 0, 100]
Для аргумента - массива [undefined, false, null, [], 1] результатом будет массив [1]
Для аргумента - массива [{}, () => {}, 2] результатом будет массив [2]
Ожидается использование 'push'
Ожидается использование 'Number.isFinite'
Код должен содержать функцию filterArray
Результатом вызова функции filterArray должен быть массив
Результатом вызова функции filterArray должен быть пустой массив, если аргумент - пустой массив
Ожидается использование 'array.length'
 */


const testArray = [1, 2, 3];
testArray.push (10, false);

// if (Number.isFinite[i]) 

function filterArray(array) {
    'use strict';
    const numbers = [];
    for(let i = 0; i < array.length; i += 1) {
      // Write code under this line

      if (Number.isFinite(array[i])    ) {
        numbers.push(array[i]); 
      }

    }
    return numbers;
  }

  

  console.log(filterArray([-2, 0, 2]));
  // [-2, 0, 2]
  
  console.log(filterArray([1, NaN, Infinity]));
  // [1]
  
  console.log(filterArray([0, -0, 100, '100']));
  // [0, 0, 100]
  
  console.log(filterArray([undefined, false, null, [], 1]));
  // [1]
  
  console.log(filterArray([{}, () => {}, 2]));
  // [2] 


  console.log(filterArray([{}, () => {}, 2]));
  // [2] 