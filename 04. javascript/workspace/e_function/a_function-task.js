// //1 ~ 10까지 출력하는 함수
// function count1() {
//     for (let i = 0; i < 10; i++) {
//         console.log(i + 1);
//     }
// }

// count1();

// //"홍길동"을 n번 출력하는 함수
// function count2(n) {
//     let name = "홍길동";
//     for (let i = 0; i < n; i++) {
//         console.log(name);
//     }
// }

// count2(3);

// //이름을 n번 출력하는 함수
// function count3(n, name) {
//     for (let i = 0; i < n; i++) {
//         console.log(name);
//     }
// }

// count3(3, "김씨");

// //홀수를 짝수로 짝수를 홀수로 변환시키는 함수
// function convert(n) {
//     return ++n;
// }

// console.log(convert(5));
// console.log(convert(6));

//아이디, 비밀번호, 닉네임을 전달받음
//닉네임의 기본값은 '익명'으로 설정
function info(id, pw, name = "익명") {
    return `${id} ${pw} ${name}`; //아이디-비밀번호-닉네임을 받아 하나의 문자열로 return
}

console.log(info("a", "b"));
console.log(info("a", "b", "검증"));
