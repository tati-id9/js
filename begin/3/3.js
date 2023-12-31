/* 1
Создайте функцию которая принимает число, возводит переданное число в куб и
возвращает полученное значение.
Необходимо продемонстрировать вызов данной функции, с выводом результата,
который получаем от функции, в консоль.
*/
// именованная функция
// function cubeNumber(number) {
//     return Math.pow(number, 3);
// }

//стрелочная функция
const cubeNumber = (number) => Math.pow(number, 3);
console.log(cubeNumber(Number.parseFloat(prompt("Введите число"))));

/* 2
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

function inputMoney() {
    const money = Number.parseFloat(prompt("Введите число"));
    if (isNaN(money)) {
        console.log("Значение задано неверно");
    } else {
        salary(money);
    }
}

function salary(money) {
    console.log(`Размер заработной платы за вычетом налогов равен ${money * 0.87}`)
}

inputMoney();

/* 3
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

function inputNumber(ordinal) {
    const number = Number.parseFloat(prompt(`Введите ${ordinal} число `));
    return number;
}

function maxNumber(number1, number2, number3) {
    alert(`Максимальное значение среди чисел ${number1}, ${number2}, ${number3} равно ${Math.max(number1, number2, number3)}`)
}

maxNumber(inputNumber("1-е"), inputNumber("2-е"), inputNumber("3-е"));

/* 4
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

const sum = (number1, number2) => number1 + number2;
const multiplication = (number1, number2) => number1 * number2;

const div = (number1, number2) => {
    if (number2 === 0) {
        return "Делить на 0 нельзя";
    }
    else {
        return number1 / number2;
    }
}

const diff = (number1, number2) => {
    if (number1 === number2) {
        return 0;
    } if (Math.max(number1, number2) === number1) {
        return number1 - number2;
    } else {
        return number2 - number1;
    }

}

console.log(div(inputNumber("1-e"), inputNumber("2-e")));

