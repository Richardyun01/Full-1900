//클래스
//클래스는 추상적인 개념
//한번만 선언하기 위해 공통 요소를 클래스로 묶음

//객체
//객체는 추상적인 개념을 구체화한 것
//클래스에 선언된 프로퍼티를 사용 가능
//프로퍼티에 접근하기 위해서는 . 연산자를 사용
//프로퍼티에 접근할 때 []연산자를 사용 가능
//객체는 주소값으로 봐야 함

let user = {
    name: "ABCD",
    age: 20,
    address: "somewhere",
    introduce: () => {
        console.log("Hello World");
    },
    card1: "Card1",
    card2: "Card2",
    card3: "Card3",
};

user.introduce();
console.log(typeof user); //object

//일반적으로 .를 사용해서 프로퍼티에 접근
console.log(user.name);
//만약 프로퍼티 이름에 "-"와 같은 특수문자가 들어가 있거나 프로퍼티 이름에 규칙성이 있어서 한번에 가져와야 할 때는 []을 사용해서 프로퍼티에 접근
console.log(user["address"]);
for (let i = 0; i < 3; i++) {
    console.log(user[`card${i + 1}`]);
}
