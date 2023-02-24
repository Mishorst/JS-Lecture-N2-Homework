"use strict";

const user = [
  { name: "Temo", age: 25 },
  { name: "Lasha", age: 21 },
  { name: "Ana", age: 28 },
];

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
