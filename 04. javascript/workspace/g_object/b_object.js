//new: heap 메모리의 할당
//Object(): 객체의 프로퍼티가 들어갈 수 있는 공간을 확보하고 그 주소를 가져옴
let dinner = new Object();
let user = {
    money: 10000,
};

dinner.name = "menu";
dinner.price = 30000;
//주소를 전달받은 뒤
dinner.pay = (money) => {
    //직접 주소에 접근해서 값을 수정
    user.money -= dinner.price;
};

//user 객체가 가지고 있는 주소를 전달
dinner.pay(user);
//원본 객체인 user의 money는 이미 수정되어 있음
console.log(user.money);
