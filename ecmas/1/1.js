/*1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
найти минимальное число в массиве, решение задание должно состоять из одной строки*/

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

/*2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: 
increment и decrement. Метод increment должен увеличивать значение счетчика на 1, 
а метод decrement должен уменьшать значение счетчика на 1. 
Значение счетчика должно быть доступно только через методы объекта, а не напрямую.*/

const createCounter = (value) => {
    const obj = {
        increment() {
            value++;
            return obj;
        },
        decrement() {
            value--;
            return obj;
        },
        valueOf() {
            return value;
        }
    };
    return obj;
};

const counter = createCounter(1);
console.log(Number(counter.increment()));
console.log(Number(counter.decrement()));


/*
3) Напишем функцию, которая будет находить факториал числа с использованием рекурсии:
// примеры вызова функции
console.log(factorial(5)); // выводит 120 (5 * 4 * 3 * 2 * 1)
console.log(factorial(0)); // выводит 1 (по определению факториала)*/

function factorial(value) {
    if (value === 0 || value === 1) {
        return 1;
    } return factorial(value - 1) * value;
}

console.log(factorial(5));