//Array: 저장 공간의 나열
let datas = [10, 20, 15, 30, 25];
// for (let i = 0; i < datas.length; i++) {
//     console.log(datas[i]);
// }

// //인덱스가 필요할 때
// for (let i in datas) {
//     console.log(i);
// }

// //값이 필요할 때
// for (let i of datas) {
//     console.log(i);
// }

//push(): 가장 마지막에 값을 추가
// datas.push(100);
// console.log(datas);

// //join(): 전달한 값으로 Array객체의 각 요소를 구분한 뒤 문자열로 return
// console.log(datas.join(", "));

//slice(begin, end): 원하는 부분을 추출하기 위해서 시작 인덱스와 마지막 인덱스를 전달
//slice(begin): 시작 인덱스부터 마지막까지 추출
//console.log((datas = datas.slice(0, 3)));

//인덱스가 음수면 뒤에서부터 순서대로 앞으로 세기
//마지막 방 인덱스는 -1, 마지막에서 두번째 방 인덱스는 -2
//console.log((datas = datas.slice(1, -1)));

//console.log((datas = datas.slice(1)));

//splice(index, count): 삭제
//splice(index, count, ...args): 교체
// //삭제된 값이 Array 객체로 리턴
// datas.splice(1, 1);
// //원본이 바로 적용
// console.log(datas);

//삭제 후 삽입: 교체 및 수정으로 표현
// datas.splice(2, 1, 40);
// console.log(datas);

//indexOf(value): value를 해당 Array객체에서 찾은 뒤 인덱스 번호 return, 찾지 못하면 -1 return
// console.log(datas.indexOf(20));
// console.log(datas.indexOf(200));

//forEach(callback): 전달한 callback함수의 매개변수에 값, 인덱스, 원본객체를 전달
// datas.forEach((a, b, c) => {
//     console.log(a, b, c);
//     console.log("======");
// });

//순서상 매개변수를 작성해야 하지만 사용하지 않을 경우 "_"로 작성
// datas.forEach((_, i, datas) => {
//     datas[i] = i + 1;
// });

// console.log(datas);

// datas.forEach((data) => {
//     console.log(data);
// });

//map(callback): 기존값을 callback 함수의 리턴값으로 변경, 작업 완료된 array를 return
// datas.map((a, b, c) => {
//     console.log(a, b, c);
//     console.log("======");
// });

// const result = datas.map((data) => data + 3);
// console.log(result);

//filter(callback): 전달한 callback 함수의 return값이 true일 때만 해당 값 추출
// //홀수만 추출
// const result = datas.filter((data) => data % 2 == 1);
// console.log(result);

//reduce(callback): 전달한 callback 함수의 매개변수에 4개를 전달 가능
//매개변수 1: 초기값 설정, array 객체의 첫 값으로 설정
//매개변수 2: array 객체의 각 값
//매개변수 3: 매개변수 2에 들어온 값의 인덱스
//매개변수 4: 원본 array 객체
// datas.reduce((a, b, c, d) => {
//     console.log(a, b, c, d);
//     console.log("======");
// }, 0);

////reduce(callback, initValue): initValue 작성 시 매개변수 1에 initValue가 들어감
// const result = datas.reduce((variable, data, index) => {
//     console.log(variable, data, index);
//     return variable + data;
// });
// console.log(result);

// const result = datas.reduce((variable, data, i) => {
//     return 3;
// });
// console.log(result);

// const result = datas.reduce((variable, _, i) => {
//     variable.push(i + 1);
//     return variable;
// }, []);
// console.log(result);

// let datas2 = ["안", "녕", "하", "세", "요"];
// const result = datas2.reduce((variable, data) => {
//     return data + variable;
// });
// console.log(result);

// let datas3 = [1, 2, 3, 4, 5];
// const result = datas3.reduce((variable, data, i) => {
//     variable[`data${i + 1}`] = `${i}.A`;
//     return variable;
// }, {});
// console.log(result);

//처음부터 공간을 확보하고자 할때 사용하는 방식
//new Array(확보해놓을 공간 수): 미리 칸 수를 확보, 공간만 확보되었고 값은 없기 때문에 forEach, map 등 반봉 진행 프로퍼티는 동작하지 않음
//fill(초기값): 미리 값을 세팅하기 위한 초기값
let datasNew = new Array(20).fill(0);
datasNew.forEach((data) => {
    console.log(data);
});
//console.log(datasNew.length);
