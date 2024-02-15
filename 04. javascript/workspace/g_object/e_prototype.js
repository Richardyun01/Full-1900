//프로토타입
//프로토타입의 프로퍼티에 선언하면 객체화와 상관없이 한번만 생성됨
//모든 객체가 공유하는 값이 필요하면 프로토타입의 프로퍼티로 선언
//모든 객체가 공유하는 값을 한번에 관리하고 싶다면 프로토타입의 프로퍼티로 선언
function Employee(name, income) {
    this.name = name;
    this.income = income;
}

Employee.prototype.totalIncome = 0;

A = new Employee("AAA", 100);
B = new Employee("BBB", 200);

//객체로 프로토타입의 프로퍼티를 수정하면 객체의 프로퍼티에 추가됨
//객체로 프로토타입의 프로퍼티 수정 불가, 사용 가능
//a.totalIncome = 100; //객체의 프로퍼티에 추가
console.log(A.totalIncome); //객체의 프로퍼티에 접근

//객체에 프로퍼티가 없으면 프로토타입의 프로퍼티에서 검색
console.log(B.totalIncome); //프로토타입의 프로퍼티에 접근

//프로타입에 선언된 프로퍼티는 모든 객체가 공유하기 위함
Employee.prototype.totalIncome += A.income;
Employee.prototype.totalIncome += B.income;
console.log(B.totalIncome);

//공통요소를 쉽고 편하게 관리하고자 프로토타입의 프로퍼티에 선언
Employee.prototype.printInfo = function () {
    console.log(`${this.name}\n ${this.income}`);
};

A.printInfo();
B.printInfo();

//잘못된 사용 예
//Employee.prototype.printInfo();
