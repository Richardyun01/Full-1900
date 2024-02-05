//동적 바인딩: 컴파일 시 값에 따라 자료형이 동적으로 결정됨

data = 10;
console.log(typeof data);
console.log(data + 10);

data = "string";
console.log(typeof data);
//console.log(data + "string");
console.log(`${data}string`);
