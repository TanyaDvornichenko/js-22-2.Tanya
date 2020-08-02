// split
const message = 'Welcome to Bahamas!';

// Разбивает строку по разделителю, в данном случае это пробел
console.log(message.split(' ')); // ["Welcome", "to", "Bahamas!"]

// Вызов split с пустой строкой разобьёт по буквам
console.log(message.split('')); // [много букв :)]

// join
const clients = ['Mango', 'Poly', 'Ajax'];


// Сошьет все элементы массива в строку,
// между каждой парой элементов будет указанный разделитель
console.log(clients.join(' ')); // "Mango Poly Ajax"
console.log(clients.join(',')); // "Mango,Poly,Ajax"
console.log(clients.join('-')); // "Mango-Poly-Ajax"