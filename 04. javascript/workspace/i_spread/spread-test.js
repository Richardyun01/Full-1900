let uri = "post/list/1";
console.log(uri.split("/"));

console.log("ABCDEFG".split(""));
console.log("ABCDEFG".split());

const day = "ABCDEFG".split("").map((day) => `${day}-word`);
console.log(day);

console.log("abc".includes("a"));

const type = "image/png";
let isImage = type.includes("image");

console.log("ABBBBC".replace("B", "Z"));
console.log("ABBBBC".replaceAll("B", "Z"));

let birth = "2000-01-01";
const data = birth.replaceAll("-", "");
console.log(data);

console.log([1, 2, 3].lastIndexOf(3));
const i = "ABCDA".lastIndexOf("A");
console.log(i);

console.log("ABCDE".substring(1, 3));

const url = "/member/my-page/post";

let urlUpdated = url.substring(1);
let end = urlUpdated.indexOf("/");
let appName = urlUpdated.substring(0, end);

console.log(appName);

let start = urlUpdated.indexOf("/") + 1;
let serviceName = urlUpdated.substring(start);

console.log(serviceName);

function User(number, name, age) {
    this.number = number;
    this.name = name;
    this.age = age;
}

let users = [];
for (let i = 0; i < 3; i++) {
    users.push(new User(i + 1, `users${i + 1}`, 18 + i));
}

users.forEach(function (user) {
    console.log(user.name);
});

users
    .filter((user) => user.age >= 20)
    .forEach((user) => {
        console.log(`${user.number} ${user.name} ${user.age}`);
    });

function Product(number, name, price, user) {
    this.number = number;
    this.name = name;
    this.price = price;
    this.user = user;
}

let products = [
    new Product(3, "상품1", 3000, users[0]),
    new Product(8, "상품3", 1000, users[1]),
];

let buyers = products.map((product) => product.user);

buyers.forEach((buyer) => {
    console.log(`${buyer.number} ${buyer.name} ${buyer.age}`);
});

let datasNew = new Array(20).fill(0);
datasNew.forEach((data) => {
    console.log(data);
});

let numbers = new Array(100).fill(0).map((_, i) => i + 1);
const sum = numbers.reduce((acc, current) => acc + current, 0);
console.log(sum);
