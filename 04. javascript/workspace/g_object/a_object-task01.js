//회원
//회원번호, 아이디, 주소1, 주소2, 주소3

//상품
//상품번호, 상품명, 상품 가격, 상품을 구매한 회원

//상품 전체 정보를 출력하고 회원의 정보는 주소만 출력

//(1)
let user1 = {
    number: 1111,
    id: "userid",
    location1: "loc1",
    location2: "loc2",
    location3: "loc3",
};

let product1 = {
    number: 1234,
    name: "product",
    price: 4000,
    user: user1,
};

console.log(product1.number, product1.name, product1.price);
for (let i = 1; i <= 3; i++) {
    console.log(product1.user[`location${i}`]);
}

//(2)
let product2 = {
    number: 1234,
    name: "product",
    price: 4000,
    user: {
        number: 1111,
        id: "userid",
        location1: "loc1",
        location2: "loc2",
        location3: "loc3",
    },
};

console.log(product2.number, product2.name, product2.price);
for (let i = 1; i <= 3; i++) {
    console.log(product2.user[`location${i}`]);
}

//(3) 강사
let user3 = {
    number: 1111,
    id: "userid",
    location1: "loc1",
    location2: "loc2",
    location3: "loc3",
};

let product3 = {
    number: 1234,
    name: "product",
    price: 4000,
    user: user3,
    // 메소드와 함수의 차이
    // 메소드: 특정 영역 안에서만 선언됨
    // 함수: 특정 영역 안에 있지 않고 외부에서 선언됨
    printInfo: () => {
        console.log(product3.number, product3.name, product3.price);
    },
    printAddress: () => {
        for (let i = 1; i <= 3; i++) {
            console.log(product3.user[`location${i}`]);
        }
    },
};

product3.printInfo();
product3.printAddress();

//수정: 기존에 있는 key값에 새로운 값을 넣음
product3["name"] = "new product";
//추가: 기존에 없는 key값에 값을 넣음
product3.printInfo3 = () => {
    console.log(product3.price, product3.name, product3.number);
};

function f() {}

product3.printAddress = f;
