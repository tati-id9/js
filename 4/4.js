/*1
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/

for (let i = 0; i < 11; i++) {
    if (i === 0) {
        console.log(`${i} – это ноль`)
    } else if (i % 2 === 0) {
        console.log(`${i} – четное число`)
    } else {
        console.log(`${i} – нечетное число`)
    }
}

/* 2
Дан массив arr (ниже).
Необходимо внести такие изменения в массив, лежащий в const arr, чтобы
его значения после изменений стали:
[1, 2, 100, 6, 7]
*/

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(2, 3, 100);
console.log(arr);


/* 3
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

const getRandomIntValue = (minLimit, maxLimit) => {
    minLimit = Math.ceil(minLimit);
    maxLimit = Math.floor(maxLimit);
    return Math.floor(Math.random() * (maxLimit - minLimit + 1)) + minLimit; //Максимум и минимум включаются
}

function fillingArr() {
    let arr = [];
    let valueRandon;
    for (let i = 0; i < 5; i++) {
        valueRandon = getRandomIntValue(0, 9);
        arr.push(valueRandon);
    }
    return arr;
}

const sumElementArr = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const minElementArr = (arr) => {
    let minElem = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (minElem > arr[i]) {
            minElem = arr[i]
        }
    }
    // Для небольших массивов можно использовать следующий вариант:
    // minElem = Math.min.apply(null, arr);
    return minElem;
}

const elemArrIndexEqualThree = (arr) => {
    let arrIndex = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 3) {
            arrIndex.push(i);
        }
    }
    if (arrIndex.length === 0) {
        return "В масcиве элементов равных трем не найдено";
    }
    return arrIndex;
}

let array = fillingArr();

console.log(`Начальный массив: ${array}`)
console.log(`Сумма элементов массива: ${sumElementArr(array)}`)
console.log(`Минимальное значение в массиве: ${minElementArr(array)}`)
console.log(`Массив индексов элементов равным трем: ${elemArrIndexEqualThree(array)}`)

/* 4
Необязательное задание.
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

let mountain = "";
for (let i = 0; i <= 20; i++) {
    console.log((mountain += "x"));
}