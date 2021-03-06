/*
Задача 2-9
Есть массив logins с логинами пользователей. Напиши скрипт добавления логина в массив logins. Добавляемый логин должен:

проходить проверку на длину от 4 до 16-ти символов включительно
быть уникален, то есть отсутствовать в массиве logins
Разбей задачу на подзадачи с помощью функций.
Проверку на отсутствие аргументов или на правильный тип аргументов делать не нужно.

Напиши функцию isLoginValid(login), в которой проверь количество символов параметра login и верни true или false в зависимости от того, попадает ли длина параметра в заданный диапазон от 4-х до 16-ти символов включительно.

Напиши функцию isLoginUnique(allLogins, login), которая принимает список всех логинов и добавляемый логин как параметры и проверяет наличие login в массиве allLogins, возвращая true если такого логина еще нет и false если логин уже используется.

Напиши функцию addLogin(allLogins, login) которая:

Принимает новый логин и массив всех логинов как параметры
Проверяет валидность логина используя вспомогательную функцию isLoginValid
Если логин не валиден, прекратить исполнение функции addLogin и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
Если логин валиден, функция addLogin проверяет уникальность логина с помощью функции isLoginUnique
Если isLoginUnique вернет false, тогда addLogin не добавляет логин в массив и возвращает строку 'Такой логин уже используется!'
Если isLoginUnique вернет true, addLogin добавляет новый логин в logins и возвращает строку 'Логин успешно добавлен!'
🔔 Принцип единственной ответственности функции - каждая функция делает что-то одно. Это позволяет переиспользовать код и изменять логику работы функции только в одном месте, не затрагивая работу программы в целом.

Предикатные функции возвращают только true или false. 
Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.

isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false.
isLoginValid только проверяет валидный ли логин и возвращает true или false.
addLogin добавляет или не добавляет логин в массив.
 При этом для проверок условия добавления использует результаты вызовов других 
 функций - isLoginUnique и isLoginValid.

Результаты:

Результатом вызова функции isLoginValid должен быть булеан
Результатом вызова функции isLoginUnique должен быть булеан
Результатом вызова функции addLogin должна быть строка
Результатом вызова функции isLoginValid должна false, если аргумент -'123'
Результатом вызова функции isLoginValid должна true, если аргумент -'1234'
Результатом вызова функции isLoginValid должна true, если аргумент -'1234567890123456'
Результатом вызова функции isLoginValid должна false, если аргумент -'12345678901234567'
Результатом вызова функции isLoginValid должна false, если аргумент -'1234567890123456712345678901234567'
Результатом вызова функции isLoginUnique должно быть значение false, если аргумент allLogins = ['1234', '12345'] , а аргумет login = '1234'
Результатом вызова функции isLoginUnique должно быть значение true, если аргумент allLogins = ['1234', '12345'] , а аргумет login = '4444'
Результатом вызова функции addLogin должна быть строка 'Логин успешно добавлен!', если аргументы allLogins ['1234', '12345'] и '4444'
Результатом вызова функции addLogin должна быть строка 'Такой логин уже используется!', если аргументы allLogins ['1234', '12345'] и '1234'
Результатом вызова функции addLogin должна быть строка 'Ошибка! Логин должен быть размером от 4 до 16 символов', если аргументы allLogins ['1234', '12345'] и '789'
Логин 'Ajax' должен быть в массиве 'logins' после вызова addLogin(logins, 'Ajax')
Код должен содержать функцию isLoginValid
Код должен содержать функцию isLoginUnique
Код должен содержать функцию addLogin
Логин 'Zod' должен отсутствовать в массиве 'logins' после вызова addLogin(logins, 'Zod')
Логин 'jqueryisextremelyfast' должен отсутствовать в массиве 'logins' после вызова addLogin(logins, 'jqueryisextremelyfast')

*/


function isLoginValid (login, min = 4, max = 16) {

    return login.length >= min && login.length <= max;

}


function isLoginUnique  (allLogins, login) {
  'use strict';
  // Write code under this line
  
}

function addLogin (allLogins, login) {
  'use strict';
  const SUCCESS = 'Логин успешно добавлен!';
  const REFUSAL = 'Такой логин уже используется!';
  const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
  let message;
  // Write code under this line    
  if (!isLoginValid(login)) {
    message = ERROR;

    return message;
} else if (!isLoginUnique(allLogins, login)) {
    message = REFUSAL;

    return message;
} else {
    allLogins.push(login);
    message = SUCCESS;

    return message;
}
}

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];





console.log(addLogin(logins, 'Ajax')); 
// 'Логин успешно добавлен!'

console.log(addLogin(logins, 'robotGoogles')); 
// 'Такой логин уже используется!'

console.log(addLogin(logins, 'Zod'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(logins, 'jqueryisextremelyfast')); 
// 'Ошибка! Логин должен быть от 4 до 16 символов' 