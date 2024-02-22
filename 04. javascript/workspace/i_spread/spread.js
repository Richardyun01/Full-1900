// let user = {
//     id: 1,
//     name: "A",
// };

// //비구조화 할당(구조 분해)
// const { id, name } = user;
// const [num1, num2, num3, num4] = numbers;

// // console.log(id, name);
// // console.log(num1, num2);

// function printIntro({ id, name }) {
//     console.log(id, name);
// }

// //printIntro(user);

// let user = {
//     id: 1,
//     name: "A",
//     age: 10,
// };

// //아래의 코드에서 rest는 id를 제외한 나머지 정보들이 들어감
// //따라서 ...rest는 rest문법
// function test({ id, ...rest }) {
//     console.log(rest);
// }

// test(user);

// user = { ...user, id: 3 };
// console.log(user);

// user = { ...user, age: 20 };
// console.log(user);

// function getTotal(...datas) {
//     console.log(datas);
// }

// //getTotal(1, 2, 3, 4);
// getTotal(...[1, 2, 3, 4]);

// console.log([..."ABC"]);
function getString(...data) {
    console.log(data);
}

getString(..."1234");

//객체는 매개변수로 전달받을 때 비구조화 할당으로 받는 것이 편함
//새로운 객체가 필요하다면 rest 문법을 사용해서 기존 값을 복사해 사용
//Array 객체는 매개변수로 전달받을 때 몇 개의 매개변수일지 알 수 없을 때 rest 문법을 사용해서 받음
