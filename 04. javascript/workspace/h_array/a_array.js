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
datas.push(100);
console.log(datas);

//join(): 전달한 값으로 Array객체의 각 요소를 구분한 뒤 문자열로 return
console.log(datas.join(", "));

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
datas.splice(2, 1, 40);
console.log(datas);
