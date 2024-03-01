// //https://jsonplaceholder.typicode.com/users
// //zipcode만 추출해서 출력
// fetch("https://jsonplaceholder.typicode.com/users/")
//     .then((response) => response.json())
//     .then((users) => {
//         //zipcode만 추출
//         const zipcodes = users.map((user) => user.address.zipcode);
//         //zipcode를 출력
//         zipcodes.forEach((zipcode) => console.log(zipcode));
//     });

// //https://jsonplaceholder.typicode.com/comments
// //postId가 10번인 댓글 전체 출력
// fetch("https://jsonplaceholder.typicode.com/comments")
//     .then((response) => response.json())
//     .then((comment) => {
//         //filter로 postId가 10인지 체크 및 분류
//         const filteredComments = comment.filter(
//             (comment) => comment.postId === 10
//         );
//         //filter된 comment를 출력
//         filteredComments.forEach((comment) => {
//             console.log(`ID: ${comment.id}`);
//             console.log(`Name: ${comment.name}`);
//             console.log(`Email: ${comment.email}`);
//             console.log(`Body: ${comment.body}`);
//         });
//     });

function fetchData(url) {
    const response = fetch(url);
    return response.json();
}

//각 결과를 console.log(1) 다음에 출력하게 하기
//이때 직접 만든 함수에서 작업
const getUsers = (callback) => {
    fetch("https://jsonplaceholder.typicode.com/users/")
        .then((response) => response.json())
        .then((users) => {
            if (callback) {
                callback(users);
            }
        });
};

const getZipcode = (users) => {
    console.log(users.map((user) => user.address.zipcode));
    console.log(1);
};

getUsers(getZipcode);

const getComments = (callback) => {
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then((response) => response.json())
        .then((comments) => {
            if (callback) {
                callback(comments);
            }
        });
};

const getCommentsByPostIdIs10 = (comments) => {
    console.log(comments.filter((comment) => comment.postId === 10));
    console.log(1);
};

getComments(getCommentsByPostIdIs10);
