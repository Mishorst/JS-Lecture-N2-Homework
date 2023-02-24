"use strict";

const user = [
  { name: "Temo", age: 25 },
  { name: "Lasha", age: 21 },
  { name: "Ana", age: 28 },
];

// N#1
// ფუნქცია პოულობს მასივში ყველაზე მცირე ასაკის ადამიანს და აბრუნებს მის სახელს
function returnMinAge(user) {
  let temp = user[0].age;
  let n;

  for (let us of user) {
    if (us.age < temp) {
      temp = us.age;
      n = us.name;
    }
  }
  return n;
}

console.log(returnMinAge(user));

// N#2
// ფუნქცია იღებს ობიექტს და ახალ ობიექტში წერს ძველი ობიექტის მნიშვნელობებს
function newObject(obj) {
  const newObj = {};
  for (let key in obj) {
    newObj[key] = obj[key];
  }
  return newObj;
}

// ციკლი კითხულობს ერეის და უზრუნველყოფს ობიექტის გადაცემას ფუნქციისთვის, შემდეგ დაბრუნებულ ობიექტს კი ფუშავს ერეიში
const newUsersArr = [];
for (let i of user) {
  let object = newObject(i);
  newUsersArr.push(object);
}

console.log(newUsersArr);

// N#3
// ფუნქცია რენდომულად იღებს რიცხვს 1-დან 6-ის ჩათვლით და აბრუნებს გაგორების რაოდენობას 3-ის მოსვლამდე
function randomNumber() {
  let t = 0;
  let x = Math.floor(Math.random() * 6 + 1);

  while (x !== 3) {
    x = Math.floor(Math.random() * 6 + 1);
    t++;
  }
  return t;
}

// რადგან ათვლა 0-დან იწყება, ვუმატებთ 1-ს.
let a = randomNumber() + 1;
let b = randomNumber() + 1;

if (a < b)
  console.log(`გამარჯვებულია a მომხმარებელი, მან 3-იანი გააგორა ${a} ცდაში`);
else if (a > b)
  console.log(`გამარჯვებულია b მომხმარებელი, მან 3-იანი გააგორა ${b} ცდაში`);
else if ((a = b)) console.log(`მათ ერთად გააგორეს 3-იანი`);
