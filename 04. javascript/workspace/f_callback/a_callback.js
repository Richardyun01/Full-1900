//콜백함수: 함수가 함수를 매개로 입력받음
//콜백함수는 분리를 목적으로 함

//이름을 전달받은 뒤 이름을 출력하는 서비스
function setName(name, callback) {
    //name에는 값이 들어오고 callback에는 함수(주소값)가 들어옴
    if (callback) {
        //setName이 사용될 때 callback자리에 함수를 전달했다면 setName에서 받은 name(결과값)을 callback에 전달
        callback(name);
    }
}

//통상 방법: 함수를 새로 선언
function printName(name) {
    console.log(name);
}

//setName은 printName함수를 전달받은 뒤 사용
//printName은 callback함수가 됨 -> setName의 목적과 printName의 목적은 다르므로 두 함수로 분리해서 하나의 함수처럼 연결
setName("abcd", printName);

//익명함수: 일회성으로 사용하고자 할 때 이름(식별자) 없이 선언
//익명함수 구 문법
setName("abcd", function (name) {
    console.log(name);
});

//익명함수 현 문법
//익명함수는 화살표 함수라는 문법으로 선언 가능
//(매개변수, ...) => {실행할 문장; return 리턴값;}
setName("abcd", (name) => {
    console.log(name);
});

//화살표 함수에 이름을 붙여서 재사용 가능하게 함
const printName2 = (name) => {
    console.log(name);
};

//화살표 함수를 printName2에 담았기 때문에 함수 그대로 setName에 전달
setName("abcd", printName);

//console.log를 바로 전달
setName("abcd", console.log);

//화살표 함수는 익명함수로 나중에 다시 쓰기 위해 이름을 붙여 저장
const sayHello = () => {
    console.log("Hello");
};

sayHello();

//(1) 중괄호 안에 return 문장만 존재
const add = (n1, n2) => {
    return n1 + n2;
};

console.log(add(1, 2));

//(2): return값만 작성할 거라면 중괄호를 생략하고 바로 return값을 작성 가능
const add2 = (n1, n2) => n1 + n2;
console.log(add(1, 2));

//매개변수로 전달받은 값을 즉시 다른 함수에 전달할 거라면 굳이 직접 함수를 선언할 필요가 없음
//(name) => {console.log(name)};
setName("abcd", (name) => console.log);
