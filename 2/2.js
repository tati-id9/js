/* 1.
Создать переменные positive и negative, в которые пользователь вводит с 
клавиатуры значения. Нужно попросить пользователя ввести положительное число в 
переменную positive и отрицательное в переменную negative. 
Перед тем, как положить значения в данные переменные необходимо их превратить 
в числа.
После ввода значений, необходимо вывести "Все значения верные.", если 
пользователь действительно ввел корректные значения, которые мы просили его 
ввести.
Если же пользователь где-то ввел неверное значение, то необходимо вывести 
в консоль "Одно или более значений некорректно.".
*/

const positive = Number.parseFloat(prompt('Введите положительное число'));
const negative = Number.parseFloat(prompt('Введите отрицательное число'));

if (positive >= 0 && negative < 0) {
  alert('Все значения верные.');
} else {
  alert('Одно или более значений некорректно.');
}

/* 2
Необходимо переписать данный код, используя тернарный оператор.
Если есть какие-либо недочеты в коде, можете их исправить.

let test = confirm("У вас много денег?");
    if (test === true) {
      console.log("Скоро будем у вас ;)");
    } else {
      console.log("До свидания.");
    }
*/

(confirm("У вас много денег?")) ? console.log("Скоро будем у вас ;)")
  : console.log("До свидания.");

/* 3
Необходимо создать переменную dayNumber, в которую пользователь должен ввести 
целое число в интервале [1, 32).
Если пользователь ввел иное значение, необходимо вывести в консоль 
"Неверное значение".
Если пользователь ввел верное значение, в нужном диапазоне, то необходимо 
определить, в какую декаду месяца попадает это число и вывести сообщение в 
консоль: "Число N1 попадает в N2 декаду месяца.", где вместо N1 и N2 будут 
подставлены подходящие значения, которые мы получили.

Примечание: выражение [1, 32) означает от 1 включительно, до 32, не включая 
число 32.
*/

const dayNumber = Number.parseInt(prompt('Введите целое число'));
let decade;

if (dayNumber >= 1 && dayNumber < 32) {
  if (dayNumber <= 10) {
    decade = 1;
  } else if (dayNumber > 10 && dayNumber <= 20) {
    decade = 2;
  } else {
    decade = 3;
  }
  console.log(`Число ${dayNumber} попадает в ${decade} декаду месяца.`);
} else {
  alert('Неверное значение')
}

/* 4
Необязательное задание.
Если вам показалось домашнее задание простым, выполняем данный пункт.

Необходимо от пользователя получить целое число.
Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

Пример:
Пользователь ввел число 163. Программа должна вывести:
"В числе 163 количество сотен: 1, десятков: 6, единиц: 3"

Пример 2:
Пользователь ввел число 74. Программа должна вывести:
"В числе 74 количество сотен: 0, десятков: 7, единиц: 4"

Пример 3:
Пользователь ввел число 9537. Программа должна вывести:
"В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"

Уточнение: Пользователь всегда вводит корректное положительное целое число.
Подсказка: Возможно, вам понадобится округление чисел и оператор %.
*/

const value = Number.parseFloat(prompt('Введите число'));

const hundreds = Math.trunc(value / 100) % 10;
const tens = Math.trunc(value / 10) % 10;
const units = Math.trunc(value) % 10;

console.log(`В числе ${value} количество сотен: ${hundreds} , десятков: ${tens} , единиц: ${units} `);