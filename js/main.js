// //コメントです
// console.log("Hello world");//コメントです
// console.log("Hello world");
// let message = "kent"; //「message」という変数を定義し、「Hello world」という値を代入
// console.log(message); //変数名を使うことで、変数の中の値を使うことができる
// message = "Good night world"; //変数の値は書き換えることができる
// console.log(message); //中身が変わるので、出力される値も変わる
// message = "keiba";
// console.log(message);

// const n = 123;
// const str1 = "Hello";
// const str2 = 'Hello world';
// const str3 = `${str1} world`;

// const bool1 = true;
// const bool2 = false;

// const name = null;

// let n;
// console.log(n);

// console.log(typeof 20);
// console.log(typeof "str");
// console.log(typeof true);
// console.log(typeof undefined);

// const bool = true;
// console.log(typeof bool);
// const str = String(bool);
// console.log(typeof str);

// const str = "123";
// console.log(typeof str);
// const num = Number(str);
// console.log(typeof num);

// console.log(Boolean(1));
// console.log(Boolean(0));
// console.log(Boolean("hello"));
// console.log(Boolean(""));

// let message = "say";
// console.log("Hello");
// message = "Goodbye" 
// console.log(message);



// Number
// Boolean
// String
// undefined
// null

// const add = 6 + 2;
// console.log(add);
// const sub = 6 - 2;
// console.log(sub);
// const mul = 6 * 2;
// console.log(mul);
// const div = 6 / 2;
// console.log(div);

// const per = 5 % 2; //5を2で割った余りである1が代入される
// console.log(per);

// let inc = 2;//++は１増加
// inc++;
// console.log(inc);//--は１減少
// let dec = 2;
// dec--
// console.log(dec);

// const a = 2;
// const b = 2;
// console.log(a == b);

// const a = 2;
// const b = 2;
// console.log(a != b);

// const a = 2;
// const b = 3;
// console.log(a < b);

// const a = 2;
// const b = 1;
// console.log(a <= b);

// const a = 3;
// const b = 2;
// console.log(a > b);

// const a = 3;
// const b = 2;
// console.log(a >= b);

// const a = 3;
// const b = 2;
// console.log(a > 0 && b > 0)

// const a = 3;
// const b = 2;
// console.log(a || b);

// const a = 3;
// const b = 2;
// console.log(!a)

// 1 === 1 //true
// '1' === 1 //false
// 1 !== 1 //false
// '1' !== 1 //true

//if文
//else=かつならびにという意味

// const price = 2400;
// if (price < 1000) {
//   console.log("安い");
// } else if (price > 2000) {
//   console.log("高い");
// } else {
//   console.log("丁度良い");
// }


//三項演算子/※被演算子＝オペランド/例（１＋２の場合"＋"は演算子、１、２は被演算子になる。つまり、演算子以外の物全てを指す
// const quantify = 200;

// const banana = (quantify <= 300) ? "少ない" : "多い";
// console.log(banana);

// const win = 350;

// const leadingjockey = (win <= 300) ? "少ない" : "多い";
// console.log(leadingjockey);


//switch文
//case 〇〇で複数分岐を表現するif文より分かりやすくなるケースがある
// const person = 3;

// switch (person) {
//   case 1:
//     console.log("太郎さん");
//     break;
//   case 2:
//     console.log("次郎さん");
//     break;
//   case 3:
//     console.log("三郎さん");
//     break;
//    }

//問題//
//問1

// const price = 1000;
// const tax = 0.1;
// console.log(price * tax);
  
// //問２-1
// const A君 = 80 + 90 + 60 + 85 + 100
// const B君 = 40 + 30 + 50 + 25 + 200

// console.log(A君)
// console.log(B君)

// //問２-2

// if (A君 > 300 && B君 > 300) {
//   console.log("素晴らしい");
// } else if (A君 > 300) {
//   console.log("普通");
// }else if(B君 > 300) {
//   console.log("普通");
// }else if(A君 < 300 && B君 < 300) {
//   console.log("頑張ろう");
// }

// const luck = "大吉";

// switch (luck) {
//   case "大吉":
//     console.log("大吉です!");
//     break;
//   case "中吉":
//     console.log("中吉です!");
//     break;
//   case "小吉":
//     console.log("小吉です!");
//     break;
//   case "吉":
//     console.log("吉です!");
//     break;
//   case "末吉":
//     console.log("末吉です!");
//     break;
//   case "凶":
//     console.log("凶です!");
//     break;
//   case "大凶":
//     console.log("大凶です!");
//     break;
// }

// //問４

// const uno = 1800;

// const product = (uno < 1000)?"安い":(uno > 2000)?"高い":"丁度いい";
// console.log(product);

// const array = ["太郎", "次郎", "三郎", "四郎", "五郎"];

// console.log(array);
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4]);

// array[1] = "二郎";

// console.log(array);
// console.log(array.length);

// array.push("六郎");
// array.unshift("一郎");
// console.log(array);

// array.pop();
// array.shift();
// console.log(array);

// array.splice(1, 3);
// console.log(array);

// const array = ["a", "b", "c"];

// const newArray = array.concat(["d", "e"]);

// console.log(newArray); 

// const array = ["a", "b", "c"];

// // スプレッド構文を使った場合
// // const newArray = ["x", "y", "z", ...array];
// const newArray = ["x", ...array, "z"];
// console.log(newArray); 

// // concatの場合
// const newArrayConcat = ["x", "y", "z"].concat(array);
// console.log(newArrayConcat); 

// const array = ["HTML", "CSS", "JavaScript", "PHP"];

// const indexOfJS = array.indexOf("JavaScript");
// console.log(indexOfJS); 
// console.log(array[indexOfJS]); 

// // Ruby という要素はないため -1 が返される
// console.log(array.indexOf("Ruby")); 

// const array = [10, 15, 5, 40];

// const found = array.find(function (element) {
//   return element > 20
// });

// console.log(found);

// const array = ["a", "b", "c", "d", "e"];

// // インデックス2から4の範囲を取り出す
// console.log(array.slice(2, 4));

// // 第二引数を省略した場合は、第一引数から末尾の要素までを取り出す
// console.log(array.slice(1));

// const array = ["HTML", "CSS", "JavaScript", "PHP"];

// const indexOfJS = array.indexOf("JavaScript");

// if (indexOfJS !== -1) {
//   console.log("配列にJavaScriptが含まれています");
// }

// const array = ["HTML", "CSS", "JavaScript", "PHP"];

// // includesは含まれているならtrueを返す
// if (array.includes("JavaScript")) {
//   console.log("配列にJavaScriptが含まれています");
// }

// const array = ["太郎", "次郎", "三郎", "四郎", "五郎"];

// array.forEach(function (item, index) {
//   if (item == "三郎") {
//     console.log(`${item}は${index}番目の要素です`);
//   }
// });

// const array = [8, 10, 5, 3, 2];

// const result = array.map(function (item) {
//   return item * 3;
// });

// console.log(result);

// const array = [8, 10, 5, 3, 2];

// const result = array.filter(function (item) {
//   return item % 2 === 1;
// });

// console.log(result);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// ]
// const num = numbers.map(function (item) {
//   if (item % 2 == 0) {

//     return item * 2;
//   }
//   return item;
//   });
  
// console.log(num);

// function text(number1, number2) {
//   const value = number1 + number2;
//   return value;
// }

// console.log(text(2, 4)); //関数の呼び出し

// function text(number1, number2) {
//   const value = number1 + number2;
//   return value;
// }

// const sum = text(2, 4); // sumにvalueの値を代入
// console.log(sum * 2); // 12

// const text = function (number1, number2) {
//   const value = number1 + number2;
//   return value;
// }

// console.log(text(2, 4));

// const text = (number1, number2) => {
//   const value = number1 + number2;
//   return value;
// }

// console.log(text(2, 4));

// function vegetable(name, price, func) { 
//   const pit = func(price); // func（priceIncludingTax）の実行
//   console.log(name + 'の税込価格は' + pit + 'です');
// }

// // 関数式
// const priceIncludingTax = function (price) { // 税込み価格の計算
//   const tax = 1.1;
//   return Math.floor(price * tax);
// }

// vegetable('苺', 200, priceIncludingTax); // priceIncludingTaxがコールバック関数


// 問１　7/5
// const array = [2, 4, 7, 5, 4, 3, 8];

// const result = array.filter(function (val,idx,arr) {
//   return arr.indexOf(val) === idx;
// });

// console.log(result);

問２　7/5

const year = [2020, 2021];