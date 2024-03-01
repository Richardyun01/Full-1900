// const promise = new Promise((resolve, reject) => {
//     let check = true;
//     if (check) {
//         resolve("BBB");
//     } else reject("AAA");
// });

// const print = async () => {
//     const result = await promise;
//     console.log(result);
// };

// promise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((result) => {
//         console.log(result);
//     });

//프로그램: 실행이 안된 상태
//프로세스: 실행된 프로그램
//스레드: 프로세스 처리 경로
//단일 스레드: 처리 경로가 하나
//멀티 스레드: 처리 경로가 여러개
//동기(Synchronized): 모든 스레드가 하나씩 처리하도록 함
//비동기(Asynchronized): 모든 스레드가 순서가 없는 것처럼 동작

//Promise 객체 생성
//이행, 거절을 입력받음
const promise = new Promise((resolve, reject) => {
    let result = 1 + 1;
    resolve(result);
});

//동기 a
let data = 0;

//비동기 a
//then: 성공일때 사용
//생성된 Promise 객체 사용
promise.then((result) => {
    console.log(`result: ${result}`);
});
//promise.then(console.log);

//동기 b
console.log(`data: ${data}`);

async function test() {
    return 10;
}

test().then((result) => {
    console.log(result);
});

//동기 코드의 실행 흐름과 비동기 코드의 실행 흐름이 나뉘어짐
//Promise 객체의 사용 이유: JS의 통신 및 DB 접근이 비동기로 되어있기 때문
//비동기 코드의 결과가 Promise의 객체에 담김
