//datas라는 Array 객체를 하나 선언
//datas에 1~5까지 값을 담은 뒤 각 값에 +5를 하여 출력
// let datas = [];
// for (let i = 0; i < 5; i++) {
//     // datas.push(i + 1);
//     datas[i] = i + 1;
// }

// for (let i = 0; i < datas.length; i++) {
//     datas[i] += 5;
// }
// console.log(datas);

//datas라는 Array 객체를 하나 선언
//datas에 1~10 중 짝수만 담음
//datas의 모든 값을 :으로 연결하여 출력
// //(1)
// let datas = [];
// for (let i = 0; i < 10; i += 2) {
//     datas.push(i + 2);
// }

// console.log(datas.join(":"));

// //(2)강사답
// let datas = [];
// datas.concatenate = function () {
//     return this.join(":");
// };

// for (let i = 0; i < 10; i += 2) {
//     datas[i] = (i + 1) * 2;
// }

// const result = datas.concatenate();
// console.log(datas);

//datas라는 Array 객체를 하나 선언
//datas에 1~10까지 값을 담음
//첫 값을 제외한 나머지 값을 추출
//추출한 array 객체에서 홀수를 출력
// let datas = [];
// for (let i = 0; i < 10; i++) {
//     datas.push(i + 1);
// }

// let extractedDatas = datas.slice(1);

// for (let i of extractedDatas) {
//     if (i % 2 === 1) {
//         console.log(i);
//     }
// }

//datas라는 Array 객체를 하나 선언
//datas에 1~10까지 값을 담음
//datas에서 짝수만 삭제
// //(1)
// let datas = [];
// for (let i = 0; i < 10; i++) {
//     datas.push(i + 1);
// }

// let i = 0;
// while (i < datas.length) {
//     datas[i] % 2 == 0 ? datas.splice(i, 1) : i++;
// }

// console.log(datas);

// //(2)
Array.prototype.set = function () {
    for (let i = 0; i < 10; i++) {
        datas.push(i + 1);
    }
};
// let datas = [];
// datas.set();

//datas에 변화를 주면 반복횟수에 변화가 생기므로 사용 불가
// for (let i in datas) {
//     if (i % 2 == 1) datas.splice(i, 1);
// }
// for (let i = 0; i < 5; i++) {
//     datas.splice(i, 1);
// }

// console.log(datas);

//홀수만 -2 빼기
let datas = [];
datas.set();

for (let i = 0; i < datas.length; i++) {
    if (datas[i] % 2 == 1) {
        datas.splice(i, 1, datas[i] - 2);
    }
}

console.log(datas);
