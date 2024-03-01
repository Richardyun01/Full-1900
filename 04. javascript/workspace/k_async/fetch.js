//URL: 경로
//URI: URL에서 IP와 포트번호를 제외한 나머지

//response: 응답 객체
//json:
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((responce) => responce.json())
    .then((json) => console.log(json));

const user = {
    id: 3,
    name: "A",
};

console.log(user);
console.log(JSON.stringify(user));

const json_data = JSON.stringify(user);
const object = JSON.parse(json_data);
console.log(object.name);

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((post) => {
        console.log(post.title);
    });
