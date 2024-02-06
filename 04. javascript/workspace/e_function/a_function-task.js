//1 ~ 10까지 출력하는 함수
function count1() {
    for (let i = 0; i < 10; i++) {
        console.log(i + 1);
    }
}

count1();

//"홍길동"을 n번 출력하는 함수
function count2(n) {
    for (let i = 0; i < n; i++) {
        console.log("홍길동");
    }
}

count2(3);

//이름을 n번 출력하는 함수
function count3(n, name) {
    for (let i = 0; i < n; i++) {
        console.log(name);
    }
}

count3(3, "김씨");
