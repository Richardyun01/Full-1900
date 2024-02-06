//시작 인덱스(i) 값은 0으로 설정
//1~100까지 출력
for (let i = 0; i < 100; i++) {
    console.log(i + 1);
}

//100~1까지 출력
for (let i = 0; i < 100; i++) {
    console.log(100 - i);
}

//1~100 중 짝수만 출력
for (let i = 0; i < 50; i++) {
    console.log((i + 1) * 2);
}

//1~count까지 합 출력
let count = 100,
    answer = 0;
for (let i = 0; i < count; i++) {
    answer += i + 1;
}
console.log(answer);

//0 1 2 3 4 0 1 2 3 4 0 1 2 3 4 출력
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 5; j++) {
//         console.log(j);
//     }
// }
let result = "";
for (let i = 0; i < 15; i++) {
    result += `${i % 5} `;
}
console.log(result);

//aBcDeFg...Z출력
for (let i = 97; i <= 122; i++) {
    let char = String.fromCharCode(i);
    if (i % 2 === 0) char = char.toUpperCase();
    console.log(char);
}

//1~10까지 중 5 제외하고 출력
// for (let i = 0; i < 10; i++) {
//     if (i + 1 != 5) console.log(i + 1);
// }
for (let i = 0; i < 9; i++) {
    console.log(i > 3 ? i + 2 : i + 1);
}

//break: 즉시 탈출
for (let i = 0; i < 10; i++) {
    console.log(i + 1);
    if (i + 1 == 5) break;
}

//continue: 다음 반복으로 넘어가기, 아래 있는 코드를 실행하고 싶지 않을 때
for (let i = 0; i < 10; i++) {
    if (i + 1 == 5) continue;
    console.log(i + 1);
}
