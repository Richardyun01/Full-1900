var data = 10; //전역변수

if (data != 10) {
    let data2 = 10; //지역변수
}

function test() {
    var data3 = 10; //지역변수
}

console.log(data);
//console.log(data2);
console.log(data3);

if (true) {
    //함수가 아닌 영역
    var data = 10; //영역 밖에서 사용 가능
    let data = 10; //영역 밖에서 사용 불가능
}

function f() {
    //함수 영역
    var data = 10; //영역 밖에서 사용 불가능
    let data = 10; //영역 밖에서 사용 불가능
}

//전역변수
//지역변수와 이름이 겹치면 지역 안에서는 지역 변수만 사용 가능
//let data = 10;

//global
//node에서만 사용 가능
//전역변수를 관리, global.(변수명) 으로 선언
//global.data = 10;

//globalThis
//Node.js에서는 전역변수들을 모두 global로 관리
//브라우저에서 window로 전역변수를 관리
//globalThis가 이를 구분해서 window 또는 global로 사용
globalThis.data = 10;
function f() {
    // let data = 20;
    // console.log(globalThis.data);

    //지역변수의 이름과 겹치지 않으면 그냥 전역변수 이름만 사용하면 됨
    console.log(data);
}

f();
