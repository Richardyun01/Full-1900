// //B파일
// const buttonComponent = (styles, texts) => {
//     //const buttonComponent = ({ color, border, margin }) => {
//     const { color, border, margin } = styles;
//     const { normal, hover } = texts;

//     console.log(color, border, margin);
//     console.log(normal, hover);
// };

// //A파일
// let styles = {
//     color: "red",
//     border: "1px solid black",
//     margin: "0 auto",
// };

// let texts = {
//     normal: "A",
//     hover: "B",
// };

// //buttonComponent(styles, texts);
// buttonComponent(styles, texts);

// //B: productComponent라는 함수 선언 후 상품 정보 받기
// const productComponent1 = (product) => {
//     const { id, name, price, discount } = product;
//     console.log(id, name, price, discount);
// };

// // const productComponent2 = ({ id, name, price, discount }) => {
// //     console.log(id, name, price, discount);
// // };

// const productComponent2 = ({ price, ...product }, discount) => {
//     return {
//         ...product,
//         price: price, //추가
//         discount: discount, //수정
//         sellPrice: price * (1 - discount / 100), //추가
//     };
// };

// //A: 상품
// //번호, 상품명, 가격, 할인율
// let product = {
//     id: 1,
//     name: "A",
//     price: 2000,
//     discount: 20,
// };

// productComponent1(product);
// product = productComponent2(product, 20);
// console.log(product);

// //B
// //categoryComponent라는 함수 선언 후 카테고리 정보 받기
// //이름을 다른 이름으로 변경해서 리턴
// const categoryComponent = (category, name) => {
//     return {
//         ...category,
//         name: `${name}`,
//     };
// };

// //A
// //카테고리
// //번호, 이름
// let category = {
//     id: 1,
//     name: "AAA",
// };

// //변경된 카테고리 이름 출력
// category = categoryComponent(category, "BBB");
// console.log(category); //{id: 1, name: 'BBB'}
// console.log(category.name); //BBB

//B
const categoryComponent = (...categories) => {
    const [category1, ...rest] = categories;
    console.log(category1);

    for (category of rest) {
        console.log(category);
    }
};

//A
globalThis.id = 0;
function Category(name) {
    this.id = ++id;
    this.name = name;
}

let categories = [
    new Category("AAA"),
    new Category("BBB"),
    new Category("CCC"),
    new Category("DDD"),
];

categoryComponent(...categories);
