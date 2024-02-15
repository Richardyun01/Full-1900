function User(name) {
    //생성자 안에서 this의 역할은 접근한 객체를 의미
    this.name = name;
}

//일반 함수는 this를 사용하면 global 객체를 의미
function thisTest() {
    console.log(this); //global
    console.log(this === global); //true
}

thisTest();

//화살표 함수는 this를 사용하면 global로 가지 못하고 로컬의 exports를 의미
//화살표 함수에서 this 사용 불가
const arrowTest = () => {
    console.log(this); //global
    console.log(this === global); //true
};

arrowTest();

//.js파일 하나가 하나의 함수
//사용한 영역의 상위 객체를 의미
console.log(this); //not global
console.log(this === global); //false
console.log(this === module.exports); //true

this.id = "test";
