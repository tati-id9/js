/* 1
Дан объект numbers. 
Необходимо в консоль вывести все значения объекта, которые больше или равны 3.
*/

const numbers = {
  key1: 12,
  key2: 2,
  key3: 4,
  key4: 1,
  key5: -244,
  key6: 0,
  key7: 7,
};

for (const kei in numbers) {
  if (numbers[kei] >= 3) {
    console.log(numbers[kei]);
  }
}


/* 2
Необходимо из объекта post, вывести значения, к которым приписан комментарий, 
в консоль.
*/

const post = {
  author: "John", // вывести этот текст
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: "Alex",
      text: "lorem ipsum",
      rating: {
        likes: 10,
        dislikes: 2, // вывести это число
      },
    },
    {
      userId: 5, // вывести это число
      userName: "Jane",
      text: "lorem ipsum 2", // вывести этот текст
      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(`${post.comments[1].userId} and ${post.comments[1].text}`);

/* 3
Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя
метод forEach.
Обратите внимание, что в массиве должны быть изменены цены продуктов после 
выполнения метода forEach. Не нужно создавать новый массив.
Если сложно работать с методами массива, то можно сделать и обычным циклом.
*/

const product = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];


product.forEach(elem => { elem.price *= 0.85 });
console.log(product);

/* 4
1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна
фотография, используя метод filter. Исходные данные - массив products.
2. Необходимо отсортировать массив products используя метод sort по цене,
начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести
отсортированный массив в консоль.
Если сложно работать с методами массива, то можно сделать и обычным циклом.
*/

const products = [
  {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg"],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: ["3.jpg"],
  },
  {
    id: 8,
    price: 78,
  },
];


console.log(products.filter((product) => product.photos?.length > 0));
console.log(products.sort((a, b) => a.price - b.price));

/* 5
Необходимо создать объект, в котором будут объединены два массива en и ru 
так, чтобы в объекте ключами выступали значения из массива en, а значениями 
объекта являлись значения из массива ru.
*/

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];

// Здесь пишем решение, данный комментарий необходимо стереть.

const daysOfWeek = {};

en.forEach((en, i) => daysOfWeek[en] = ru[i]);

// const daysOfWeek = en.reduce(function (map, i, j) { map[i] = ru[j]; return map; }, {});

console.log(daysOfWeek);