// const f = function () {};

// function f() {
//     console.log("Hello");
//     return 3;
// }

// const a = f;
// a();
// console.log(a());

// function add(a, b) {
//     return a + b;
// }

// //f(x) = 2x + 1
// function f(x) {
//     return 2 * x + 1;
// }

// console.log(f(2));

// //두 정수의 곱셈 함수
// function multi(x, y) {
//     return x * y;
// }

// console.log(multi(3, 5));

//디폴트 파라미터
//필수로 받아야 하는 매개변수가 아닌, 선택사항으로 받는 매개변수를 설정
//전달받은 값이 없을 경우 원하는 기본 값으로 설정 가능
function add(n1 = 0, n2 = 0, n3 = 0) {
    return n1 + n2 + n3;
}

console.log(add(1, 2));
