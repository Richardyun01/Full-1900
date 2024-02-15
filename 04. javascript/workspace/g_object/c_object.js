//생성자
//함수로 선언하되 함수라 부르지 않고 생성자라고 부름
//생성자는 return값이 정해져 있기 때문에 선언 시 return 사용 불가능 -> 함수가 아님
//앞글자를 대문자로 작성한 뒤 함수를 선언하면 이를 생성자로 판단
let card = {
    bank: "",
    cvc: "",
};

//초기화를 하고자 하면 매개변수로 초기값을 받을 수 있음
function Card(name, user, cvc = "000") {
    //접근한 객체가 갖고 있는 주소가 this에 자동으로 담김
    this.name = name;
    this.user = user;
    this.cvc = cvc;
    this.getHistory = () => {
        console.log(this.name);
    };
}

let user = {
    name: "ABCD",
    age: 20,
    address: "somewhere",
    introduce: () => {
        console.log("Hello World");
    },
};

//객체화를 할때 마다 새로운 공간이 할당되고 객체마다 주소값은 다르다
const a = new Card("a", user);
const b = new Card("b", user, "123");

//a.user = user;
//b.user = user;
