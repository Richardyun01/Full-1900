// /, %(modulus, mod)
console.log(10 / 3);
console.log(10 % 3);

// *
console.log(10 * 3);

//조건식: 결과가 참(true)/거짓(false) 둘 중 하나가 나오는 식
//조건식은 반드시 값으로 봄
let condition = 10 > 3;
console.log(condition);

//==, ===
//==은 값만 검사하고, ===은 형도 같이 검사한다.
data1 = 10;
data2 = "10";
console.log(data1 == data2);
console.log(data1 === data2);

//!=, !==
console.log(data1 != data2);
console.log(data1 !== data2);

//&&, ||
//조건식 1 && 조건식 2: 둘 다 true여야 전체가 true
//조건식 1 || 조건식 2: 둘 중 하나라도 true면 전체가 true
const DATA = 20;
const condition1 = DATA <= 10;
const condition2 = DATA >= 20;

console.log(condition1 || condition2);

//거짓을 표현하는 값
// let condition3 = "";
// let condition4 = undefined;
// let condition5 = null;
let condition6 = 0;
if (condition6) {
    console.log("true");
} else {
    console.log("false");
}

// ||: 기본값 설정
//앞에 작성한 값이 false를 의미하는 값이라면 뒤에 설정한 값이 대신 사용됨
let page = 1;
let data = page || 1;
console.log(data);

// &&: 하나라도 false면 모두 false이기 때문에 앞의 조건식이 true일때만 다음 문장이 실행됨
let check = false;
let data3 = 10;

check && (data3 = 20);
console.log(data3);

// :? 상항 연산자
//조건식 ? 참일 때 사용할 값 : 거짓일 때 사용할 값
let check1 = 10 > 11;
console.log((check ? 10 : 11) + 3);

// 누적 연산자 += -= *= /=
let money = 10000;
//money = money - 1000;
money -= 1000;
console.log(money);

//증감 연산자 ++ --
//전위형: 바로 반영
//후위형: 다음 줄부터 반영
let data4 = 10;
console.log(++data4);
console.log(data4++);
console.log(data4);
