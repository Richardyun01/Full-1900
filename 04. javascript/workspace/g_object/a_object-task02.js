//대카테고리
//번호, 대카테고리명
let categoryA = {
    number: 1,
    name: "a",
};

//소카테고리
//번호, 소카테고리명, 대카테고리
let categoryB = {
    number: 2,
    name: "b",
    categoryA: categoryA,
};

console.log(categoryB.categoryA.name);
console.log(categoryB.name);
