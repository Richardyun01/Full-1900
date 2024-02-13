// //두 정수의 덧셈 결과 출력
// //(1)
// function add(n1, n2, callback) {
//     if (callback) callback(n1 + n2);
//     return n1 + n2;
// }

// function printResult(result) {
//     console.log(result);
// }

// add(1, 2, printResult);
// const result = add(3, 4, printResult);

// //(2)
// const add = (n1, n2, callback) => {
//     if (callback) callback(n1 + n2);
//     return n1 + n2;
// };

// add(1, 3, (result) => {
//     console.log(result);
// });

// //(3)
// add(1, 5, console.log);

//두 정수의 곱셈을 구한 뒤 결과에 2를 곱한 뒤 출력
//(1)
// const multi = (n1, n2, callback) => {
//     if (callback) callback(n1 * n2 * 2);
//     return n1 * n2 * 2;
// };

// multi(2, 3, console.log);

// //(2)
// const multi2 = (n1, n2) => {
//     return n1 * n2;
// };

// const double = (n, callback) => {
//     if (callback) callback(n * 2);
//     return n * 2;
// };

// double(multi2(2, 3), console.log);

// //(3)
// const multi3 = (n1, n2, callback) => {
//     if (callback) return callback(n1 * n2);
//     return n1 * n2;
// };

// const result = multi3(2, 3, (result) => result * 2);
// console.log(result);

//성과 이름을 전달받아서 풀네임을 만든 뒤 "000님" 출력
//입력 예: "홍", "길동"
//결과 예: "홍길동님"
//(1)
// const print = (s1, s2, callback) => {
//     if (callback) {
//         return callback(`${s1}${s2}`);
//     }
//     return `${s1}${s2}`;
// };

// const result = print("홍", "길동", (result) => `${result}${"님"}`);
// console.log(result);

// //(2 강사답)
// const makeName = (first, last, callback) => {
//     if (callback) {
//         return callback(last + first);
//     }
//     return last + first;
// };

// const nameCard = makeName("길동", "홍", (fullName) => {
//     return `${fullName}님`;
// });

// console.log(nameCard);

//상품 1개 가격과 총 가격을 입력받고 개수가 5개 이하면 true 아니면 false
// //(1)
// const check = (single, all, callback) => {
//     let result = all / single <= 5 ? true : false;
//     if (callback) {
//         return callback(result);
//     }
//     return result;
// };

// const result = check(20, 100, (result) => result);
// console.log(result);
// const result2 = check(10, 100, (result) => result);
// console.log(result2);

// //(2 강사답)
// const getCount = (perPrice, totalPrice) => {
//     if (callback) {
//         return callback(totalPrice / perPrice);
//     }
//     return totalPrice / perPrice;
// };

// const check =getCount(20, 100, (count) => count <= 5);
// console.log(check);

//결제 상품 가격과 결제 상태를 전달받아서
//결제 상태가 true일 때 "000원 결제 완료"
//결제 상태가 false일 때 "000원 결제 취소" 출력
//(1)
const process = (price, status, callback) => {
    if (callback) {
        return callback(price, status);
    }
};

const message = (price, status) => {
    return status ? `${price}원 결제 완료` : `${price}원 결제 취소`;
};

console.log(process(10000, true, message));
console.log(process(10000, false, message));

//(2) 강사
const setStatus = (price, status, callback) => {
    let result = status ? `${price}원 결제 완료` : `${price}원 결제 취소`;
    if (callback) {
        callback(result);
    }

    return result;
};

setStatus(3000, true, (message) => {
    console.log(message);
});

setStatus(3000, false, console.log);

//콜백함수 3개 만들기: 목적 2개를 이으면 됨
//세 수 곱하기
const add = (n1, n2, n3, callback) => {
    if (callback) callback(n1 * n2 * n3);
    return n1 * n2 * n3;
};

add(2, 3, 4, console.log);

//문자열을 받아서 길이를 출력
const getCount = (text, callback) => {
    const length = text.length;
    if (callback) {
        return callback(length);
    }
    return length;
};

const print = (length) => {
    return `길이: ${length}`;
};

console.log(getCount("HelloWorld!", print));

//일정 시간 후 콜백함수 호출
const delayExecution = (delay, callback) => {
    setTimeout(() => {
        if (callback) {
            return callback();
        }
    }, delay);
};

const delayedMessage = () => {
    console.log("지연된 실행 후 호출");
};

delayExecution(2000, delayedMessage);
